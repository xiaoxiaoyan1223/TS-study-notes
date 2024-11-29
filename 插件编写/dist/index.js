// 字典 Dictionaries expire过期时间key permanent永久不过期
var Dictionaries;
(function (Dictionaries) {
    Dictionaries["permanent"] = "permanent";
    Dictionaries["expire"] = "__expire__";
})(Dictionaries || (Dictionaries = {}));

// implements给Storage
class Storage {
    set(key, value, expire = Dictionaries.permanent) {
        // 定义存的格式
        const data = {
            // 用户传入的值
            value,
            // 过期的时间
            [Dictionaries.expire]: expire
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    get(key) {
        const value = localStorage.getItem(key);
        if (value) {
            let data = JSON.parse(value);
            const now = new Date().getTime();
            // 判断有没有过期 因为现在时间已经超过过期时间所以过期
            if (typeof data[Dictionaries.expire] == 'number' && data[Dictionaries.expire] < now) {
                return {
                    message: `您的${key}已过期`,
                    value: null
                };
            }
            else {
                return {
                    message: '成功',
                    value: data.value
                };
            }
        }
        else {
            return {
                message: '值无效',
                value: null
            };
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}

export { Storage };

// Adam Östgaard

createClass = function (className, superClassList) {
    var obj = {};
    obj.className = className;
    obj.superClassList = superClassList;
    obj.new = function () {
        return this;
    }

    obj.call = function (funcName, parameters) {
        if (typeof this[funcName] === "function") {
            return this[funcName](parameters);
        }
        for (item in this.prototypes) {
            var result = item.call(funcName, parameters);
            if (result) {
                return result;
            }
        }
    }
    return obj;
}



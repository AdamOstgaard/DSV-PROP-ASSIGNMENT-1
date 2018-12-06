// Adam Östgaard
// Johan Molin

var myObject = {
    prototypes: []
}

myObject.create = function (protoa) {
    var obj = {};
    obj.__proto__ = this;
    obj.prototypes = protos;
    return obj;
}


myObject.call = function (funcName, parameters) {
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

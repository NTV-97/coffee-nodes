"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraysEqual = void 0;
const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
};
exports.arraysEqual = arraysEqual;
//# sourceMappingURL=arraysEqual.js.map
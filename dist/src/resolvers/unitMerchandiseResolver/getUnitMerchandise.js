"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitMerchandise = void 0;
const _config_1 = require("@config");
const compare = (a, b) => {
    if (a.unitName < b.unitName) {
        return -1;
    }
    if (a.unitName > b.unitName) {
        return 1;
    }
    return 0;
};
const getUnitMerchandise = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
};
exports.getUnitMerchandise = getUnitMerchandise;
//# sourceMappingURL=getUnitMerchandise.js.map
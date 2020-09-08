"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
exports.isAuth = ({ context }, next) => {
    var _a;
    if (!((_a = context.req.session) === null || _a === void 0 ? void 0 : _a.userId)) {
        throw new Error("not authenticated");
    }
    return next();
};
//# sourceMappingURL=isAuth.js.map
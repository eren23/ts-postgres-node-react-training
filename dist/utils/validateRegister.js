"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
exports.validateRegister = (options) => {
    if (options.username.length <= 2) {
        return [
            {
                field: "username",
                message: "username must be longer than 2"
            }
        ];
    }
    if (options.username.includes("@")) {
        return [
            {
                field: "username",
                message: "username cannot contain the character @"
            }
        ];
    }
    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "A decent email address is needed"
            }
        ];
    }
    if (options.password.length <= 2) {
        return [
            {
                field: "password",
                message: "password must be longer than 2"
            }
        ];
    }
    return null;
};
//# sourceMappingURL=validateRegister.js.map
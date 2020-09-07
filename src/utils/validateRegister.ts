import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput"

export const validateRegister = (options: UsernamePasswordInput) => {
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
        ]

    }

    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "A decent email address is needed"
            }
        ]

    }

    if (options.password.length <= 2) {
        return [
            {
                field: "password",
                message: "password must be longer than 2"
            }
        ]

    }
    return null;
}
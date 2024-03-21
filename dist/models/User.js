"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getWithCondition(condition) {
        return `SELECT * FROM users WHERE ${condition}`;
    }
}
exports.default = User;

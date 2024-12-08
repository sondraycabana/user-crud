"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const db_1 = __importDefault(require("../config/db"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query('SELECT * FROM users');
    return rows;
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0] || null;
});
exports.getUserById = getUserById;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = user;
    const [result] = yield db_1.default.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return result.insertId;
});
exports.createUser = createUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = user;
    yield db_1.default.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.query('DELETE FROM users WHERE id = ?', [id]);
});
exports.deleteUser = deleteUser;

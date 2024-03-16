"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostgresConnetion_1 = __importDefault(require("../config/PostgresConnetion"));
const sequelize_1 = require("sequelize");
class Project extends sequelize_1.Model {
}
Project.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    imagePATH: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: 'projects',
    sequelize: PostgresConnetion_1.default,
});
exports.default = Project;

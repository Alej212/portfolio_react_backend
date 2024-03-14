import DB from "../config/PostgresConnetion";
import { Model, DataTypes } from "sequelize";

class Project extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public imagePATH!: string;
}

Project.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    imagePATH: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: 'projects',
    sequelize: DB,
})

export default Project;
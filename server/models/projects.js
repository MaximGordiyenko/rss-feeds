import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const TableName = 'projects';

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
};

const options = {
  timestamps: false,
  freezeTableName: false,
};

export const Projects = sequelize.define(TableName, attributes, options);

await Projects.sync();
console.info(`Table for model Projects was created!`);

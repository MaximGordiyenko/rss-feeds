import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const tableName = 'roles';

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
};

const options = {
  timestamps: false,
  freezeTableName: false,
};

export const Roles = sequelize.define(tableName, attributes, options);

await Roles.sync();
console.info(`Table for model Roles was created!`);

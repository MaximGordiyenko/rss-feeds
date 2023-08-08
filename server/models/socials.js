import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Roles } from "./roles.js";

const tableName = 'socials';

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
  logo: {
    type: DataTypes.STRING,
  },
  link: {
    type: DataTypes.STRING,
    defaultValue: "https://www.google.com/"
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'roles',
      key: 'id'
    }
  },
};

const options = {
  timestamps: false,
  freezeTableName: false,
};

export const Socials = sequelize.define(tableName, attributes, options);

Socials.belongsTo(Roles, { foreignKey: 'role_id' });
Roles.hasMany(Socials, { foreignKey: 'role_id' });

await Socials.sync();
console.info(`Table for model Socials was created!`);

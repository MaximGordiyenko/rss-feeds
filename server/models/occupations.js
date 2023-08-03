import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Projects } from "./projects.js";

const TableName = 'occupations';

const attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skills: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false
  },
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'projects',
      key: 'id'
    }
  },
};

const options = {
  timestamps: false,
  freezeTableName: false,
};

export const Occupations = sequelize.define(TableName, attributes, options);

Occupations.belongsTo(Projects, { foreignKey: 'project_id' });
Projects.hasMany(Occupations, { foreignKey: 'project_id' });

await Occupations.sync();

console.info(`Table for model Occupations was created!`);

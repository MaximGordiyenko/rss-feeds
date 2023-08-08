import { Occupations } from "../models/occupations.js";
import { sequelize } from "../db.js";
import { Projects } from "../models/projects.js";

export const createOccupation = async (req, res) => {
  const { name } = req.body;
  const occupation = await Occupations.create({ name });
  res.status(200).json(occupation);
};

export const getAllOccupations = async (req, res) => {
  const firstUser = await Occupations.findAll();
  res.status(200).json(firstUser);
};

export const getOccupationsByName = async (req, res) => {
  const occupation = await Occupations.findAll({
    attributes: ['name'],
  });
  res.status(200).json(occupation);
};

export const aggregatesOccupations = async (req, res) => {
  const occupation = await Occupations.findAll({
    attributes: [
      "name",
      [sequelize.fn('COUNT', sequelize.col('name')), 'occupation_name']
    ],
    group: ['name'],
  });
  res.status(200).json(occupation);
};

export const getOccupationsAndProjects = async (req, res) => {
  const occupation = await Occupations.findAll({
    include: [Projects],
  });
  res.status(200).json(occupation);
}

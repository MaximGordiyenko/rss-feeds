import { Roles } from "../models/roles.js";

export const updateUserRoleById = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
console.log(id, type);
  try {
    const role = await Roles.findByPk(id);
    if (role) {
      role.type = type;
      await role.save();
      console.info(`Role with ID ${id} updated successfully.`);
    } else {
      console.info(`Role with ID ${id} not found.`);
    }
  } catch (error) {
    console.error(error);
  }
}

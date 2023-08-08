import { useData } from "../context/constants.jsx";
import { useEffect, useState } from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableBody,
  Paper,
  TextField, Typography, Tooltip, IconButton
} from "@mui/material";
import { Delete, Upgrade, InfoOutlined } from "@mui/icons-material";
import { updateUserRoleById, deleteUserById } from "../apis/user/api.js";
import { editRoleTable } from "../constants/table.constants.js";

export const Dashboard = () => {
  const { data, getAllUsers, getOccupationsAndProjects } = useData();
  const [tableData, setTableData] = useState([]);
  
  //FIXME: 1. function getOccupationsAndProjects() rewrite data in store
  useEffect(() => {
    getAllUsers();
    // getOccupationsAndProjects();
  }, []);
  
  useEffect(() => {
    setTableData(data);
  }, [data]);
  
  const handleRoleChange = (id, event) => {
    const updatedData = tableData.map((item) =>
      item.role_id === id ? { ...item, type: [event.target.value] } : item
    );
    setTableData(updatedData);
  };
  
  const handleUpdateRoleClick = (id) => {
    const userToUpdate = tableData.find((item) => item.role_id === id);
    if (userToUpdate) {
      updateUserRoleById(id, userToUpdate.type).then(r => r);
    }
  };
  
  const handleDeleteRoleClick = (id) => {
    deleteUserById(id).then(r => r);
  };
  console.log(data);
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, my: 5 }} elevation={24} square={false}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>Menage Users
        <Tooltip title="Update & Delete User">
          <IconButton>
            <InfoOutlined sx={{color: 'orange', fontSize: 15}}/>
          </IconButton>
        </Tooltip>
      </Typography>
      <Table size="small">
        <TableHead>
            {editRoleTable.map(({ id, idCell, emailCell, roleCell }) => (
          <TableRow key={id}>
              <TableCell>{idCell.toUpperCase()}</TableCell>
              <TableCell>{emailCell.toUpperCase()}</TableCell>
              <TableCell>{roleCell.toUpperCase()}</TableCell>
          </TableRow>
            ))}
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <TextField
                  variant="standard"
                  size="small"
                  value={row.type}
                  onChange={(event) => handleRoleChange(row.role_id, event)}
                />
                <Tooltip title="Update">
                  <IconButton onClick={() => handleUpdateRoleClick(row.role_id)}>
                    <Upgrade sx={{color: 'green'}}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDeleteRoleClick(row.id)}>
                    <Delete sx={{color: 'red'}}/>
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

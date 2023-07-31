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
import { updateUserRole, deleteUser } from "../apis/user/api.js";
import { editRoleTable } from "../constants/table.constants.js";

export const Dashboard = () => {
  const { data, getAllUsers } = useData();
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    getAllUsers();
  }, []);
  
  useEffect(() => {
    setTableData(data);
  }, [data]);
  
  const handleRoleChange = (id, event) => {
    const updatedData = tableData.map((item) =>
      item.id === id ? { ...item, role: event.target.value } : item
    );
    setTableData(updatedData);
  };
  
  const handleUpdateRoleClick = (id) => {
    const userToUpdate = tableData.find((item) => item.id === id);
    if (userToUpdate) {
      updateUserRole(id, userToUpdate.role);
    }
  };
  
  const handleDeleteRoleClick = (id) => {
    deleteUser(id);
  };
  
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
          <TableRow>
            {editRoleTable.map((item) => (
              <TableCell key={item}>{item.toUpperCase()}</TableCell>
            ))}
          </TableRow>
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
                  value={row.role}
                  onChange={(event) => handleRoleChange(row.id, event)}
                />
                <Tooltip title="Update">
                  <IconButton onClick={() => handleUpdateRoleClick(row.id)}>
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

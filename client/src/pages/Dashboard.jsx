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
  TextField, Button
} from "@mui/material";
import { updateUserRole } from "../apis/user/api.js";

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
  
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, my: 5 }} elevation={24}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
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
                <Button onClick={() => handleUpdateRoleClick(row.id)}>Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

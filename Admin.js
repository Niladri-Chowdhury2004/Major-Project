import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Button, Stack, TextField
} from '@mui/material';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    axios.get('http://localhost:8092/api/admin')
      .then(response => setAdmins(response.data))
      .catch(error => console.error('Error fetching admin data:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8092/api/admin/${id}`)
      .then(() => {
        console.log(`Admin with ID ${id} deleted.`);
        fetchAdmins();
      })
      .catch(error => console.error('Error deleting admin:', error));
  };

  const handleEdit = (admin) => {
    setEditRowId(admin.userId);
    setEditFormData({
      fullName: admin.fullName,
      email: admin.email,
      phNo: admin.phNo,
      role: admin.role
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8092/api/admin/${id}`, editFormData)
      .then(() => {
        console.log(`Admin with ID ${id} updated.`);
        setEditRowId(null);
        fetchAdmins();
      })
      .catch(error => console.error('Error updating admin:', error));
  };

  const handleCancel = () => {
    setEditRowId(null);
    setEditFormData({});
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 4 }}>
      <Typography variant="h5" align="center" sx={{ paddingTop: 2 }}>
        Admin List
      </Typography>
      <Table>
        <TableHead sx={{ backgroundColor: '#1976d2' }}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>ID</TableCell>
            <TableCell sx={{ color: 'white' }}>Full Name</TableCell>
            <TableCell sx={{ color: 'white' }}>Email</TableCell>
            <TableCell sx={{ color: 'white' }}>Phone</TableCell>
            <TableCell sx={{ color: 'white' }}>Role</TableCell>
            <TableCell sx={{ color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((admin) => (
            <React.Fragment key={admin.userId}>
              <TableRow hover>
                <TableCell>{admin.userId}</TableCell>
                <TableCell>{admin.fullName}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.phNo}</TableCell>
                <TableCell>{admin.role}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(admin)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(admin.userId)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>

              {editRowId === admin.userId && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                      <TextField
                        name="fullName"
                        label="Full Name"
                        value={editFormData.fullName}
                        onChange={handleInputChange}
                        fullWidth
                      />
                      <TextField
                        name="email"
                        label="Email"
                        value={editFormData.email}
                        onChange={handleInputChange}
                        fullWidth
                      />
                      <TextField
                        name="phNo"
                        label="Phone"
                        value={editFormData.phNo}
                        onChange={handleInputChange}
                        fullWidth
                      />
                      <TextField
                        name="role"
                        label="Role"
                        value={editFormData.role}
                        onChange={handleInputChange}
                        fullWidth
                      />
                      <Button variant="contained" color="success" onClick={() => handleSave(admin.userId)}>
                        Save
                      </Button>
                      <Button variant="outlined" color="secondary" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminList;

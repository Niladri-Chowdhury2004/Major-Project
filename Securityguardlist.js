import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, CircularProgress, Box
} from '@mui/material';

const SecurityList = () => {
  const [guards, setGuards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8092/api/security')
      .then((response) => {
        setGuards(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch security data');
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" mt={5}>
        {error}
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 4 }}>
      <Typography variant="h5" component="div" gutterBottom align="center" sx={{ paddingTop: 2 }}>
        Security Guard Booking List
      </Typography>
      <Table>
        <TableHead sx={{ backgroundColor: '#1976d2' }}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>User ID</TableCell>
            <TableCell sx={{ color: 'white' }}>First Name</TableCell>
            <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
            <TableCell sx={{ color: 'white' }}>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guards.map((guard) => (
            <TableRow key={guard.userId} hover>
              <TableCell>{guard.userId}</TableCell>
              <TableCell>{guard.firstName}</TableCell>
              <TableCell>{guard.lastName}</TableCell>
              <TableCell>{guard.phNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SecurityList;

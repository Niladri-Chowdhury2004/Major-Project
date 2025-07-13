import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  Alert,
  Container,
} from '@mui/material';

const months = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12',
];

const years = Array.from(new Array(15), (_, index) =>
  String(new Date().getFullYear() + index)
);

export default function PaymentForm() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    amount: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setPaymentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    try {
      const response = await axios.post(
        'http://localhost:8092/api/payment/process',
        paymentData
      );
      setMessage('Payment processed successfully!');
      setPaymentData({
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        amount: '',
      });
    } catch (err) {
      console.error(err);
      setError(true);
      setMessage(
        err.response?.data?.message || 'Payment failed. Please try again.'
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Payment Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Card Number"
            name="cardNumber"
            fullWidth
            margin="normal"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                select
                label="Expiry Month"
                name="expiryMonth"
                fullWidth
                margin="normal"
                value={paymentData.expiryMonth}
                onChange={handleChange}
                required
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Expiry Year"
                name="expiryYear"
                fullWidth
                margin="normal"
                value={paymentData.expiryYear}
                onChange={handleChange}
                required
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <TextField
            label="CVV"
            name="cvv"
            fullWidth
            margin="normal"
            type="password"
            value={paymentData.cvv}
            onChange={handleChange}
            required
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            fullWidth
            margin="normal"
            value={paymentData.amount}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Pay Now
          </Button>
          {message && (
            <Alert severity={error ? 'error' : 'success'} sx={{ mt: 3 }}>
              {message}
            </Alert>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

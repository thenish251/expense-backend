const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { addExpense, getExpense, deleteExpense } = require('./controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('./controllers/income');
const app = express();

const PORT = 5000;




//middlewares
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/expense')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });

// Define routes
app.post('/api/v1/add-income', addIncome);
app.get('/api/v1/get-incomes', getIncomes);
app.delete('/api/v1/delete-income/:id', deleteIncome);
app.post('/api/v1/add-expense', addExpense);
app.get('/api/v1/get-expenses', getExpense);
app.delete('/api/v1/delete-expense/:id', deleteExpense);

// Start the server
app.listen(PORT, () => {
    console.log('Listening to port:', PORT);
});

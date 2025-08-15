import express from 'express';

import authRouter from './routes/auth.route.js';
import expenseRouter from './routes/expenses.route.js';
import connectDB from './db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/expenses', expenseRouter); 

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT=${PORT}`);
});

import express from 'express';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../controllers/expense.controller.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, getExpenses);
router.post('/create', authenticate, createExpense);
router.put('/update/:id', authenticate, updateExpense);
router.delete('/delete/:id',authenticate , deleteExpense);

export default router;

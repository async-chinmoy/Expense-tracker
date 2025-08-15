import Expenses from "../models/expense.model.js";

export const getExpenses = async (req, res) => {
  const { category, startDate, endDate } = req.query;

  const filter = { user: req.user.id };

  if (category) {
    filter.category = category;
  }

  if (startDate || endDate) {
    const dateFilter = {};

    if (startDate) {
      dateFilter.$gte = new Date(startDate);
    }

    if (endDate) {
      dateFilter.$lte = new Date(endDate);
    }

    filter.date = dateFilter;
  }

  try {
    const expenses = await Expenses.find(filter).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Cannot get expenses" });
  }
};

export const createExpense = async (req, res) => {
  const { amount, category, description, date } = req.body;

  if (!amount || !category) {
    return res
      .status(400)
      .json({ message: "Amount and category are required" });
  }

  try {
    const expense = new Expenses({
      user: req.user.id,
      amount,
      category,
      description,
      date: date ? new Date(date) : undefined,
    });

    const saved = await expense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateExpense = async (req, res) => {
  const { amount, category, description, date } = req.body;

  if (!amount || !category) {
    return res
      .status(400)
      .json({ message: "Amount and category are required" });
  }

  try {
    const expense = await Expenses.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      {
        amount,
        category,
        description,
        date: date ? new Date(date) : undefined,
      },
      { new: true }
    );

    if (!expense) {
      return res
        .status(404)
        .json({ message: "Expense not found or unauthorized" });
    }

    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expenses.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!expense) {
      return res
        .status(404)
        .json({ message: "Expense not found or unauthorized" });
    }

    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

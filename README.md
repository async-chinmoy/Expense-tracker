# 💰 Expense Tracker

A simple and modern expense tracking web application built with the **MERN stack** and powered by **Bun** for blazing-fast JavaScript/TypeScript runtime and package management.

## 📌 Features

- **User Authentication** – Secure login and signup
- **Add / Edit / Delete Expenses** – Track your spending with ease
- **Expense Categories** – Organize expenses for better insights
- **REST API** – Backend built with Express & MongoDB
- **Bun Runtime** – Faster development and dependency management

---

## 🛠 Tech Stack

**Backend:**
- Node.js API using Express
- MongoDB + Mongoose
- JWT for authentication

**Tools & Runtime:**
- [Bun](https://bun.sh) — Fast JS/TS runtime & package manager
- Dotenv for environment variables

---

## ⚡ Installation & Setup (Bun)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/async-chinmoy/Expense-tracker.git
cd Expense-tracker
```
### 2️⃣ Backend setup
```bash
cd server
bun install
cp .env.example .env   
bun run dev
```
### 🧪 Environment Variables

**In backend/.env:**
```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### 📜 License

This project is licensed under the MIT License.

### 👤 Author

Chinmoy Senapoti
chinmoysenapoti77x@gmail.com

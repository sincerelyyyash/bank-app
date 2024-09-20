# Bank App

This repository contains the **backend** and **frontend** code for a banking application. The backend of the project is fully developed and functional, while the frontend (built using **Next.js**) is currently under development by [@simran903](https://github.com/simran903). The original repository is forked from [@simran903/bank-app](https://github.com/simran903/bank-app), where I am a contributor for the backend.

## Backend Overview

The backend is a RESTful API built with **Node.js**, **Express**, **PostgreSQL**, **Prisma ORM**, and **Cloudinary** for handling image storage. The backend provides a robust API for handling user authentication, transfers, account management, and transaction records.

### Backend Features

- **User Authentication**: Secure user registration and login with JWT-based authentication.
- **Transfers**: 
  - Initiate money transfers between accounts.
  - Fetch sent, received, and all transactions for a particular user.
  - Get filtered transactions based on date and amount.
  - Fetch last 5 transactions for quick access.
- **Account Management**: 
  - Maintain balances for individual user accounts.
  - Ensure secure and seamless transfer of funds between accounts.
- **Transaction History**:
  - Retrieve transfer details by transaction ID.
  - Filters for transactions based on specific criteria such as date or amount.
- **Security**: Middleware for JWT verification, ensuring authorized access to protected routes.
  
### Tools & Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building RESTful APIs.
- **PostgreSQL**: Relational database for storing user accounts, transactions, etc.
- **Prisma**: ORM used for database management and migrations.
- **Cloudinary**: Used for storing and managing user-related images (if required).
- **Zod**: Used for schema validation to ensure proper data input.

---

## Frontend (Under Development)

The **frontend** of this banking app is currently under development by [@simran903](https://github.com/simran903) using **Next.js**. As the frontend is still a work in progress, the focus is on delivering a responsive user interface for account management, transaction history, and user authentication.

---

## Original Repository

This project is a **fork** of the original repository created by [@simran903](https://github.com/simran903). I am contributing to the backend development of the app, and you can find the original repository [here](https://github.com/simran903/bank-app).

---

## How to Run the Backend Locally

### Prerequisites
- Node.js (v14+)
- PostgreSQL
- Cloudinary Account (optional, if image uploads are used)
- Prisma CLI

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sincerelyyyash/bank-app.git
   cd bank-app/server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```bash
   DATABASE_URL="postgresql://your_user:your_password@localhost:5432/your_database"
   JWT_SECRET="your_jwt_secret"
   CLOUDINARY_URL="cloudinary://your_cloudinary_key"
   ```

4. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the server**:
   ```bash
   npm run dev
   ```

   The backend should now be running at `http://localhost:8000`.

---

## Contributions

To contribute to the backend, open a pull request or raise an issue if you encounter bugs.

Backend developed by [@sincerelyyyash](https://github.com/sincerelyyyash).

Frontend under development by [@simran903](https://github.com/simran903).

---

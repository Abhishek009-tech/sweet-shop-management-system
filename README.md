# Sweet Shop Management System 
# Sweet Shop Management System
## Project Structure

The project follows a clear separation of concerns with independent backend and frontend folders.


A full-stack Sweet Shop Management System built using **Node.js, Express, MongoDB, and React**.

The application allows users to browse sweets, purchase available items, and enables admins to manage inventory with role-based access control.

---

## Features

### Authentication & Authorization
- User registration and login using JWT
- Role-based access (Admin / User)
- Token expiry handling and logout

### Sweet Inventory
- View all sweets
- Search sweets by name
- Filter by category and price range
- Purchase sweets (disabled if out of stock)

### Admin Features
- Add new sweets
- Update price and quantity
- Delete sweets
- Automatic stock updates on purchase

### UI & UX
- Responsive React UI
- Clean card-based layout
- Disabled actions for unavailable items
- Clear visual distinction for admin actions

---

## Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Jest & Supertest (Testing)

**Frontend**
- React
- Axios
- CSS (custom styling)

---


## Screenshots

### Login Page
![Login Page](screenshots/login.png)

### Register Page
![Register Page](screenshots/register.png)

### User Inventory
![User Inventory](screenshots/inventory-user.png)

### Filters Feature
![Filters Feature](screenshots/filters.png)

### Admin Dashboard
![Admin Dashboard](screenshots/inventory-admin.png)


## Project Structure

sweet-shop-management-system/
│
├── sweet-shop-backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                # Database configuration
│   │   ├── controllers/
│   │   │   ├── authController.js    # Authentication logic
│   │   │   └── sweetController.js   # Sweet inventory logic
│   │   ├── middleware/
│   │   │   └── authMiddleware.js    # JWT & role-based authorization
│   │   ├── models/
│   │   │   ├── User.js              # User schema
│   │   │   └── Sweet.js             # Sweet schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js        # Auth API routes
│   │   │   └── sweetRoutes.js       # Sweet API routes
│   │   └── app.js                   # Express app setup
│   │
│   ├── tests/
│   │   ├── auth.test.js             # Auth API tests
│   │   └── sweet.test.js            # Sweet API tests
│   │
│   ├── server.js                    # Server entry point
│   ├── package.json
│   └── .env
│
├── sweet-shop-frontend/
│   ├── public/
│   │   ├── screenshots/             # Application screenshots
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js                # Axios API layer
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Sweets.js
│   │   │   └── AddSweet.js
│   │   ├── utils/
│   │   │   └── auth.js               # Auth helpers
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── styles.css
│   │
│   └── package.json
│
├── .gitignore
└── README.md

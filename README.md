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

## Project Structure


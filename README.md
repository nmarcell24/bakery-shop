
![Landing page image](frontend/public/design/desktop-design-selected.jpg)

# 🏪 Bakery Store Backend

A backend API for managing a bakery store, built with **TypeScript**, **Node.js**, **Express**, and **MongoDB**. This application allows users to view available desserts.

## 🚀 Features

- 🍰 Retrieve a list of all available desserts
- 🔄 Data persistence with MongoDB
  
## Experimental feature:
- 📉 Decrease dessert quantity when an item is sold
- 📈 Increase dessert quantity when stock is replenished

## 🛠️ Tech Stack

- **Backend:** Node.js, Express,
- **Database:** MongoDB with Mongoose ORM
- **Environment Variables:** dotenv
- **Frontend:** Typescript

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/note-taking-app.git
   cd note-taking-app
   ```
2. Install dependencies:
   
   **Backend:** 
   ```bash
   cd backend
   npm install
   ```
    **Frontend:** 
   ```bash
   cd frontend
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Start the server:
   ```bash
   npm run d
   ```

## 🔧 API Endpoints

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| GET    | `/desserts`                | Get all desserts                |
|--------|---Experimental Endpoints---|---------------------------------|
| PUT    | `/desserts/:id/increment`  | Increase dessert quantity       |
| PUT    | `/desserts/:id/decrement`  | Decrease dessert quantity       |

## 🙌 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

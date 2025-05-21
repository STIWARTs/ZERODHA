# ZERODHA Project Setup Guide

This project is organized into three main folders: `backend`, `dashboard`, and `frontend`. Each folder represents a separate part of the overall application. Follow the instructions below to set up and run each part of the project.

---

## Folder Structure

```
d:/APNA_COLLEGE/GITHUB/STIWARTs/ZERODHA/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   └── ...
│
├── dashboard/
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── logo.png
│   │   └── robots.txt
│   └── src/
│       ├── index.css
│       ├── index.js
│       ├── components/
│       │   ├── Apps.js
│       │   ├── BuyActionWindow.css
│       │   ├── BuyActionWindow.js
│       │   ├── Dashboard.js
│       │   ├── DoughnoutChart.js
│       │   ├── Funds.js
│       │   ├── GeneralContext.js
│       │   ├── Holdings.js
│       │   ├── Home.js
│       │   ├── Menu.js
│       │   ├── Orders.js
│       │   ├── Positions.js
│       │   ├── Summary.js
│       │   ├── TopBar.js
│       │   ├── VerticalGraph.js
│       │   └── WatchList.js
│       └── data/
│           └── data.js
│
├── frontend/
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── font-awesome-4.7.0/
│   │       ├── HELP-US-OUT.txt
│   │       ├── css/
│   │       ├── fonts/
│   │       ├── less/
│   │       └── scss/
│   │   └── media/
│   │       └── images/
│   └── src/
│       ├── index.css
│       ├── index.js
│       ├── landing_page/
│       │   ├── Footer.js
│       │   ├── Navbar.js
│       │   ├── NotFound.js
│       │   ├── OpenAccount.js
│       │   └── ...
│       └── test/
│           └── Hero.test.js
│
└── Readme.md
```

---

## How to Run Each Project

### 1. Backend

```sh
cd backend
npm install
npm start
```

- This will install dependencies and start the backend server.

### 2. Dashboard

```sh
cd dashboard
npm install
npm start
```

- This will install dependencies and start the dashboard app (usually on a different port).

### 3. Frontend

```sh
cd frontend
npm install
npm start
```

- This will install dependencies and start the main frontend app.

---

## Environment Variables

- The backend folder requires a `.env` file for MongoDB and other sensitive configuration.
- This file is already gitignored and will not be pushed to the repository.
- Example `.env` content:

```
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

Be sure to create your own `.env` file in the `backend` folder before running the backend server.

---

## Notes

- Make sure you have Node.js and npm installed on your system.
- Each folder is a separate Node.js project. You must run `npm install` and `npm start` in each folder individually.
- The backend, dashboard, and frontend may run on different ports. Check the terminal output for the URLs.
- If you encounter issues, check each folder's `package.json` and documentation for specific requirements.

---

Happy coding!

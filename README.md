# ✈️ FlyMate
FlyMate is a flight ticket booking application developed using MERN Stack (MongoDB, Express js, React js, Node js).

### Overview
This backend application provides RESTful APIs for the Reservation System, enabling users to:

+ Search for flights by entering origin, destination, and departure date
+ View a list of matching flights
+ Select a flight to view more details
+ Fill out a form to add passenger information
+ Perform CRUD operations on passenger data

### 🛠️  Technologies Used

+  **Node.js** and **Express.js** for server-side development
+  **MongoDB** with **Mongoose** for database management
+  **CORS** for handling cross-origin requests
+  **dotenv** for environment variable management


### 📁 Project Structure

```
backend/
├── controllers/
│   ├── flights/
│   │   └── flights-controller.js
│   └── passengers/
│       └── passengers-controller.js
├── models/
│   ├── Flights.mjs
│   └── Passengers.mjs
├── routes/
│   ├── flights/
│   │   └── flights.mjs
│   └── passengers/
│       └── passengers.mjs
├── .env
├── index.mjs
└── package.json
```
### 📄 API Endpoints

#### Flights







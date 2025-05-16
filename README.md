# ✈️ FlyMate - Backend
FlyMate is a flight ticket booking application developed using MERN Stack (MongoDB, Express js, React js, Node js).

### Overview
This backend application provides RESTful APIs for the Reservation System, enabling users to:

+ Search for flights by entering origin, destination, and departure date
+ View a list of matching flights
+ Select a flight to view more details
+ Fill out a form to add passenger information
+ Perform CRUD operations on passenger data

### Website Link
(FlyMate) - https://mk-capstonefrontend.onrender.com/

### :hammer_and_wrench: FrontEnd (React)
[https://github.com/manogarik/MK-CapstoneFrontEnd]

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

+  GET /flights/seed : Initially seed flights into the Flights collection.
+  GET /flights/search?origin=XXX&destination=YYY : Search for flights based on criteria
+  GET /flights/airports : Fetches the origin and destination airports available so the user can select one from the list.
+  GET /flights/:id : Gets the passenger details using populate from a flight with the given flight id.
+  PUT /flights/:id/addpassenger : Updates the passenger array in the flights collection as the passenger gets added.
+  DELETE /flights/:flightId/passengers/:passengerId : Remove the passenger from the flight when the passenger gets deleted.

#### Passengers

+  POST /passengers/ : Adds a new passenger to the collection.
+  DELETE /passengers/:id : Deletes a passenger from the collection.

#### ⚙️ Setup Instructions

1. **Navigate to the directory**
   ```
   cd Capstone-Backend
   ```
2. **Install Dependencies**
   ```
   npm install nodemon mongoose express dotenv cors
   ```
3. **Configure Environment variables**
   Create a .env file in the directory with the following content:
   ```
   ATLAS_URI =mongodb+srv://manogarikumaraguru:ManoMongo2025@mongopractice.t0opbtz.mongodb.net/FlyMate
   PORT =3000
   ```
4. **Start the Server**
   ```
   node index.mjs
   ```
   







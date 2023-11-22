# uloha1

Úloha 1

# Node.js Express App

This is a simple Node.js application using the Express framework. The application provides routes for tracking and counting operations. It also connects to a Redis database for data storage.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Redis: [Download Redis](https://redis.io/download)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   Install dependencies:
   ```

bash
Copy code
npm install
Configure the application:

Copy the config/config.js.example file to config/config.js and update the configuration as needed.

bash
Copy code
cp config/config.js.example config/config.js
Update the values in config/config.js with your Redis configuration.

Running the Application
Run the following command to start the application:

bash
Copy code
npm start
The application will start on the configured port, and you should see a message indicating that the app is listening on that port.

Routes
/track: Provides routes for tracking operations.
/count: Provides routes for counting operations.
Redis Connection
The application connects to a Redis database for data storage. Ensure that your Redis server is running and accessible.

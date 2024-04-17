# QUOTE API
>The Quote API is a Node.js Express server that allows users to manage authors and their quotes. It provides endpoints for creating, retrieving, updating, and deleting author information. 

## Getting Started
1. Clone the Repository:
* Clone this repository to your local machine using (`git clone`)
2. Install Dependencies:
* Navigate to the project directory and run npm install to install the required dependencies.
3. Database Setup:
* Make sure you have a PostgreSQL database set up.
* Update the database connection details in prisma/schema.prisma.
4. Environment Variables:
* Create a .env file in the root directory and set the following environment variables:

DATABASE_URL=your_database_url_here
PORT=5000

5. Run Migrations:
* Run npx prisma migrate dev to apply database migrations.
6. Start the Server:
* Run npm start to start the server.
* The API will be available at http://localhost:5000.


# Endpoints
1. Get All Authors
* Endpoint: GET /authors/findall
* Description: Retrieves a list of all authors.
* Response Format:

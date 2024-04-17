# QUOTE API

> The Quote API is a Node.js Express server that allows users to manage authors and their quotes. It provides endpoints for creating, retrieving, updating, and deleting author information.

## Getting Started

1. Clone the Repository:
   - Clone this repository to your local machine using `git clone`
2. Install Dependencies:
   - Navigate to the project directory and run `npm install` to install the required dependencies.
3. Database Setup:
   - Make sure you have a PostgreSQL database set up.
   - Update the database connection details in `prisma/schema.prisma`
4. Environment Variables:
   - Create a `.env` file in the root directory and set the following environment variables:
     `DATABASE_URL="postgresql://postgres:password@localhost:5432/my_quote_api?schema=public"`
5. Run Migrations:
   - Run `npx prisma migrate dev` to apply database migrations.
6. Start the Server:
   - Run `npm start` to start the server.
   - The API will be available at `http://localhost:5000`

# Endpoints

1. ## Get All Authors 
    -   Endpoint: `GET /authors/findall`
           * Description: Retrieves a list of all authors.
    -           Response Format: 
    
    `json`
        (```{
                "message": "SUCCESS! Authors found",
                "authors": 
                    [
                        {
                            "id": 1,
                            "name": "Samuel Douglas Othieno",
                            "email": "douglasothieno@gmail.com"
                        },
                        // Other authors...
                    ] 
            }
        )

2. ## Get Author by Email
    - Endpoint: GET /authors/find
        * Description: Retrieves an author by their unique email address.
    -   Request Body:
    
    `JSON`
        (```
            {
                "email": "john@example.com"
            }
        )

    -    Response Format:
     `   JSON`

          
        (```
            {
                "message": "SUCCESS! Author found",
                "uniqueAuthorExits":
                    {
                        "id": 1,
                        "name": "John Doe",
                        "email": "john@example.com"
                    }
            }
        )

3. ## Create New Author
    - Endpoint: POST /authors/create
        * Description: Creates a new author.
        - Request Body:
            `JSON`
            (```{
                "name": "Jane Smith",
                "email": "jane@example.com"
            })
        - Response Format:
            `json`
                {
                    "message": "SUCCESS! New Author added","newAuthor": 
                        { 
                            "id": 2,
                            "name": "Jane Smith",             "email": "jane@example.com"
                        }
                }

            
4. ## Update Author Email
    - Endpoint: PUT /authors/update
        * Description: Updates an author’s email address.
        - Request Body:
            `JSON`
                {
                    "uniqueEmail": "john@example.com",
                    "newEmail": "john.smith@example.com"
                }             

        - Response Format:
            `JSON`
                {
                    "message": "SUCCESS! Author updated", "author": 
                        {
                            "id": 1,
                            "name": "John Doe",
                            "email": "john.smith@example.com"
                        }
                }

5. ## Delete All Authors
    - Endpoint: DELETE /authors/delete
        * Description: Deletes all authors.
        - Response Format:
            `JSON`
                {
                    "message": "SUCCESS! Authors deleted"
                }













# Todo App API
This is a simple Todo API built using Node.js and Express.js. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on todos, stored locally in a JSON file.

## Features
- Create a new todo
- Read all todos or a specific todo by ID
- Update an existing todo by ID
- Soft Delete a todo by ID (mark as deleted)
- Hard Delete a todo by ID (permanent removal)
- Filter todos based on status and priority
## Requirements
- Node.js (version 12.x or higher)
- NPM (comes with Node.js)
## Setup
1. Clone the repository to your local machine.

```bash 
git clone <repository-url>
cd todo-app
```
2. Install dependencies.
```bash
npm install
```
3. Run the server.
```bash
npm start
```
Alternatively, you can use:
```bash
node index.js
```
The server will be running on http://localhost:3000.

## Endpoints
1. **Get All Todos**
URL: /todos
Method: GET
Description: Fetches all the todos that have not been deleted (soft deleted).
Response: A list of todos.

Example:

```bash
GET /todos
```

2. **Get Todo by ID**
URL: /todos/:id
Method: GET
Description: Fetches a specific todo by its ID (if not soft deleted).
Response: The todo object.


Example:

```bash
GET /todos/1
```
3. **Filter Todos**
URL: /filterTodo
Method: GET
Description: Filters todos based on status and priority.
Body: Must send status and priority in the request body.
Example:

```bash
GET /filterTodo
Body: {
  "status": "completed",
  "priority": "high"
}
```
4. **Add a New Todo**
URL: /todos
Method: POST
Description: Adds a new todo to the list.
Body: Requires task, priority, status, deadline, created_at.

Example:

```bash
POST /todos
Body: {
  "task": "Learn Node.js",
  "priority": "high",
  "status": "pending",
  "deadline": "2024-09-15",
  "created_at": "2024-09-10"
}
```

5. **Update a Todo by ID**
URL: /todos/:id
Method: PUT
Description: Updates the details of an existing todo.
Body: Requires task, priority, status, deadline, updated_at.

Example:

```bash
PUT /todos/1
Body: {
  "task": "Learn Express.js",
  "priority": "medium",
  "status": "completed",
  "deadline": "2024-09-20",
  "updated_at": "2024-09-10",
  "deleted": false
}
```

6. **Soft Delete a Todo by ID**
URL: /todos/:id
Method: DELETE
Description: Marks a todo as deleted (soft delete).
Response: The soft-deleted todo.

Example:

```bash
DELETE /todos/1
```
7. Hard Delete a Todo by ID
URL: /deleteTodo/:id
Method: DELETE
Description: Permanently deletes a todo from the list.
Response: Success message.
Example:

```bash
DELETE /deleteTodo/1
```
## File Structure
```bash
todo-app/
├── index.js          # Main server file
├── todos.json        # File to store todos in JSON format
├── package.json      # Project metadata and dependencies
└── README.md         # Documentation
```
## Error Handling
- 500: Internal server error for exceptions.
- 400: Bad request for invalid input or resource not found.
## Todo JSON Structure
Each todo is stored as a JSON object with the following structure:

```json
{
  "id": 1,
  "task": "Learn Node.js",
  "priority": "high",
  "status": "pending",
  "deadline": "2024-09-15",
  "created_at": "2024-09-10",
  "updated_at": null,
  "deleted": false
}
```
## License
This project is licensed under the MIT License.


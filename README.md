# Task Management API

This API provides endpoints to manage tasks.

## Endpoints

- `GET /task`: Get all tasks.
- `GET /task/:id`: Get a specific task by ID.
- `POST /task`: Add a new task.
- `DELETE /task/:id`: Delete a task by ID.
- `PUT /task/:id`: Update a task by ID.

## Usage

### Prerequisites

- Node.js and npm should be installed.

### Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server with `npm start`.

### Usage Example

```bash
# Get all tasks
curl http://localhost:3000/task

# Get a specific task by ID
curl http://localhost:3000/task/1

# Add a new task
curl -X POST http://localhost:3000/task -d '{"task": "New Task", "description": "Task Description", "priority": "High", "startDate": "2023-10-10", "endDate": "2023-10-15"}' -H 'Content-Type: application/json'

# Delete a task by ID
curl -X DELETE http://localhost:3000/task/1

# Update a task by ID
curl -X PUT http://localhost:3000/task/1 -d '{"task": "Updated Task", "description": "Updated Description", "priority": "Medium", "startDate": "2023-10-11", "endDate": "2023-10-16"}' -H 'Content-Type: application/json'

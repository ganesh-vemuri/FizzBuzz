# FizzBuzz Web Application

This is a simple web application that implements the FizzBuzz logic. The application accepts an array of values and for each value:

1. If the value is a multiple of 3, it outputs "Fizz".
2. If the value is a multiple of 5, it outputs "Buzz".
3. If the value is divisible by both 3 and 5, it outputs "FizzBuzz".
4. Otherwise, it outputs the division results for 3 and 5.

## Getting Started

### Project Structure

```
.
├── public
│   ├── index.html        # HTML file for the frontend
│   ├── script.js         # JavaScript file for the frontend
│   └── style.css         # CSS file for the frontend
├── test
│   ├── fizzbuzz.test.js  # Unit tests for the FizzBuzz function
│   └── integration.test.js # Integration tests for the web application
├── .dockerignore         # Files to ignore in Docker build
├── .gitignore            # Files to ignore in Git
├── Dockerfile            # Docker configuration file
├── package.json          # NPM package configuration
├── package-lock.json     # NPM package lock file
├── server.js             # Node.js server file
└── README.md             # Project README file
```


These instructions will help you set up and run the application on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- [Docker](https://www.docker.com/get-started) installed on your local machine (optional, for Docker setup).

### Running the Application using Node.js

1. Clone the repository or download the source code.

2. Navigate to the project directory.

    ```sh
    cd FizzBuzz
    ```

3. Install the dependencies.

    ```sh
    npm install
    ```

4. Start the server.

    ```sh
    node server.js
    ```

5. Open your browser and navigate to `http://localhost:3000`.


### Running Unit tests

This project uses Jest and Supertest for unit and integration testing.

To run the tests, use:

```sh
npm test
```

### Running the Application using Docker

1. Clone the repository or download the source code.

2. Navigate to the project directory.

    ```sh
    cd FizzBuzz
    ```

3. Build the Docker image.

    ```sh
    docker build -t fizzbuzz .
    ```

4. Run the Docker container.

    ```sh
    docker run -p 3000:3000 fizzbuzz
    ```

5. Open your browser and navigate to `http://localhost:3000`.

#### Stopping and Removing the Docker Container

To stop the Docker container, you can use the docker ps command to list the running containers and then docker stop to stop the container:

1. List the running containers.

```sh
docker ps
```

2. Stop the container. Replace <container_id> with the actual container ID from the `docker ps` output.

```sh
docker stop <container_id>
```

3. Remove the container.

```sh
docker rm <container_id>
```

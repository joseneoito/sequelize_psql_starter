# Sequelize Node Express PSQL Starter

This repository contains a starter template for building a Node.js Express application with Sequelize and PostgreSQL (PSQL).

## Prerequisites

Before getting started, ensure you have the following:

- Node.js installed on your machine
- PostgreSQL installed and running
- Git installed (optional, for cloning the repository)

## Getting Started

To set up the project, follow these steps:

1. Clone the repository to your local machine using Git:

    ```git clone <repository_url>```

If you don't have Git installed, you can download the repository as a ZIP file and extract it.

2. Install the project dependencies by running the following command in the project's root directory:

    ```npm i```

3. Update the environment variables (`env`) file with the proper local or remote database credentials. Make sure to provide the correct information for the database connection.

4. Run the following command to create the database specified in the environment variables:
    ```npm run db:create```
This command will create the specified database if you have the proper access to the database server.

At this point, your project should be set up and ready to use Sequelize, Node.js, Express, and PostgreSQL.

Feel free to explore the project structure and customize it to fit your needs. You can add models, routes, controllers, and other components as required for your application.

## License

This project is licensed under the [MIT License](LICENSE).

Please note that this README assumes familiarity with basic web development concepts, Node.js, Express, Sequelize, and PostgreSQL.


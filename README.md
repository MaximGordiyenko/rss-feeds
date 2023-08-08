RSS App for Reddit

This application is built using Node.js and React, and it allows users to request and display Reddit posts via RSS feeds. The app includes both a backend server and a frontend interface.

Features

Backend Server
bcrypt: Passwords are securely hashed using bcrypt for enhanced security.
cors: Cross-Origin Resource Sharing (CORS) is implemented to handle requests from the frontend.
node-cron: The app utilizes node-cron to schedule periodic tasks, such as fetching and updating RSS feeds.
rss-parser: The RSS feeds from Reddit are parsed using the rss-parser library, allowing for easy extraction of post data.
postgres: The app integrates with a PostgreSQL database to store and manage user data.
Authorization
User authentication and authorization are implemented to ensure secure access to the app's functionalities.
Frontend Interface
The frontend is built with React, providing a user-friendly interface to interact with the app.
Post Display: Users can view Reddit posts fetched from the RSS feeds, including features like sorting, filtering, and pagination.
Create, Update, Delete: Users can create new posts, update existing posts, and delete unwanted posts.
Getting Started

To run this application locally, follow these steps:

Clone the repository.
Install the required dependencies using npm or yarn.
Set up the PostgreSQL database and configure the connection settings.
Run the backend server using the provided scripts.
Start the frontend interface by executing the appropriate commands.
Access the app in your browser at the specified URL.
For detailed instructions on setting up and running the app, please refer to the project's documentation.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code according to the terms of the license.

Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

Acknowledgments

We would like to acknowledge the following open-source projects that were instrumental in the development of this application:

bcrypt: Link to bcrypt GitHub repository
cors: Link to cors GitHub repository
node-cron: Link to node-cron GitHub repository
rss-parser: Link to rss-parser GitHub repository
postgres: Link to PostgresQL
Thank you for your contributions to the open-source community!

| users                           | companies                   | feeds                   | authors             | locations | books                   |
|---------------------------------|-----------------------------|-------------------------|---------------------|-----------|-------------------------|
| id                              | id                          | id                      | id                  | id        | id                      |
| email                           | name                        | title                   | name                | city      | title                   |
| password                        | address                     | pubdate                 | status              | state     | year                    |
| nickname                        | phone                       | isodate                 | age                 | country   | genre                   |
| create_at                       | email                       | link                    | sex                 | zip       | [author_id](authors.id) |
| update_at                       | website                     | content                 | [book_id](books.id) | latitude  |                         |
| [role_id](role.id)              | logo                        | contentSnippet          |                     | longitude |                         |
| [company_id](companies.id)      | description                 | author                  |                     | create_at |                         |
| [location_id](locations.id)     | create_at                   | [user_id](users.id)     |                     | update_at |                         |
| [occupation_id](occupations.id) | update_at                   | [author_id](authors.id) |                     |           |                         |
|                                 | [location_id](locations.id) | [book_id](books.id)     |                     |           |                         |

| occupations | roles | socials                     |
|-------------|-------|-----------------------------|
| id          | id    | id                          |
| name        | type  | name                        |
|             |       | logo                        |
|             |       | link                        |
|             |       | [role_id](roles.id)         |
|             |       | [user_id](users.id)         |
|             |       | [location_id](locations.id) |

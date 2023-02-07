# eCommerce Backend
## Description
E-commerce backend application using Express.js, MySQL, and Sequelize. This is a demonstration of my ability to write RESTful API routes utilizing Sequelize.

## Installation
Please run `npm install` at the root level of the directory to install all dependencies for this application to function properly. Additionally, [Node.js](https://nodejs.org/en/download/) must be installed on your machine, as well as [MySQL](https://dev.mysql.com/downloads/mysql/). Lastly, you will need to download [Insomnia](https://insomnia.rest/download) to test these API routes, as there is no frontend for this application. No account needed for insomnia to function as needed.

It is very helpful to have the nodemon npm package installed. If you do not have this installed on your machine, simply run `npm install nodemon`. This package automatically restarts your server when you make changes to your files.

## Usage
The first thing you will need to do to use the application is find the file named `.env.EXAMPLE` and rename it to `.env`. Then, type in your information to log into MySQL. "Root" should suffice for the username for the application to run on your local machine. 

Once that is complete. At the level of `/Develop/db` open a terminal window and log into MySQL. Once logged in, run the command `SOURCE schema.sql`. This will create a database called ecommerce_db for you. Leave that window open, and open another terminal at the root level.

Open the server.js file and look to line 16. Change where it says `force: false` to `force: true`. This enables sequelizes table synchronization, and will add the necessary tables to the ecommerce_db database created earlier. Now, in the terminal you opened at the root level, run either `node server.js` or, preferrably, `nodemon server.js`. You should see a number of SQL logs in the terminal starting with `Executing (default)`. Go back to line 16 in server.js and revert the change you made from `force: true` to `force: false`. This will prevent your data from being deleted after we add data to the database.

Now, at the root level, open a third terminal window (it helps to name the windows as you open them), and run the command node `Develop/seeds/index.js`. This will populate the database with information for testing.

You are now set up to use Insomnia. Each model (Category, Product, and Tag) has a routes.js file associated with it, and in each route file, there is a GET all request, GET by ID request, POST new request, PUT/UPDATE request, and DELETE request.

### Links
[Video Demonstration](https://drive.google.com/file/d/1_5qqGFaGunarh-GBkU4E3AiMiihHhic8/view?usp=share_link)



#### _**IMPORTANT NOTE**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".

# Welcome to our MERN stack Multi Vendor Ecommerce startup!
## THE BOX

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

We are excited to introduce you to our project which utilizes the power of MERN stack and other latest technologies like Tailwind CSS, Socket IO, and Redux Toolkit. Our startup is focused on creating a multi-vendor ecommerce platform that will revolutionize the way business is done in Cameroon.

## Documentation

Our project is well-documented, making it easy for new developers to get started quickly. We have provided detailed instructions on how to set up the project locally and how to deploy it to a production environment. Our documentation also includes information on the architecture of the project, the technologies used, and the best practices we follow.

## MERN Stack

MERN stack stands for MongoDB, Express, React, and Node.js. It is a popular full-stack JavaScript framework that allows developers to build web applications easily. Our project utilizes MERN stack, which means that we have used MongoDB for our database, Express for our backend, React for our frontend, and Node.js for our server.

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows developers to create custom designs quickly. It provides a set of pre-defined CSS classes that can be used to style HTML elements. Our project utilizes Tailwind CSS for styling our frontend components.

## Socket IO

Socket IO is a library that enables real-time, bidirectional communication between clients and servers. It allows for the creation of applications that require real-time updates, such as chat applications or multiplayer games. Our project utilizes Socket IO to provide real-time updates to users.

## Redux Toolkit

Redux Toolkit is a set of utilities that simplifies the process of using Redux for state management. It provides a set of pre-defined functions that can be used to create Redux stores, reducers, and actions. Our project utilizes Redux Toolkit to manage the state of our application.

## Our Ecommerce App

Our multi-vendor ecommerce app is designed to enable vendors to sell their products to customers on a single platform. Customers can browse through various products from different vendors, add them to their cart, and checkout with ease. Vendors can manage their products, orders, and payments through a simple and intuitive interface.

## Installation

To get started with our project, please follow the steps below:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/menoc61/MYBOX.git
   ```

2. Install the dependencies:

   ````bash
   cd frontend
   npm install --force

   cd socket
   npm install

   cd backend
   npm install --force
   ```

3. Create a .env file in the root directory of the project and add the following variables:

   ````env
    PORT = 8000
    DB_URL = "mongodb+srv://gillemomeni:blBL5N5Q6zCsWtKI@mybox.dctyhgg.mongodb.net/test"
    JWT_SECRET_KEY = "dfbkjgflseiia3948943954wfsdchsgfuw#%#%"
    JWT_EXPIRES = 7d
    ACTIVATION_SECRET = "hfskjdweuiwe093$wew$@%W!Edfonoddfi"
    SMPT_HOST = smtp.gmail.com
    SMPT_PORT = 465
    SMPT_PASSWORD = luwuxzhmryxoyozm
    SMPT_MAIL = gillemomeni@gmail.com
    STRIPE_API_KEY = "pk_test_51N4aYAEyMWxnsaof9c655hsknea6NtcTUP8p5sahjXAVzmXK2DTYgJK5ONpMiiH5qlO1U0dTQ2FXDokbgwPRTuOd00lRZZFLgO"
    STRIPE_SECRET_KEY = "sk_test_51N4aYAEyMWxnsaof2Voi8c0IQt5zYfRZfb52aOuQJwN8GOAOC7QiPsSF5JtncD7SXgJ7FWYwgySBP4WSziSeR0Sx00iU3EFyjW"

   ```

   *Note: Replace `SMPT_MAIL,SMPT_PASSWORD ` and `STRIPE_API_KEY,STRIPE_SECRET_KEY` with your own values.*

4. Start the development server in the backend/configuration directory:

   ````bash
   npm run dev
   ```

5. Open your browser and visit http://localhost:3000 to see the application running.


Please make sure to keep your .env file private and never commit it to version control.
## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Contributing

- This project has been think by the club iai dev 2022-2023 and design by myself `Gilles Momeni`


## License

This project is not yet licensed but will be lather put under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Questions

If you have any questions, please [contact me](mailto:gillemomeni@gmail.com) or visit my [GitHub profile](https://github.com/menoc61).

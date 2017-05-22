
[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![PugJS](https://github.com/MarioTerron/logo-images/blob/master/logos/pug.png)](http://www.pugjs.org/) [![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) [![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/) 

[![HTML5, CSS3 and JS](https://github.com/MarioTerron/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)
[![Bootstrap](https://github.com/MarioTerron/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![SASS](https://github.com/MarioTerron/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)
[![Bower](https://github.com/MarioTerron/logo-images/blob/master/logos/bower.png)](https://bower.io//)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


# E-Commerce Cart

A simple e-commerce cart **build with ES6, Pug, CSS3 and Express.js** at [Skylab Coders Academy](http://www.skylabcoders.com) Full Stack Web Development Bootcamp.

---

**How to Install**
1. Download the zip or clone the repository
2. Open your terminal and type `npm start` (it installs all npm and bower dependencies)
3. Go to your browser and type `localhost:3000`

This will render the pug files into html and will listen to several endopoint to allow clients interact with the data.

## Actions available

All these endpoints will start locally w/ `http://localhost:3000` 

Example: `http://localhost:3000/cart`

### GET endpoints

#### [GET] `/`

Get list all items available.

#### [GET] `/cart` 

Get specific taks per id.


### POST endpoints

#### [POST] `/cart`

To add a item to the cart.


### PUT endpoints

#### [PUT] `/cart/:id` 

To modify the quantity of each item.


### DELETE endpoints

#### [DELETE] `cart/:id` 

To remove a item from the cart.

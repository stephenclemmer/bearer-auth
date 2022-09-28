# LAB - Class 07: Bearer Auth

Author: Stephen Clemmer

### Links and Resources

back-end server url: TBD

PORT - 3001

**Problem Domain**
Authentication Server Phase 2: Token (Bearer) Authentication

At this point, our auth-server is able to allow a user to create an account as well as to handle Basic Authentication (user provides a username + password). When a “good” login happens, the user is considered to be “authenticated” and our auth-server generates a JWT signed “Token” which is returned to the application

We will now be using that Token to re-authenticate users to shield access to any route that requires a valid login to access.

**UML**
![Lab 7 UML](./assets/Lab%2007%20Bearer%20Auth%20UML.png)
![Lab 7 Routing Diagram](./assets/Lab%207%20Routing.png)

**Tests**
All tests provided in the lab

**File Structure**
├── .gitignore
├── .eslintrc.json
├── __tests__
├── src
│   ├── auth
│   │   ├── router.js
│   │   ├── middleware
│   │   │   ├── basic.js
│   │   │   ├── bearer.js
│   │   ├── models
│   │   │   ├── index.js
│   │   │   ├── users.js
│   │   ├── router
│   │   │   ├── handlers.js
│   │   │   ├── index.js
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── server.js
├── index.js
└── package.json

### Features

Feature 1:
As a user, I want to obtain a token after I signin, so that I can re-authenticate
Using an HTTP REST client, or a web form:
Following a POST to /signup to create an account (or) Following a POST to /signin with basic authorization
Send a response to the client with the proper status code along with an object with the following properties

{
  user: {
    _id: 'ID FROM DB',
    username: 'myusername'
  },
  token: 'JWT Token Here'
}

Feature 2:

As a user, I want to use my token to access routes that require a valid user
Using an HTTP REST client, send a request to a “protected” route, such as /secretstuff
Your request must send an “Authorization” header, with the value of Bearer TOKEN
TOKEN is the token that you would have returned to the user after their signin step (above)
If the TOKEN is valid (i.e. if it represents an actual user)
The route should function as it normally would (sending a response)
If not
Send the user an error message stating “Invalid Login”

Feature 3:
As the website owner, I want our token system to be as secure as possible so that our users can feel safe when logging in
Research ways to “secure” our JWT Tokens
Implement one or more methods to secure our login tokens

### Routes

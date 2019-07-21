# 1. System flow

## 1.1 User Authentication Model

### 1.1.1 Pre sign up

/user/keys
GET

#### Authorization header

none

#### Payload

none

#### Process

* SALT: generate 20 char KEY using the best available random generator with (uppercase, lowercase, numeric, special characters)
* SOLUTION: generate a random series of 50 char text

#### Persistence

* none

#### Response

* 200
  * salt
  * solution

### 1.1.2 Sign up

/user/signup
POST

#### Authorization header

* none

#### Payload

* name
* firstname
* lastname
* email
* problem
* solution
* salt

#### Process

* none

#### Persistence

* id (auto generated)
* all fields from payload

#### Response

* 201 - If successfully created
* 400 - Issue with payload
* 500 - Any unknown error

#### User Interaction flow

* User interface
  * name
  * firstname
  * lastname
  * email
  * password
* Component
  * requests /user/keys (to get salt and solution)
  * encrypts verificationCode using salt+password
  * sends /user/signup
* Feedback to user
  * 201 from /user/signup
    * User created successfully
  * 400/500
    * Error creating user. Try again and if you face issues again send us an email

### 1.1.3 Pre sign in

/user/keys/{name}
GET

#### Authorization header

* none

#### Payload

* none

#### Process

* get salt and problem from database for the given user

#### Persistence

* none

#### Response

* 200 - if user name is present
  * salt
  * problem
* 404 - if user name is not present

### 1.1.4 Sign in

/user/signin
POST

#### Authorization header

* none

#### Payload

* name
* solution

#### Process

* find if solution from payload matches with solution from database for the given user
* If matches, generate a JWT token with username inside it. Use the random secret from the static map list and note down the key to secret

#### Response

* 401 - if solution does not match
* 200 - solution matches
  * JWT token
  * token key
* 500 - unknown error while processing (should never happen usually)
* 404 - if user name is not present

#### User interaction flow

* User interface

  * username
  * password

* Component

  * requests /user/keys/{name} (to get salt and problem)
  * computes solution for the problem using salt+password
  * sends /user/signin
* Feedback to user
  * 401 - Incorrect password
  * 404 - User does not exist
  * 200 - Redirect to bookmarks route

#### Footnotes

#### JWT secret generation logic

* Have a global static map variable in one application class
* SEED KEYS: seed the map with randomly generated key and value (5 entries for now.. can be increased in future

### 1.1.5 Delete

/user
DELETE

### 1.1.6 Update details / password

/user/update
POST

#### Authorization header

* JWT token
* token key

#### Payload

* only fields to be updated

#### Process

* similar to signup

# 2 Environment and API Permissions

## 2.1 Web service configuration

* Maintain two versions of environment properties in spring boot properties
* Production version will connect to production cloud mongo
* Local version will connect to local or test cloud mongo

## 2.2 Database details

* MongoDB test cloud account - for development purpose
* MongoDB production cloud account - production deployment
* Local instance

## 2.3 Service endpoints

* Development/Test URL https://curate-service.herokuapp.com
* Production URL https://curate-service.herokuapp.com

## 2.4 Restricted access to service API

* Protect the service layer with an API key based access mechanism
* UX will send API key to get access to the API

## 2.5 JWT based session management

* Protect all endpoints with a request filter / interceptor
* All endpoints (except the initial handshake endpoints) should be protected through JWT token based authorization header

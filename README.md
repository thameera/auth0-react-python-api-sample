# Auth0 + React SPA + Python API Sample

This project demonstrates how to integrate Auth0 with a React SPA client and a Python backend API.

The code is based on the following two repos:
* https://github.com/auth0-samples/auth0-react-samples/tree/master/04-Calling-API
* https://github.com/auth0-samples/auth0-python-api-samples/tree/master/00-Starter-Seed

## Setting up

### Client

* Go to `client/src/Auth/`.
* Copy `auth0-variables.js.example` to `auth0-variables.js` and set the variables.

Example:

```
export const AUTH_CONFIG = {
  domain: 'tham.auth0.com',
  clientId: 'IlMA5oWyYz8KQbhmAs7f5K20IYq1rHn1',
  apiUrl: 'http://my/api',
  callbackUrl: 'http://localhost:3000/callback'
}
```

(Note: specify the API's audience in `apiUrl`)

* Go to client's root folder and run `npm install` (or `yarn`).
* Run `npm start`

### Server

* Go to `server/`
* Copy `.env.example` to `.env` and set the variables.

Example:

```
AUTH0_DOMAIN=tham.auth0.com
API_ID=http://my/api
```

(Note: specify the API's audience in `API_ID`)

* Run `pip install -r requirements.txt`
* Run `python server.py`


### Using Python 3?

You might need to change `urllib.urlopen` to `urllib.request.urlopen` in server.py. (Hat-tip to [rajrsingh](https://github.com/rajrsingh))

## Using the app

* Load the SPA in browser by navigating to `http://localhost:3000`
* Login to the app
* Go to [Ping](http://localhost:3000/ping) page
* Use the `Ping` and `Call Private` buttons to call the API.

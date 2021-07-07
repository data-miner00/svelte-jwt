# Svelte JWT

This is a sample application that uses Svelte as front-end engine and JWT handling with Express server.

## Installation

To install, simply run

```sh
npm install
```

## Development

To start the mock application, two command windows are needed as one will serve the local development server for Svelte and the other one for the Node-Express server.

In this case, the server and client are combined just to provide a simple example and not to complicate things. No database was hooked as well for this matter and hard-coded data was used. The server is located inside the server folder.

```sh
# Svelte
npm run dev

# Node-express
npm run serve
```

## Env and JWT Secret

The .env file is shared between the server and the client for this case to simplify things.

Both Access Token Secret and Refresh Token Secret can be replace with a new one by running

```sh
npm run generate:secret
```

to get a random 64bit long string.

## Login

There are 2 hardcoded users for this demo, namely **Kyle** and **Gim** where their password is both "abc123".

## Todos

- [ ] Prettify the profile page
- [ ] Refactor code
- [ ] Enforce tighter security
- [ ] Connect to DB
- [ ] ...

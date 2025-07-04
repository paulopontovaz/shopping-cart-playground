# Shopping Cart

## How to run the app

### For showcasing the app

#### Step 1 - Dependencies

Make sure you have Docker installed on your machine.

#### Step 2 - CLI command

On your terminal, navigate to the project's root directory and run

    ./go setup_and_run_docker

This will run the shell script that executes a series of commands to run the app. Mostly, it installs the dependencies in the `server` and `client` directories and runs `docker compose up`.

##### Troubleshooting

You may have to change some permissions for the shell script to execute properly. You can do that with:

    chmod +x .

#### Step 3 - Accessing the App

You can access the app by navigating to `http://localhost:8080` on a browser of your choice. I tested it with a Chromium-based browser called Arc so it should work with similar browsers at the very least.

If you would like to query the API directly, you can do so by sending requests to `http://localhost:8080/api` as the base URL. You can try opening [`http://localhost:8080/api/products`](`http://localhost:8080/api/products`), which is the only endpoint available at the moment.

### For better local development experience

This one is for having faster Hot-Module Replacement reactions when changing the UI or installing new dependencies. It's basically a smoother development experience.

#### Step 1 - Dependencies

Make sure you have Node and Bun installed on your machine.

#### Step 2 - Running setup script

On your terminal, navigate to the project's root directory and run

    ./go setup_local

This will execute similar commands as `setup_and_run_docker` but will only run the Docker container for the Postgres database.

#### Step 3 - Run the client app

On your terminal, navigate to the [/client](/client/) directory and run

    bun dev

This should run the app on `localhost:3000`

#### Step 4 - Run the server API

On a second terminal window/tab, navigate to the [/server](/server/) directory and run

    bun dev

This should serve the API on `localhost:9000/api`

#### Cypress tests

The Cypress tests are currently set up to run with this "local development" setup. They access `localhost:3000` to run E2E tests.

## Next Steps

Here are my first thoughts on how the app could improve further:

- Remodel the database to allow each product to: have multiple special offers, have a ShoppingCart entity to store pending purchases, have an Order entity for completed purchases;
- Add product images;
- Make the UI more similar to other e-commerce apps by, for example, having a product page, a search bar, having more products in the database.
- Move the shopping cart to its own page or widget
- Refactor [BackOffice.tsx](/client/src/components/back-office/BackOffice.tsx) to remove the confirm-delete and product edit dialogs from there. Move the logic closer to [ProductTable.tsx](/client/src/components/back-office/ProductTable.tsx) and possibly into custom hooks.
- Find a more efficient way of sharing types from server to client.
- Config application to run in a prod environment. Currently, the Dockerfiles are set up only for development.
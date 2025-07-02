# haiilo-challenge

## Running the App

### Step 1 - Dependencies

Make sure you have Docker installed on your machine.

### Step 2 - CLI command

On your terminal, navigate to the project's root directory and run

    ./go setup_and_run_docker

This will run the shell script that executes a series of commands to run the app. Mostly, it installs the dependencies in the `server` and `client` directories and runs `docker compose up`.

#### Troubleshooting

You may have to change some permissions for the shell script to execute properly. You can do that with:

    chmod +x .

### Step 3 - Accessing the App

You can access the app by navigating to `http://localhost:8080` on a browser of your choice. I tested it with a Chromium-based browser called Arc so it should work with similar browsers at the very least.

If you would like to query the API directly, you can do so by sending requests to `http://localhost:8080/api` as the base URL. You can try opening [`http://localhost:8080/api/products`](`http://localhost:8080/api/products`), which is the only endpoint available at the moment.
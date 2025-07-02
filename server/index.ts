import { server } from "./src/api";

console.log(`Server started listening on ${process.env.API_PORT}`);

async function main() {
  Bun.serve({
    fetch: server.fetch,
    port: process.env.API_PORT,
  });
}

main();

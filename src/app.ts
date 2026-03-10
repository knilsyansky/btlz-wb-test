import knex, { migrate, seed } from "#postgres/knex.js";

// дефолтный везов миграций и сидеров
await migrate.latest();
await seed.run();

console.log("All migrations and seeds have been run");
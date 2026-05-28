import "dotenv/config";
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env.DATABASE_URL,
  },
});

// import "dotenv/config";
// import { defineConfig } from "prisma/config";

// console.log("DATABASE =", process.env.DATABASE_URL);

// export default defineConfig({
//   schema: "prisma/schema.prisma",

//   migrations: {
//     path: "prisma/migrations",
//   },

//   datasource: {
//     url: process.env["DATABASE_URL"],
//   },
// });

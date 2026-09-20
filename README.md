<h1 align="center">
    <img src="/.github/assets/logo.svg"
    width="200px"
    alt="Logo" />
</h1>

<h3 align="center">
  Node.js - Ignite 2023 Project 5
</h3>

<p align="center">
  :speech_balloon: Forum application in Clean Architecture, DDD and SOLID style using TypeScript, NestJS, Prisma, Zod, Day.js, bcrypt.js, Passport JWT, Cloudflare R2 and Docker. Databases with PostgreSQL and cache with Redis. Unit tests and e2e with Vitest, Faker and SuperTest.
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/osvaldokalvaitir/nodejs-ignite2023-project5.svg?color=00A83A">

  <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/osvaldokalvaitir/nodejs-ignite2023-project5.svg?color=00A83A">

  <a href="https://kalvaitir.com/">
    <img alt="Made by Kalvaitir" src="https://img.shields.io/badge/made%20by-Kalvaitir-00A83A">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-00A83A">
</p>

<p align="center">
  <a href="#wrench-install-and-run">Install and run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#memo-license">License</a>
</p>

## :wrench: Install and run

Open terminal:

```sh
# Clone this repo
git clone https://github.com/osvaldokalvaitir/nodejs-ignite2023-project5

# Entry in folder
cd nodejs-ignite2023-project5

# Install deps with pnpm
pnpm install

# Create the environment file and fill in the variables
cp .env.example .env

# Start the containers (PostgreSQL and Redis) with Docker
docker compose up -d

# Run the database migrations with Prisma
pnpm prisma migrate deploy

# Launch the app with pnpm
pnpm run start
```

Click to learn more about the tools used:  [Docker](https://github.com/osvaldokalvaitir/awesome/blob/main/src/containers/docker.md), [Docker Image postgres](https://github.com/osvaldokalvaitir/awesome/blob/main/src/containers/docker/images/postgres.md), [Docker Image redis](https://github.com/osvaldokalvaitir/awesome/blob/main/src/containers/docker/images/redis.md), [Cloudflare](https://github.com/osvaldokalvaitir/awesome/blob/main/src/cdns/cloudflare.md).

## :memo: License

This project is under the MIT license. See [LICENSE](/LICENSE) for more information.

---

<p align="center">
Developed with 💚 by <a href="https://www.linkedin.com/in/osvaldokalvaitir">Osvaldo Kalvaitir Filho</a>
</p>

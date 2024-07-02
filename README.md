# Food Delivery Application

This is a full-stack food delivery application built using Next.js, Prisma, and other modern web technologies.

## Features

- User authentication with NextAuth.js
- Integration with Google for social login
- Payment processing with Stripe
- PostgreSQL database managed by Prisma
- Secure environment variable management
- API routes for various functionalities

## Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- Stripe account and API keys
- Google Developer account for OAuth credentials

## Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```dotenv
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://user:password@localhost:port/database?schema=public"
NEXTAUTH_SECRET="a secret key for your application"
GOOGLE_ID=your_google_id
GOOGLE_SECRET=your_google_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=stripe_public_key
STRIPE_SECRET_KEY=stripe_secret_key
URL_ENDPOINT="https://localhost:3000/"

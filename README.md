# Twitter Clone T3 Stack

Twitter Clone T3 Stack is a web application built using Next.js, Tailwind CSS, NextAuth, Prisma, Crate T3 App, and Day.js. It provides the functionality to create tweets, like tweets, and use infinite scroll to navigate through tweets.

## Features:

- Login with Discord
- Create a Tweet
- Like a Tweet
- Infinite scroll
- User Profile Pages

---

## What I Learnt:

During the development of this application, I learned several new skills and technologies, including:

- Discord OAuth: I learned how to integrate Discord OAuth for authentication.

- tRPC: I used tRPC to build an API for the application.

- Cursor-based pagination: I implemented cursor-based pagination for the infinite scroll feature.

- Invalidating queries: I learned how to invalidate queries when new data is added or updated.

- Manually updating the cache: I learned how to manually update the cache after an API request.

- Formatting dates with Day.js: I used Day.js to format dates in a user-friendly way.

- useMutation, useQuery & useInfiniteQuery: I learned how to use the Tanstack React Query library's useMutation, useQuery, and useInfiniteQuery hooks to handle data fetching and updates.

---

## Installation:

To clone and install the application, follow these steps:

1. Clone the repository:

   `git clone https://github.com/HartJN/twitter-clone-t3.git`.

2. Navigate to the project directory:

   `cd twitter-clone-t3`.

3. Install dependencies:

   `yarn`.

## Database Setup:

### To set up the database, follow these steps:

1. Run Prisma migrations:

   `yarn prisma db push`.

2. Seed the database:

   `yarn prisma db seed`.

### Running Prisma Studio:

To access Prisma Studio, run the following command:

    `npx prisma studio`.

---

## Usage:

To start the application, run the following command: `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

---

### Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

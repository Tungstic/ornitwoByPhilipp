**This is a fork of [Philipp's](https://github.com/lovephimu) repo. My goal is to practise writing unit and E2E tests for other people's code.**

# Birdwatching Web App

OrniTwo is a full stack birdwatching web app deployed on Vercel. It allows **quick tracking of bird sightings** for ornithologists, whether full-time or hobbyists.

**Technologies Used:**

- Next.js
- PostgreSQL
- GraphQL
- Google Places
- Leaflet
- Chart.js
- Tailwind

## Authentication & Authorization

Users can explore information about birds and other Ornitwo users. They can also report bird sightings after registering or logging in securely (using **session tokens**). The reporting feature includes a **Google Places** location check and ensures up-to-date reports within three days by utilizing the functionality of **time-objects**.

## API for Database Queries

Using **GraphQL** information is both written into and read from the database. Additional functions shape the data so i can be ordered and visualized.

## Data Visualization

The app analyzes user sightings, presenting bird rankings, active user charts, and random bird displays to encourage bird diversity exploration. Bird profiles include accurate drawings, chronologically ordered lists, average appearances through **Chart.js** visualizations, and maps (**Leaflet + OpenStreetMap**) with bird pin locations based on the coordinates of reported sightings.

## Editing

User profiles enable owners to manage their sightings, including deletion.

## Responsiveness

Ornitwo prioritizes **mobile use**, offering a responsive layout for larger screens.

Join us in the world of birdwatching with Ornitwo!

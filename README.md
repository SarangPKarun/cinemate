# Cinemate

Cinemate is a movie discovery web application built with React and Tailwind CSS. It allows users to browse currently playing, popular, top-rated, and upcoming movies, as well as search for specific titles.

## Features

- **Movie Lists**: Browse movies by category (Now Playing, Popular, Top Rated, Upcoming).
- **Movie Details**: View detailed information about each movie.
- **Search**: Search for movies by title.
- **Dark Mode**: Built-in dark mode support for better viewing experience.
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices.

## Tech Stack

- **React**: UI library.
- **React Router 6**: For client-side routing.
- **Tailwind CSS**: For utility-first styling.
- **Flowbite**: For UI components.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API key from [The Movie Database (TMDB)](https://www.themoviedb.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cinemate
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Reference

This project uses the [TMDB API](https://developer.themoviedb.org/docs).

> [!NOTE]
> The current implementation uses a hardcoded API key in `src/hooks/useFetch.js` for demonstration purposes. In a production environment, you should use environment variables (e.g., `process.env.REACT_APP_API_KEY`) to secure your API keys.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Ejects the configuration (one-way operation).

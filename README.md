
  <div align="center">
  <h1 align="center">Cyberspeed Movie App</h1>
  <h3>Codebase for the Cyberspeed Movie App platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat-square" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Redux-004E89?logo=Redux&style=flat-square" alt='Redux\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-TypeScript-004E89?logo=TypeScript&style=flat-square" alt='TypeScript\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Bootstrap-004E89?logo=Bootstrap&style=flat-square" alt='Bootstrap\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Axios-004E89?logo=Axios&style=flat-square" alt='Axios\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React%20Router%20Dom-004E89?logo=React%20Router%20Dom&style=flat-square" alt='React Router Dom"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [🌟 Features](#-features)
- [📁 Repository Structure](#-repository-structure)
- [💻 Code Summary](#-code-summary)
- [🚀 Getting Started](#-getting-started)

This ReactJS and TypeScript application allows users to search and explore movies using the Open API Movie Database. It features a home screen displaying random movies, a search functionality, and detailed movie information pages.

---

## 🌟 Features

 Sure, here is a list of features for the project:<br>
* TypeScript React project
* Redux store with reducers, selectors, and a store file
* Components for movie listings, including MovieCard, MovieList, and Search
* Pages for Home and Movie
* Global CSS file

---

## 📁 Repository Structure

```sh
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Loader
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── MovieCard
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── MovieList
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   └── Search
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── declarations.d.ts
│   ├── global.d.ts
│   ├── index.css
│   ├── index.tsx
│   ├── models
│   │   ├── movie-detail-item.ts
│   │   └── movie-item.ts
│   ├── pages
│   │   ├── Home
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   └── Movie
│   │       ├── index.module.css
│   │       └── index.tsx
│   └── redux
│       ├── reducers
│       │   └── movie-list.ts
│       ├── selectors
│       │   └── movie-list.ts
│       └── store.ts
├── tsconfig.json
└── yarn.lock

```

---

## 💻 Code Summary

<details><summary>src</summary>

| File | Summary |
| ---- | ------- |
| App.tsx |  The code defines a React component named `App` that renders a `Provider` component from `react-redux`, which provides the Redux store to its children. It also defines two routes using `react-router-dom`, one for the home page and another for a movie details page, each with a corresponding component. |
| declarations.d.ts |  The code declares a module for SVG files, exports a React component and a default export of the SVG source. |
| global.d.ts |  The code declares a module for CSS classes and exports a default object containing the class names. |
| index.tsx |  The code creates a React application using the `ReactDOM.createRoot` method and renders the `App` component within a `Router` component, which is imported from the `react-router-dom` library. |

</details>

---

<details><summary>Loader</summary>

| File | Summary |
| ---- | ------- |
| index.tsx |  The code defines a React component called Loader that generates a grid of squares using the generateSquares function, which returns an array of square elements with a specific number of items. |

</details>

---

<details><summary>MovieCard</summary>

| File | Summary |
| ---- | ------- |
| index.tsx |  The code defines a React component called MovieCard, which displays a movie poster and title, and when clicked, navigates to the movie detail page. |

</details>

---

<details><summary>MovieList</summary>

| File | Summary |
| ---- | ------- |
| index.tsx |  The code defines a React component called `MovieList` that fetches a list of movies from an API, filters the list based on a search query, and renders a list of movie cards. |

</details>

---

<details><summary>Search</summary>

| File | Summary |
| ---- | ------- |
| index.tsx |  The code defines a React component called `SearchInput` that renders a search input form with a text field, a search button, and a reset button. The component uses the `useNavigate` hook from `react-router-dom` to update the URL query parameters when the user types in the search field or clicks the search button. The component also uses the `useSearchParams` hook to retrieve the current search query from the URL and updates the search field value accordingly. |

</details>

---

<details><summary>models</summary>

| File | Summary |
| ---- | ------- |
| movie-detail-item.ts |  The code defines an interface for a movie detail item, which includes information about the movie, its reviews, ratings, and actors. |
| movie-item.ts |  The code defines an interface for a movie object with properties such as title, year, and actors, as well as image dimensions. |

</details>

---

<details><summary>Home</summary>

| File | Summary |
| ---- | ------- |
| index.tsx |  The code defines a React component called `HomePage` that renders a search input and a movie list, using the `MovieList` and `SearchInput` components. |

</details>

---

<details><summary>Movie</summary>

| File | Summary |
| ---- | ------- |
| index.tsx |  The code defines a React component called `MovieDetailsPage` that displays information about a movie, including its title, description, actors, rating, and keywords. It uses the `useParams` hook from `react-router-dom` to get the movie ID from the URL, and the `useEffect` hook to fetch the movie data from an API when the component mounts. The component also uses the `useAppDispatch` and `useAppSelector` hooks from Redux to manage state and dispatch actions. |

</details>

---

<details><summary>reducers</summary>

| File | Summary |
| ---- | ------- |
| movie-list.ts |  The code defines a Redux slice for managing movie data, including a list of movies and a detail view for a specific movie. It uses the `@reduxjs/toolkit` library to create asynchronous thunks for fetching movie data from an API, and includes reducers for handling search text and updating the movie list and detail view. |

</details>

---

<details><summary>selectors</summary>

| File | Summary |
| ---- | ------- |
| movie-list.ts |  The code defines four functions for selecting different parts of the movie state in a Redux store, including the movie list, fetching state, movie detail, and search text. |

</details>

---

<details><summary>redux</summary>

| File | Summary |
| ---- | ------- |
| store.ts |  The code defines a Redux store and exports its state, dispatch function, and selector hooks for use in a React application. |

</details>

---

## 🚀 Getting Started

 To get started with this TypeScript React project, follow these steps:<br>
1. Install the dependencies by running `yarn install` or `npm install` in your terminal.
2. Start the development server by running `yarn start` or `npm start`. This will launch a development server at <http://localhost:3000/>.
3. Open the project in your preferred code editor and start exploring the files. The `src` directory contains the main source code for the application, including components, pages, and models.
4. Read the comments in the `README.md` file to understand the project structure and how it works.
5. Start building your own components, pages, and models to add new features to the application.
6. Use the `tsconfig.json` configuration file to configure the TypeScript settings for your project.
7. Test your changes by running `yarn test` or `npm test` in your terminal.
8. Once you're satisfied with your changes, build the production version of the application by running `yarn build` or `npm build`. This will create a `build` directory containing the compiled JavaScript files.

That's it! You now have a basic understanding of how to work with this TypeScript React project. Happy coding!

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).

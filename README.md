
# Frontend React JS Job Portal Project

A modern frontend-only job portal application built using ReactJS, Tailwind CSS, and Clerk Auth UI, featuring job search, filtering, recruiter and user authentication UI, job detail view, pagination, and responsive design. This project focuses only on the frontend, with mock data and no backend integration.

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed
- (Optional) Clerk account for actual authentication (not required for mock UI)

### Setup Steps

1. Create a new React app with JavaScript template:

```bash
npm create vite@latest
```
# Choose React and JavaScript options


2. Install dependencies:

```bash
npm install
npm install react-router-dom tailwindcss moment @clerk/clerk-react
```

3. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

4. Set up Tailwind configuration in `tailwind.config.js` and `index.css`:

```js
// tailwind.config.js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Configure routing and components:

* Set up `React Router` with routes like Home, Job Details, Recruiter Login
* Create folders: `components/`, `pages/`, `context/`, `assets/`

6. Run the app locally:

```bash
npm run dev
```

## Usage

* Browse all available jobs on the homepage
* Use search filters to find jobs by title, category, or location
* Click on a job to view its details
* Use recruiter login/signup UI (mock only, no backend)
* View applied jobs UI and resume upload form (mocked)
* Enjoy responsive design and pagination across job listings

## Deploy

* Build the project for production:

```bash
npm run build
```

* Upload the `dist` folder contents to your hosting provider (e.g., Netlify, Vercel)
* Add `_redirects` file (for Netlify) or `.htaccess` (for Hostinger) with proper rewrite rules for React routing
* Connect your domain and ensure SSL is enabled

## Technologies

* **ReactJS** - Frontend UI library
* **Tailwind CSS** - Utility-first CSS framework
* **Clerk Auth UI** - Authentication components (UI-only in this project)
* **React Router DOM** - Client-side routing
* **Moment.js** - Date formatting
* **K-Converter** - Formatting large numbers (e.g., salaries, applicants)

## Contributing

* Fork the repository
* Clone your fork locally
* Create a feature branch
* Make changes and commit
* Push to your fork and create a pull request

## Documentation

More detailed documentation can be found at the React docs, Tailwind CSS docs, and Clerk.dev documentation.

## Acknowledgments

* Clerk.dev for authentication UI
* Tailwind Labs for Tailwind CSS
* React community for open-source resources

## License

Refer to the [Choose a License](https://choosealicense.com/) page for license agreements.

```

Let me know if you want the `.htaccess` or `_redirects` file content for deployment platforms too!
```

# Professional Business Website

This is a modern, responsive business website built with React, Vite, and Tailwind CSS.
It is designed to be easily deployed for free on platforms like Netlify or Vercel.

## 🚀 Quick Start (Local)

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📝 Personalization (How to Edit)

Before deploying, you must update the "About" page with your personal details as per the assignment requirements.

1.  Open `src/pages/About.jsx`.
2.  Locate `[YOUR NAME HERE]`, `[12345678]`, etc.
3.  Replace them with your actual Name, Student ID, and Class.
4.  (Optional) Replace the image URL with your own photo.

## 🌐 How to Deploy for FREE (Netlify)

You can deploy this site in less than 2 minutes without using the command line.

1.  **Run Build**:
    Run `npm run build` in your terminal. This will create a `dist` folder in your project directory.
    *(If you don't have Node.js installed, ask the assistant to help or install it from nodejs.org)*

2.  **Sign Up / Login to Netlify**:
    Go to [app.netlify.com](https://app.netlify.com) and sign up (it's free).

3.  **Drag and Drop**:
    - Once logged in, go to the "Sites" tab.
    - You will see a box that says "Drag and drop your site output folder here".
    - Drag the **`dist`** folder (created in step 1) into that box.

4.  **Done!**:
    Netlify will upload your site and give you a live URL (e.g., `random-name-12345.netlify.app`). You can change this name in "Site Settings".

## 📦 Project Structure

-   `src/pages`: Contains the 4 main pages (Home, Services, About, Contact).
-   `src/components`: Reusable components like Navbar, Footer, Hero.
-   `src/index.css`: Tailwind configuration and global styles.

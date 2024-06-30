# Authentication System

## Overview

This project implements a simple username/password authentication system using Redux for state management and Next.js for both front-end and back-end. It includes API endpoints with bearer token authentication and a custom useAuthSession hook to manage user sessions on the client side.

## Features

1. User Authentication: Secure login with username and password.
2. Bearer Token Authentication: API requests secured with bearer tokens.
3. State Management: Redux for managing authentication state.
4. Custom Hook: useAuthSession hook to manage user sessions.
5. UI Feedback: Toast notifications for errors and successful logins.
6. Responsive UI: Plain CSS for styling.

## Setup and Installation

1. Clone the Repository

2. Install Dependencies

```
npm install
```

3. Create a .env File

In the root directory, create a .env file with the following content:

```
JWT_SECRET=your_secret_key
```

Replace your_secret_key with a secure secret key.

4. Run the Development Server

```
npm run dev
```

5. Navigate to the Application:

Open your browser and go to http://localhost:3000.

## How to Use

1. **Login:**

- Enter user as the username.
- Enter password as the password.
- Click the Login button.
- You should see a success message and the welcome message with the username.

2. **Invalid Login:**

- Enter incorrect credentials.
- Click the Login button.
- You should see an error message indicating invalid credentials.

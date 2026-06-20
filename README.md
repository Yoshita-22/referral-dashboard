# Referral Dashboard

A responsive referral management dashboard built with React, React Router, Tailwind CSS, and JWT authentication.

## Features

### Authentication
- Secure login using JWT authentication
- Protected routes
- Automatic redirection for authenticated users
- Logout functionality

### Dashboard
- Overview metrics section
- Service summary section
- Referral sharing section
- Responsive dashboard layout

### Referrals
- Search referrals by name or service
- Sort referrals by date
- Client-side pagination (10 entries per page)
- Referral details page
- Dynamic routing using referral ID

### Referral Sharing
- Copy referral link
- Copy referral code

### Error Handling
- 404 Not Found page
- Invalid referral handling
- API error handling

### Responsive Design
- Mobile responsive
- Tablet responsive
- Desktop responsive

---

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- js-cookie
- Fetch API

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Yoshita-22/referral-dashboard.git
```

### Navigate to the Project

```bash
cd referral-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## API Base URL

```text
https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com
```

---

## Available Routes

| Route | Description |
|---------|-------------|
| `/login` | Login page |
| `/` | Dashboard |
| `/referral/:id` | Referral details page |
| `*` | Not Found page |

---

## Project Structure

```text
src
│
├── assets
│
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Overview.jsx
│   ├── ProtectedRoute.jsx
│   ├── ReferralsTable.jsx
│   ├── Services.jsx
│   └── ShareReferral.jsx
│
├── pages
│   ├── Dashboard.jsx
│   ├── Layout.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── ReferralDetails.jsx
│
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

---

## Authentication Flow

1. User logs in with email and password.
2. JWT token is received from the API.
3. Token is stored in cookies.
4. Protected routes become accessible.
5. Unauthenticated users are redirected to the login page.

---

## Dashboard Functionality

### Overview
Displays key referral metrics such as:
- Total Balance
- Discount Percentage
- Total Referrals
- Discount Amount
- Commission Amount
- Total Earnings
- Commission Discount
- Total Bank Transfer

### Service Summary
Displays:
- Service
- Your Referrals
- Active Referrals
- Total Referral Earnings

### Share Referral
Displays:
- Referral Link
- Referral Code
- Copy actions

### Referrals Table
Supports:
- Search
- Sort
- Pagination
- Referral detail navigation

---

## Pagination

- 10 entries per page
- Previous and Next navigation
- Numbered page buttons
- Client-side pagination

---

## Referral Details

Displays:
- Referral ID
- Name
- Service Name
- Date
- Profit

---


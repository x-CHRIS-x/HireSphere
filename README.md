# HireSphere

A web-based job portal and recruitment decision support system. HR users can post job listings, applicants can submit applications, and the system evaluates and ranks candidates using a Weighted Scoring Algorithm with AI-assisted preliminary evaluation.

## Tech Stack

| Technology | Role |
|---|---|
| JavaScript | Client-side logic |
| React 18 | Front-end framework |
| Vite | Build tool and dev server |
| Material Tailwind CSS | UI styling |
| React Router DOM | Client-side routing |
| Supabase | Backend-as-a-Service (PostgreSQL, auth, real-time, APIs) |

## Prerequisites

- Node.js v18 or higher
- npm or yarn
- A Supabase project (for database and authentication)

## Installation

1. Clone the repo
   ```
   git clone https://github.com/x-CHRIS-x/HireSphere.git
   ```

2. Go into the project folder
   ```
   cd HireSphere
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Set up environment variables
   ```
   Copy .env.example to .env and fill in your Supabase project URL and anon key.
   ```

5. Run the dev server
   ```
   npm run dev
   ```

## Project Structure

```
HireSphere/
├── src/                  — source code (components, pages, utils)
├── public/               — static assets
├── .env.example          — template for env variables
├── .gitignore            — files excluded from version control
├── README.md             — this file
└── package.json          — dependencies and scripts
```

## Group Members

- John Chris Ledama
- Charles Selwyn Lim
- Marc Jorem Luchavez
- Gian Crispo
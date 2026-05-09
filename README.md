# HireSphere

HireSphere is a web-based job portal and recruitment decision support system. It helps organizations streamline their hiring process and uses a weighted scoring algorithm to evaluate and rank applicants based on multiple criteria.

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Supabase (Backend/Database)

## Prerequisites
- Node.js v18+
- npm

## Installation

1. Clone the repo
   git clone https://github.com/x-CHRIS-x/HireSphere.git

2. Go into the project folder
   cd HireSphere

3. Install dependencies
   npm install

4. Set up environment variables
   Copy .env.example to .env and fill in your Supabase credentials.

5. Run the dev server
   npm run dev

## Project Structure
- `src/components/` — Shared UI components (Navbar, Footer)
- `src/context/` — Global state management (Auth)
- `src/data/` — Static/placeholder data for the prototype
- `src/pages/` — Main page components separated by role (admin, applicant, encoder)
- `src/utils/` — Helper functions including the weighted scoring logic

## Group Members
- Ledama, John Chris
- Lim, Charles Selwyn
- Luchavez, Marc Jorem
- Crispo, Gian

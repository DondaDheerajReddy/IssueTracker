# 🐛 Issue Tracker

### A full-stack **Issue Tracker** web application built with **Next.js** for efficient bug tracking and task management. This project allows teams to create, assign, and track issues collaboratively with a clean and responsive UI.

## 🚀 Features

- Create, edit, and delete issues
- Assign issues to users
- Track issue status (`OPEN`, `IN_PROGRESS`, `CLOSED`)
- Sort/filter issues by status
- User authentication
- Responsive design for desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: Next.js API Routes
- **Database**: [MySQL](https://mysql.com)
- **ORM/ODM**: [Prisma](https://www.prisma.io/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/issue-tracker.git
cd issue-tracker
npm install
```

### ✅ Step 2: Set up Environment Variables

Create a `.env` file in the root directory of your project and add the necessary environment variables:

```env
DATABASE_URL=your_mysql_database_url
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_id
GOOGLE_CLIENT_SECRET=your_google_oauth_secret
```

> Replace these with your actual values.

If you're using **Prisma**, generate the client:

```bash
npx prisma generate
```

---

### ✅ Step 3: (Optional) Run Database Migrations

If you're using Prisma for database management, run:

```bash
npx prisma migrate dev --name init
```

This sets up the database schema based on your Prisma schema file.

---

### ✅ Step 4: Start the Development Server

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:3000
```

Your Issue Tracker app should now be running.

## 📁 Project Structure

```
issue-tracker/
│
├── .next/                    # Next.js build output (auto-generated)
├── app/                      # App router pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── issues/               # Issues CRUD pages
│       ├── page.tsx          # Issues list
│       ├── new/              # Create issue page
│       │   └── page.tsx
│       └── [id]/             # Single issue (view/edit/delete)
│           └── page.tsx
│
├── node_modules/             # Node packages
├── prisma/                   # Prisma schema and migrations
│   ├── schema.prisma         # Prisma schema definition
│   └── client.ts             # Prisma Client file
│
├── public/                   # Public assets
│
├── .env                      # Env variables
├── .env.example              # Example env file
├── .gitignore
├── eslint.config.mjs
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json


```

---

### 🧪 Useful Commands

| Command               | Purpose                              |
|----------------------|--------------------------------------|
| `npm run dev`         | Start development server              |
| `npm run build`       | Build the app for production          |
| `npm run start`       | Start the production server           |
| `npm run lint`        | Lint your code                        |
| `npx prisma studio`   | Open a visual interface for your DB   |

---


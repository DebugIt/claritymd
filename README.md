# ClarityMD

> Your health history. In one place.

ClarityMD is a personal medical record vault designed to help people keep their health history organized, accessible, and under their control.

The concept focuses on bringing medical reports, prescriptions, lab results, doctor notes, discharge summaries, and other health records into one organized place.

The product also includes a conceptual AI layer that can help users search and understand their own health history without positioning the product as a diagnostic tool.

---

## Features

### Landing Page

- Original medical AI product concept and visual identity
- Responsive marketing page
- Product overview and feature sections
- Join Waitlist form
- English / Arabic language toggle
- Fully mirrored RTL layout in Arabic

### Waitlist

- Name and email form
- Client-side validation
- Backend API validation using Zod
- PostgreSQL persistence through Prisma
- Duplicate email handling
- Success and error states

### Authentication

- Clerk pre-built Sign Up and Sign In components
- Protected dashboard
- Unauthenticated users are redirected to `/sign-up`

### User Database Sync

When an authenticated user accesses the dashboard, the backend:

1. Gets the authenticated Clerk user
2. Retrieves the primary email
3. Upserts the user into PostgreSQL using the Clerk user ID
4. Returns the user's data from PostgreSQL

The dashboard displays the email and member-since date from the application's own PostgreSQL database rather than directly from the Clerk client-side session.

### Dashboard

- Personal account information
- Medical vault preview
- Health timeline concept
- AI health-history concept
- Privacy-focused product messaging
- English / Arabic support
- RTL layout
- Email addresses remain LTR in Arabic mode

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Clerk
- PostgreSQL
- Neon
- Prisma
- Zod
- Lucide React
- Vercel

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   ├── health/
│   │   ├── me/
│   │   └── waitlist/
│   ├── dashboard/
│   ├── sign-in/
│   ├── sign-up/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── dashboard/
│   ├── landing/
│   ├── providers/
│   └── ui/
│
├── generated/
│   └── prisma/
│
└── lib/
    └── prisma.ts

prisma/
└── schema.prisma
```

---

## Getting Started

### Requirements

- Node.js 22+
- npm
- PostgreSQL database
- Clerk account

### 1. Clone the repository

```bash
git clone https://github.com/DebugIt/claritymd.git
cd claritymd
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL="your_postgresql_connection_string"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

The application uses a PostgreSQL database hosted on Neon.

Do not commit `.env.local` or any real credentials to the repository.

### 4. Configure Clerk

Create a Clerk project and add the required keys to `.env.local`.

For this assignment, I used my own Clerk test/development project.

The application uses Clerk's pre-built authentication components for
sign-up and sign-in.

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Database

The application uses PostgreSQL with Prisma.

### Current Models

#### User

Stores the application-level user record associated with Clerk.

```text
id
clerkUserId
email
createdAt
```

#### WaitList

Stores landing-page waitlist submissions.

```text
id
name
email
createdAt
```

---

## Authentication & User Synchronization

Clerk handles authentication while PostgreSQL stores the application's own user record.

Instead of using a Clerk webhook for this assignment, the application synchronizes users on their first authenticated dashboard request.

The flow is:

```text
User signs up
      ↓
Clerk creates authenticated user
      ↓
User accesses dashboard
      ↓
Server authenticates request with Clerk
      ↓
Primary email retrieved
      ↓
Prisma upsert
      ↓
PostgreSQL User record created/updated
      ↓
Dashboard receives database record
```

This approach keeps the implementation simple and avoids introducing webhook infrastructure for a time-boxed assignment.

---

## Waitlist Flow

The waitlist follows an application-owned backend flow:

```text
Landing Page
      ↓
POST /api/waitlist
      ↓
Zod validation
      ↓
Duplicate email check
      ↓
Prisma
      ↓
PostgreSQL
```

The form never writes directly to the database from the client.

---

## Internationalization & RTL

ClarityMD supports:

- English
- Arabic

The language toggle is available throughout the application.

Arabic mode changes:

- Page direction to RTL
- Text alignment
- Layout positioning
- Component flow
- Icons that have directional meaning
- Date formatting

Email addresses remain explicitly LTR to ensure they remain readable in Arabic mode.

The application uses logical layout utilities where appropriate instead of relying on hardcoded left/right positioning.

---

## Product Scope

ClarityMD is intentionally scoped as a product concept rather than a complete healthcare platform.

### Implemented

- Landing page
- Waitlist submission
- PostgreSQL persistence
- Clerk authentication
- Protected dashboard
- Clerk → PostgreSQL user synchronization
- English / Arabic UI
- RTL support
- Responsive design

### Conceptual / Future Product Features

- Medical document uploads
- Health timeline generated from stored records
- Secure record sharing
- AI-powered search across personal health history
- Doctor visit summaries
- Document organization and categorization
- Advanced access controls
- Encrypted document storage

The AI functionality shown in the product UI is intentionally conceptual. No diagnostic or medical decision-making functionality is implemented.

---

## Design Decisions

The visual direction intentionally avoids the typical hospital/clinical aesthetic.

The interface uses:

- Calm neutral backgrounds
- Teal as the primary brand color
- Generous whitespace
- Rounded cards
- Subtle borders and shadows
- Minimal iconography
- Clear information hierarchy

The goal is to make managing medical records feel more like managing a personal digital vault than navigating a traditional healthcare portal.

---

## What I Would Do With More Time

The current implementation prioritizes the requirements of the take-home assignment and keeps the scope intentionally focused.

With more time, I would:

### 1. Build the Actual Medical Vault

- Upload and organize medical documents
- Categorize reports, prescriptions, lab results, and doctor notes
- Add search and filtering

### 2. Build the Health Timeline

- Automatically organize records chronologically
- Surface important events from the user's medical history

### 3. Add the AI Health-History Layer

- Allow users to ask questions about their own records
- Generate concise doctor-visit summaries
- Retrieve relevant records using semantic search / RAG
- Keep the AI focused on information retrieval and summarization rather than diagnosis

### 4. Improve Sharing

- Create temporary, permission-controlled links for sharing selected records
- Allow users to control exactly which records are shared

### 5. Improve the Data Model

- Add medical record/document entities
- Add record categories and metadata
- Add sharing/access-control relationships

### 6. Production Hardening

- Add stronger validation and rate limiting
- Improve error monitoring
- Add automated tests
- Add proper production deployment configuration

For the take-home, I deliberately avoided implementing these features because they would add significant complexity without improving the core requirements being evaluated.

---


## What I Would Do With More Time

With more time, I would expand ClarityMD into a functional medical record vault by adding document uploads, record organization, a chronological health timeline, secure record sharing, and an AI-powered search layer for retrieving information from a user's own medical history.

I would also plan to improve ui further, explore and test with different color themes and component layouts.

I would also add automated tests, stronger validation and rate limiting, improved error monitoring, and production-focused infrastructure.

For this take-home, I intentionally kept these features out of scope to focus on the core requirements: the landing page, waitlist, authentication, PostgreSQL integration, user synchronization, and English/Arabic RTL support.

---

## Disclaimer

ClarityMD is a product concept for organizing personal health records.

It is not a substitute for professional medical advice, diagnosis, or treatment.
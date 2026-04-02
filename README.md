# StudyEdge Portal with Clerk Login

This is the StudyEdge portal with Clerk authentication added.

## Local setup

1. Install packages:
   npm install

2. Copy `.env.example` to `.env.local`

3. Add your Clerk keys

4. Run:
   npm run dev

## Vercel setup

Add these environment variables in Vercel:
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY

Then redeploy.

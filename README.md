This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Security Hardening (RBAC, IDOR, Validation)

RBAC, IDOR protections, and input/file validation have been added:

- RBAC on API
  - Users list: Admin only (`GET /api/users`).
  - Users detail/update: self or Admin; delete: Admin only.
  - Products create/update/delete: Admin only. Public read.
  - Gallery create/update/delete: Admin only. Public read.
  - Transactions detail/update/delete: Admin; owner (Masyarakat); Agen with same RT; Pengepul after Agen update.

- IDOR fixes
  - Sensitive endpoints verify JWT cookie `accessToken` and enforce authorization server‑side.

- Input validation
  - Products: whitelist fields, positive price, image path must start with `/uploads/`.
  - Transactions: validate `TransaksiProduk` items (string `produkId`, positive integer `quantity`).
  - Users: prevent role escalation on registration and non‑admin updates, trim inputs.

- Uploads
  - `POST /api/upload` requires Admin.
  - Accepts only PNG/JPEG/GIF/WebP up to 1MB with magic‑byte checks.
  - Random filenames stored under `public/uploads`; response includes `{ data: { id, url } }`.

Set `JWT_SECRET` in env and ensure `public/uploads` is served statically.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

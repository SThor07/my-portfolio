# Shrivatsasingh Rathore Portfolio

Premium personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Stack

- Next.js 14+
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Files to customize

- Shared portfolio content: [data/portfolio.ts](/Users/shree/Portfolio/data/portfolio.ts)
- Main homepage layout: [app/page.tsx](/Users/shree/Portfolio/app/page.tsx)
- Global styling: [app/globals.css](/Users/shree/Portfolio/app/globals.css)
- Resume file: [public/files/Shrivatsasingh_Rathore_Resume.pdf](/Users/shree/Portfolio/public/files/Shrivatsasingh_Rathore_Resume.pdf)
- Profile image: [public/images/profile-circular.png](/Users/shree/Portfolio/public/images/profile-circular.png)

## Contact form

The contact form posts directly to the existing Formspree endpoint configured in [data/portfolio.ts](/Users/shree/Portfolio/data/portfolio.ts). Replace `formspreeEndpoint` there if you want to send messages to a different inbox.

## Notes

- This repo still contains older static portfolio files from the previous version. They are not used by the Next.js app.
- If you want, those legacy files can be removed after final review.

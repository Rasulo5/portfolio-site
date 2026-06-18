import "./globals.css";

export const metadata = {
  title: "Fullstack Developer — Портфолио",
  description:
    "Fullstack-разработчик (TypeScript / Next.js). Next.js, React, Express.js, PostgreSQL, Tailwind CSS. Портфолио проектов и контакты.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Express.js",
    "PostgreSQL",
    "Tailwind CSS",
    "веб-разработчик",
  ],
  openGraph: {
    title: "Fullstack Developer — Портфолио",
    description:
      "Fullstack-разработчик на Next.js / TypeScript. Портфолио проектов и контакты.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}

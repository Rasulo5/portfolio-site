// app/page.js — Server Component (рендерится на сервере, отлично индексируется)

const stack = [
  "JavaScript",

  "TypeScript",
  "React",
  "Next.js",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
  "English (B1)",
];

const projects = [
  {
    title: "Сайт-кафе",
    description:
      "Лендинг с интерактивным меню: фильтрация блюд по категориям и корзина заказов.",
    tech: ["Next.js (Client)", "Tailwind CSS", "Framer Motion"],
    status: "Готов",
    href: "https://rasulo5-cafe-site-68f0.twc1.net/",
  },
  {
    title: "Панель управления кафе / Dashboard",
    description:
      "Админка для управления заказами и меню, графики выручки и аналитика.",
    tech: ["Next.js", "shadcn/ui", "PostgreSQL"],
    status: "Готов",
    href: "https://rasulo5-cafe-site-68f0.twc1.net/admin/",
  },
  {
    title: "Chat Messenger",
    description:
      "Веб-мессенджер с обменом сообщениями в реальном времени, поддержкой личных чатов и адаптивным интерфейсом.",
    tech: ["Next.js", "WebSocket", "Tailwind CSS"],
    status: "Готов",
    href: "https://rasulo5-chat-messenger-98d8.twc1.net",
  },

];

const contacts = [
  { label: "Telegram", href: "https://t.me/Rassell2077" },
  { label: "GitHub", href: "https://github.com/Rasulo5" },
  { label: "hh.ru", href: "https://hh.ru/resume/1aa7fae8ff0cd5c3f10039ed1f44366f724e41" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-teal-400/30">
      {/* Декоративное свечение фона */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        {/* HERO */}
        <section className="text-center">
          <p className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-teal-300">
            Fullstack Developer (TypeScript / Next.js)
          </p>
          <h1 className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
            Fullstack Developer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Я — Fullstack-разработчик. Мой фокус — экосистема
            JavaScript/TypeScript и современный серверный рендеринг на Next.js.
            Умею закрывать полный цикл разработки: от проектирования баз данных в
            PostgreSQL и написания бэкенд-логики на Express.js до адаптивной
            вёрстки интерфейсов с помощью Tailwind CSS. Свободно читаю
            техническую документацию и общаюсь на английском языке (уровень B1).
            Сейчас активно расширяю портфолио сложными проектами.
          </p>
        </section>

        {/* СТЕК */}
        <section className="mt-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-zinc-100">
            Стек технологий
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="cursor-default rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:text-teal-300 hover:shadow-[0_0_18px_-4px_rgba(45,212,191,0.5)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ПРОЕКТЫ */}
        <section className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-bold text-zinc-100">
            Проекты
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/60 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.45)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-teal-300">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                    {project.status}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-zinc-800/80 px-2 py-1 text-xs text-teal-300/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* КОНТАКТЫ */}
        <section className="mt-24 text-center">
          <h2 className="mb-8 text-2xl font-bold text-zinc-100">Контакты</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-7 py-3 font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-zinc-950 hover:shadow-[0_0_24px_-6px_rgba(45,212,191,0.7)]"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </section>

        {/* ФУТЕР */}
        <footer className="mt-24 border-t border-zinc-900 pt-8 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Fullstack Developer. Built with Next.js &
          Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}

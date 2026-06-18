# Портфолио — Fullstack Developer

Сайт-визитка на **Next.js 14 (App Router)** + **Tailwind CSS**.
Главная страница (`app/page.js`) — Server Component для идеальной SEO-индексации.

## Стек
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3

## Локальный запуск
```bash
npm install
npm run dev
```
Открыть http://localhost:3000

## Продакшен-сборка
```bash
npm run build
npm start
```

## Деплой через Docker (Timeweb Cloud Apps)
В проекте есть оптимизированный многоэтапный `Dockerfile`
(использует `output: "standalone"` из `next.config.mjs`).

Локальная проверка образа:
```bash
docker build -t portfolio-site .
docker run -p 3000:3000 portfolio-site
```

На Timeweb Cloud Apps при сборке из GitHub:
- Тип приложения: Dockerfile
- Порт: 3000

## Что заполнить
- Контактные ссылки (Telegram, GitHub, Email) — в `app/page.js`, сейчас заглушки `"#"`.

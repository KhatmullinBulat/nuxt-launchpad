<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <header class="welcome-header">
        <h1 class="welcome-title">
          Добро пожаловать в Nuxt Launchpad
        </h1>
        <p class="welcome-subtitle">
          Ваша отправная точка для масштабируемых Nuxt приложений
        </p>
      </header>

      <main class="welcome-content">
        <section class="features-section">
          <h2 class="section-title">
            Основные возможности:
          </h2>
          <ul class="features-list">
            <li class="feature-item">
              <span class="icon">
                ✅
              </span>
              <span>
                <strong>
                  FSD:
                </strong>
                Поддержка принципов Feature-Sliced Design для модульности и
                масштабируемости.
              </span>
            </li>
            <li class="feature-item">
              <span class="icon">
                ✅
              </span>
              <span>
                <strong>
                  Готовый CRUD:
                </strong>
                Встроенный composable
                <code>
                  useApiFactory
                </code>
                для быстрого создания API-сервисов.
              </span>
            </li>
            <li class="feature-item">
              <span class="icon">
                ✅
              </span>
              <span>
                <strong>
                  ESLint Antfu:
                </strong>
                Жесткий стиль кода и автоматическое форматирование с помощью
                <code>
                  @antfu/eslint-config
                </code>.
              </span>
            </li>
          </ul>
        </section>

        <aside class="getting-started-box">
          <h3 class="box-title">
            Как начать?
          </h3>
          <ol class="steps-list">
            <li>
              Установите зависимости:
              <code>
                bun install
              </code>
            </li>
            <li>
              Настройте URL API в файле
              <code>
                .env
              </code>
            </li>
            <li>
              Запустите сервер разработки:
              <code>
                bun run dev
              </code>
            </li>
          </ol>
        </aside>
      </main>

      <footer class="welcome-footer">
        <p class="footer-text">
          Узнайте больше в
          <a href="https://github.com/KhatmullinBulat/nuxt-launchpad/blob/main/README.md">
            README.md
          </a>.
        </p>
        <a
          class="repo-link"
          href="https://github.com/KhatmullinBulat/nuxt-launchpad"
        >
          Перейти к репозиторию на GitHub
        </a>
      </footer>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8fafc;
}

.dark .welcome-container {
  background-color: #0f172a;
}

.welcome-card {
  width: 100%;
  max-width: 650px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: system-ui, sans-serif;
}

.dark .welcome-card {
  background: #1e293b;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.welcome-header {
  padding: 2rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.dark .welcome-header {
  border-bottom: 1px solid #334155;
}

.welcome-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0;
  color: #1e293b;
}

.dark .welcome-title {
  color: #f1f5f9;
}

.welcome-subtitle {
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: #64748b;
}

.dark .welcome-subtitle {
  color: #cbd5e1;
}

.welcome-content {
  padding: 1.5rem;
}

.features-section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0f172a;
}

.dark .section-title {
  color: #e2e8f0;
}

.features-list {
  list-style-type: none;
  padding: 0;
}

.feature-item {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.icon {
  flex-shrink: 0;
  margin-top: 0.1rem;
}

code {
  background-color: #f1f5f9;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: monospace;
}

.dark code {
  background-color: #334155;
}

.getting-started-box {
  background-color: #dbeafe;
  border: 1px solid #93c5fd;
  border-radius: 0.5rem;
  padding: 1rem;
}

.dark .getting-started-box {
  background-color: #1e3a8a;
  border-color: #3b82f6;
}

.box-title {
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1d4ed8;
}

.dark .box-title {
  color: #93c5fd;
}

.steps-list {
  margin: 0;
  padding-left: 1.25rem;
}

.steps-list li {
  margin-bottom: 0.5rem;
}

.welcome-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}

.dark .welcome-footer {
  border-top: 1px solid #334155;
}

.footer-text {
  margin: 0 0 0.5rem 0;
  color: #64748b;
}

.dark .footer-text {
  color: #94a3b8;
}

.repo-link {
  display: inline-block;
  color: #3b82f6;
  text-decoration: underline;
}

.dark .repo-link {
  color: #60a5fa;
}
</style>

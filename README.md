# Nuxt Launchpad

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![License](https://img.shields.io/github/license/KhatmullinBulat/nuxt-launchpad)

A foundational **Nuxt 4** project template designed for seamless integration with **FSD-like architecture** and efficient CRUD operations.

---

## Features

- **FSD-ready**: Structured to support Feature-Sliced Design principles for scalable applications.  
- **CRUD**: Includes `useApiFactory` composable for generating standardized CRUD Api services.  
- **Type Safety**: Leverages TypeScript for robust type checking throughout the application.  
- **Nuxt 4**: Built on the latest Nuxt framework features and best practices.  

---

## Project Structure (FSD-inspired)

- `pages/` — Nuxt routes
- `layouts/` — Nuxt layouts
- `widgets/` — page-level building blocks
- `entities/` — business entities
- `shared/` — global types, assets, composables, scripts

## Usage Example

```ts
// entities/api/tickets.ts
import type {
  TicketItem,
  TicketFilters,
  CreateTicketForm,
  TicketDetail
} from "./types/ticket.types";

import { useApiFactory } from "~/config/api/useApiFactory";

const ticketsApi = useApiFactory<
  TicketItem,
  TicketFilters,
  CreateTicketForm,
  TicketDetail
>("/api/tickets");

export default ticketsApi;
```

## Getting Started

1. Clone the repository.

2. Install dependencies:

```bash
bun install
# or npm install
# or yarn install
```
3. Configure your Api base URL (.env).

4. Start the development server:

```bash
bun run dev
# or npm run dev
# or yarn run dev
```

## Inspired By

- Feature-Sliced Design
- Nuxt official patterns

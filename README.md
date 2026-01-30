# Nuxt Launchpad

[![MIT License][license-shield]][license-url]

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

---

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

---

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

---

## Contributing

If you have a suggestion that would make this project better, please fork the repo and create a [pull request](https://github.com/KhatmullinBulat/nuxt-launchpad/compare). You can also simply open an [issue](https://github.com/KhatmullinBulat/nuxt-launchpad/issues/new).

To fix a bug or enhance an existing module, follow these steps:

1. Fork the Repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Add changes to reflect the changes made
5. Commit your changes (`git commit -m 'Improve feature'`)
6. Push to the branch (`git push origin improve-feature`)
7. Create a Pull Request

## Inspired By

- Feature-Sliced Design
- Nuxt official patterns

[license-shield]: https://img.shields.io/github/license/unktir/js-object-clock.svg?style=flat-square
[license-url]: https://github.com/KhatmullinBulat/nuxt-launchpad/blob/main/LICENSE
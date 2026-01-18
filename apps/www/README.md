<div align='center'>

<img src="public/logo-mini.png" alt="Bedstack Logo" width=200>
<h1>Bedstack Documentation Site</h1>

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/) [![Fumadocs](https://img.shields.io/badge/Fumadocs-000000?logo=markdown&logoColor=white)](https://fumadocs.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

The official documentation site for [Bedstack](https://bedstack.js.org)

[bedstack.js.org](https://bedstack.js.org)

</div>

<br/>
<br/>

## Overview

This is the documentation site for Bedstack, built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.dev/). It provides comprehensive documentation, guides, and examples for Bedstack.

## Quickstart

1. **Install dependencies**

   ```sh
   bun i
   ```

2. **Run the development server**

   ```sh
   bun dev
   ```

3. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the documentation site.

## Project Structure

| Route                     | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `app/(home)`              | The route group for the landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                   |
| `app/api/search/route.ts` | The Route Handler for search functionality.           |

## Key Files

- `src/lib/source.ts`: Content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `src/lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.
- `source.config.ts`: Configuration file for customizing options like frontmatter schema.

## Development

### Typechecking

```sh
bun run typecheck
```

This runs Fumadocs MDX type generation, Next.js typegen, and TypeScript type checking.

### Building for Production

```sh
bun run build
```

### Starting Production Server

```sh
bun start
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Fumadocs Documentation](https://fumadocs.dev) - Learn about Fumadocs and MDX
- [Bedstack Documentation](https://bedstack.js.org) - Learn about Bedstack

## Contributing

Contributions to improve the documentation are welcome! Please see the main [Bedstack contributing guide](https://github.com/yamcodes/bedstack/blob/main/CONTRIBUTING.md) for details.

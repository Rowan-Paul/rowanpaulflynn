# Agent Instructions for rowanpaulflynn

## Development Commands

### Core Commands

- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build for production
- `pnpm preview` - Build and start production server
- `pnpm start` - Start production server

### Linting & Formatting

- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format:check` - Check Prettier formatting
- `pnpm format:write` - Apply Prettier formatting

### Type Checking

- `pnpm typecheck` - Run TypeScript compiler check
- `pnpm check` - Run both lint and typecheck

### Testing

- No test framework currently configured

## Code Style Guidelines

### TypeScript

- **Strict mode enabled**: All TypeScript strict checks are active
- **No unchecked indexed access**: Array/object access must handle undefined cases
- **Inline type imports**: Use `import { type Foo } from 'bar'` for type-only imports
- **Unused parameters**: Prefix with underscore `_` to suppress warnings
- **Path aliases**: Use `@/*` for imports from `./src/*`

### Components & Exports

- Use function components: `export default function ComponentName()`
- Prefer `export const` for named exports over `export default` when appropriate
- Define props with `Readonly<>` wrapper for type safety

### Imports

- Group imports: third-party → internal → types (if separate)
- Use inline type imports for type-only imports
- Prefer absolute imports with `@/` alias over relative paths

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile`, `DataGrid`)
- **Functions**: camelCase (e.g., `fetchUserData`, `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE when exported as enum-like values
- **Variables**: camelCase
- **Interfaces/Types**: PascalCase
- **Files**: kebab-case for folders, PascalCase for component files

### Formatting

- **Prettier**: Automatically sorts Tailwind classes via plugin
- **Line length**: Let Prettier handle formatting
- **Indentation**: Standard 2 spaces (handled by tooling)
- Always run `pnpm format:write` before committing

### Error Handling

- Use try-catch for async operations
- Prefer throwing errors over silent failures
- Use TypeScript's discriminated unions for error states
- Return error objects or throw for API failures

### Styling (Tailwind CSS)

- Use utility-first approach
- Avoid custom CSS when Tailwind utilities suffice
- Responsive design: mobile-first, use `sm:`, `md:`, `lg:` prefixes
- Use `neutral-*` colors over `gray-*` for consistency
- Apply hover states with `hover:` prefix

### Environment Variables

- Use `@t3-oss/env-nextjs` for type-safe environment variables
- Never hardcode API keys or secrets
- Reference `.env.example` for available variables
- Never commit `.env` or `.env.local` files

### Analytics (PostHog Integration)

- Never hallucinate API keys - use values from `.env`
- Feature flags: minimize usage locations, gate with value validation
- Store flag names in enums (TypeScript) or const objects (JavaScript) with UPPERCASE_WITH_UNDERSCORE naming
- Custom properties: use enum/const object when referenced in 2+ locations
- Always consult developer before creating new event/property names

## Project-Specific Notes

- Next.js App Router (not Pages Router)
- React 19 with strict mode
- TypeScript 5.8+ with verbatim module syntax
- Package manager: pnpm
- No external API calls or database currently configured

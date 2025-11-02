// Global Type Declarations for assets and environment
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module 'react-dom/client' {
  // minimal types for createRoot usage in Vite React apps
  export function createRoot(container: Element | null): any;
}

declare module 'path' {
  export function resolve(...paths: any[]): string;
}

// Provide __dirname so vite.config.ts typechecks in ESM contexts
declare const __dirname: string;

interface ImportMetaEnv {
  readonly DEV?: boolean;
  readonly PROD?: boolean;
  // add other env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Minimal NodeJS namespace to satisfy DOM timer typings when needed
declare namespace NodeJS {
  type Timeout = number;
}
// Global Type Declarations for non-TS imports and env
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// react-dom client (for createRoot) - minimal declaration to satisfy TS
declare module 'react-dom/client' {
  import * as React from 'react';
  export interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
  }
  export function createRoot(container: Element | DocumentFragment): Root;
}

interface ImportMetaEnv {
  readonly DEV?: boolean;
  readonly PROD?: boolean;
  // add other env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

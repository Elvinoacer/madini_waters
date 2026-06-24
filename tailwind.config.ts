import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#003d60",
        "outline": "#807568",
        "surface-tint": "#795921",
        "on-tertiary-fixed": "#001d32",
        "on-secondary-fixed-variant": "#474646",
        "surface-container-high": "#e6e8ea",
        "on-tertiary-fixed-variant": "#004b74",
        "on-secondary-fixed": "#1c1b1b",
        "surface-container-low": "#f2f4f6",
        "on-primary-fixed": "#281800",
        "surface-container-highest": "#e0e3e5",
        "primary-fixed": "#ffddae",
        "primary": "#795921",
        "error-container": "#ffdad6",
        "surface-dim": "#d8dadc",
        "on-surface-variant": "#4e4539",
        "secondary-container": "#e5e2e1",
        "on-primary-fixed-variant": "#5e410b",
        "on-error-container": "#93000a",
        "on-secondary-container": "#656464",
        "surface-variant": "#e0e3e5",
        "background": "#f7f9fb",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#ebc07e",
        "on-primary-container": "#4f3400",
        "primary-fixed-dim": "#ebc07e",
        "primary-container": "#c59d5f",
        "outline-variant": "#d2c4b5",
        "secondary-fixed-dim": "#c9c6c5",
        "surface": "#f7f9fb",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed": "#cde5ff",
        "on-surface": "#191c1e",
        "on-primary": "#ffffff",
        "tertiary-container": "#56aaec",
        "tertiary": "#006399",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#e5e2e1",
        "secondary": "#5f5e5e",
        "surface-bright": "#f7f9fb",
        "inverse-on-surface": "#eff1f3",
        "surface-container": "#eceef0",
        "on-background": "#191c1e",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#94ccff",
        "inverse-surface": "#2d3133"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xs": "4px",
        "sm": "12px",
        "lg": "48px",
        "xl": "80px",
        "base": "8px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "md": "24px"
      },
      fontFamily: {
        "body-md": ["var(--font-inter)"],
        "display-lg": ["var(--font-montserrat)"],
        "label-md": ["var(--font-inter)"],
        "headline-lg-mobile": ["var(--font-montserrat)"],
        "body-lg": ["var(--font-inter)"],
        "caption": ["var(--font-inter)"],
        "headline-md": ["var(--font-montserrat)"],
        "headline-lg": ["var(--font-montserrat)"]
      },
      fontSize: {
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "caption": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }]
      }
    }
  }
};

export default config;

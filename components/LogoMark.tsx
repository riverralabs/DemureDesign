import type { SVGProps } from "react";

type LogoMarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function LogoMark({ title = "Demure Design", ...props }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 200 160"
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M70 140a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm0-26a22 22 0 1 0 0-44 22 22 0 1 0 0 44z"
      />
      <rect x="92" y="18" width="26" height="122" fill="currentColor" />
      <circle cx="146" cy="128" r="12" fill="var(--sun)" />
    </svg>
  );
}

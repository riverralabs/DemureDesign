type ShopButtonProps = {
  href: string;
};

function EtsyMark() {
  return (
    <svg
      className="btn-mark"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M8.559 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.635L1.521.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2l-1.284 2.91c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305h-1.391l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z"
      />
    </svg>
  );
}

function GumroadMark() {
  return (
    <svg
      className="btn-mark btn-mark-gumroad"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm-.007 5.12c4.48 0 5.995 3.025 6.064 4.744h-3.239c-.069-.962-.897-2.406-2.896-2.406-2.136 0-3.514 1.857-3.514 4.126 0 2.27 1.378 4.125 3.514 4.125 1.93 0 2.758-1.512 3.103-3.025h-3.103v-1.238h6.509v6.327h-2.855v-3.989c-.207 1.444-1.102 4.264-4.617 4.264-3.516 0-5.584-2.82-5.584-6.326 0-3.645 2.276-6.602 6.618-6.602z"
      />
    </svg>
  );
}

export function ShopOnEtsy({ href }: ShopButtonProps) {
  return (
    <a
      className="btn btn-etsy"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <EtsyMark />
      Shop on Etsy
    </a>
  );
}

export function ShopOnGumroad({ href }: ShopButtonProps) {
  return (
    <a
      className="btn btn-gumroad"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <GumroadMark />
      Shop on Gumroad
    </a>
  );
}

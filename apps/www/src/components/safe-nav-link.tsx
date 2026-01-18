'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export function SafeNavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(href);
      }}
      className={className}
    >
      {children}
    </button>
  );
}

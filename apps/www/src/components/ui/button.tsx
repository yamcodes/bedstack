import { cn } from '@/lib/cn';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = 'secondary',
  children,
  className,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 px-6 py-2.5 font-semibold rounded transition-all';

  const variantStyles = {
    primary:
      'bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20',
    secondary:
      'bg-background text-foreground hover:bg-accent border border-border shadow-xs',
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
}

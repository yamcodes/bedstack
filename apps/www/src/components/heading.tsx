'use client';

import { LinkIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Types = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps<T extends Types> = Omit<ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
};

export function Heading<T extends Types = 'h1'>({
  as,
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const As = (as || 'h1') as React.ElementType;

  if (!props.id) {
    return (
      <As className={className} {...props}>
        {children}
      </As>
    );
  }

  return (
    <As
      className={cn(
        'group relative scroll-m-32', // increased scroll-m to account for taller header
        className,
      )}
      {...props}
    >
      <div className="absolute -left-7 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-end pr-2 opacity-0 group-hover:opacity-100 transition-opacity w-8">
        <a
          href={`#${props.id}`}
          className="p-1 rounded-md text-fd-primary transition-all duration-200 focus:outline-none active:ring-2 active:ring-fd-primary"
          aria-label="Link to section"
          data-no-underline
        >
          <LinkIcon className="size-4" />
        </a>
      </div>
      <a
        href={`#${props.id}`}
        className="inline font-inherit text-inherit no-underline opacity-100 hover:opacity-100 hover:text-inherit"
        data-no-underline
      >
        {children}
      </a>
    </As>
  );
}

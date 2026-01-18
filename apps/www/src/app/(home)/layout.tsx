import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { ArrowUpRight } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          text: 'Documentation',
          url: '/docs/what-is-bedstack',
          active: 'nested-url',
        },
        {
          text: <>
            Starter Template
            <ArrowUpRight className="size-4 opacity-50" />
          </>,
          url: 'https://github.com/yamcodes/bedstack-start',
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo-mini.png" alt="Bedstack" width={24} height={24} />
          <span className="font-bold">Bedstack</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Guide',
        url: '/docs/what-is-bedstack',
        active: 'nested-url',
      },
      {
        text: 'RealWorld apps',
        url: 'https://realworld-docs.netlify.app/',
        external: true,
      },
      {
        text: 'GitHub',
        url: 'https://github.com/yamcodes/bedstack',
        external: true,
      },
    ],
    themeSwitch: {
      mode: 'light-dark-system',
    },
  };
}

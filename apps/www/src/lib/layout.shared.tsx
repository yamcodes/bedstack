import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      transparentMode: 'top',
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mini.png"
            alt="Bedstack"
            width={28}
            height={28}
            className="hidden md:block"
          />
          <Image
            src="/logo-mini.png"
            alt="Bedstack"
            width={24}
            height={24}
            className="md:hidden"
          />
          <span className="font-bold">Bedstack</span>
        </div>
      ),
    },
    githubUrl: 'https://github.com/yamcodes/bedstack',
    themeSwitch: {
      mode: 'light-dark-system',
    },
  };
}

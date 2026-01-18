import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(options?: {
  titleSuffix?: string;
  titleHref?: string;
}): BaseLayoutProps {
  return {
    nav: {
      transparentMode: 'top',
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mini.png"
            alt="Bedstack"
            width={30}
            height={28}
            className="hidden md:block"
            unoptimized
          />
          <Image
            src="/logo-mini.png"
            alt="Bedstack"
            width={26}
            height={24}
            className="md:hidden"
            unoptimized
          />
          <span className="font-medium text-lg">
            Bedstack
            {options?.titleSuffix && (
              <span className="font-normal text-muted-foreground ml-1">
                {options.titleSuffix}
              </span>
            )}
          </span>
        </div>
      ),
      url: options?.titleHref ?? '/',
    },
    githubUrl: 'https://github.com/yamcodes/bedstack',
    themeSwitch: {
      mode: 'light-dark-system',
    },
  };
}

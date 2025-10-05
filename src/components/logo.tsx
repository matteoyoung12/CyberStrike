import Image from 'next/image';

export function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return (
    <Image
      src="/images/logo.jpg"
      alt="CyberStrike Logo"
      width={48}
      height={48}
      {...props}
    />
  );
}

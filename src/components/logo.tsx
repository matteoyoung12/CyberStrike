import Image from 'next/image';

export function Logo(props: React.ComponentProps<typeof Image>) {
  return (
    <Image
      src="/images/logo.png"
      alt="CyberStrike Logo"
      width={48}
      height={48}
      {...props}
    />
  );
}

    
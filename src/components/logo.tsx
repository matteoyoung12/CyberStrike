import Image from 'next/image';

export function Logo(props: React.ComponentProps<typeof Image>) {
  return (
    <Image
      src="https://i.imgur.com/fLMMzF5.png"
      alt="CyberStrike Logo"
      width={48}
      height={48}
      {...props}
    />
  );
}

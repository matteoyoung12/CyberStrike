import Image from 'next/image';
import logo from '/public/images/logo.png';

export function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return (
    <Image
      src={logo}
      alt="CyberStrike Logo"
      width={48}
      height={48}
      {...props}
    />
  );
}

    
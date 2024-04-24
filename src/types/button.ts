export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'button'>;

export type ButtonLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
} & React.ComponentPropsWithRef<'button'>;

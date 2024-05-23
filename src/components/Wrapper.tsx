interface WrapperProps {
  children: React.ReactNode; // Type the children prop as React.ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
  return <main className="bg-secondary">{children}</main>;
}

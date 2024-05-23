interface RoutesViewProps {
  children: React.ReactNode; // Type the children prop as React.ReactNode
}

export default function RoutesView({ children }: RoutesViewProps) {
  return <main className="my-[30px]">{children}</main>;
}

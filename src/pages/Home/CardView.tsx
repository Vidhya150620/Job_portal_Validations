interface CardViewProps {
  children: React.ReactNode; // Type the children prop as React.ReactNode
}

export default function CardView({ children }: CardViewProps) {
  return <main className="flex gap-5 my-[30px]">{children}</main>;
}

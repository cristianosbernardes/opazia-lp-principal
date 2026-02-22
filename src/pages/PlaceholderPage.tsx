import { Construction } from "lucide-react";

interface Props {
  title: string;
}

export default function PlaceholderPage({ title }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Construction className="h-12 w-12 text-muted-foreground mb-4" />
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      <p className="text-muted-foreground mt-2">Esta seção está em desenvolvimento.</p>
    </div>
  );
}

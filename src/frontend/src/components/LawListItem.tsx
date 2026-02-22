import { useNavigate } from '@tanstack/react-router';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import type { Law } from '../backend';

interface LawListItemProps {
  law: Law;
}

export default function LawListItem({ law }: LawListItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/law/$number', params: { number: law.number.toString() } });
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-gold hover:scale-[1.02] bg-card/80 backdrop-blur-sm"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex-1">
          <CardTitle className="text-xl font-serif text-burgundy mb-2 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-burgundy text-gold font-bold text-sm">
              {law.number.toString()}
            </span>
            {law.title}
          </CardTitle>
          <CardDescription className="font-serif text-base line-clamp-2">
            {law.explanation.substring(0, 150)}...
          </CardDescription>
        </div>
        <ChevronRight className="w-6 h-6 text-gold flex-shrink-0 ml-4" />
      </CardHeader>
    </Card>
  );
}

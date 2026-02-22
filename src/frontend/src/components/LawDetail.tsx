import { useGetLaw } from '../hooks/useQueries';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2, Scale } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface LawDetailProps {
  lawNumber: bigint;
}

export default function LawDetail({ lawNumber }: LawDetailProps) {
  const { data: law, isLoading, error } = useGetLaw(lawNumber);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-burgundy" />
        <span className="ml-3 text-lg font-serif text-burgundy">Loading law details...</span>
      </div>
    );
  }

  if (error || !law) {
    return (
      <Card className="bg-destructive/10 border-destructive">
        <CardContent className="pt-6">
          <p className="text-destructive font-serif text-center">
            Law not found or error loading details.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/90 backdrop-blur-sm border-gold/50 shadow-xl">
      <CardHeader className="bg-burgundy/5 border-b-2 border-gold">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-burgundy text-gold font-bold text-2xl font-serif flex-shrink-0">
            {law.number.toString()}
          </div>
          <div className="flex-1">
            <CardTitle className="text-3xl font-serif text-burgundy mb-2">
              {law.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-serif">
              <Scale className="w-4 h-4 text-gold" />
              <span>Law Number {law.number.toString()}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Separator className="flex-1 bg-gold/30" />
            <span className="text-sm font-serif text-gold uppercase tracking-wider">
              Complete Explanation
            </span>
            <Separator className="flex-1 bg-gold/30" />
          </div>
          <div className="prose prose-lg max-w-none font-serif text-foreground">
            {law.explanation.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

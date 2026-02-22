import { useGetPreamble } from '../hooks/useQueries';
import { Loader2, ScrollText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PreambleDisplay() {
  const { data: preamble, isLoading, error } = useGetPreamble();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-burgundy" />
        <span className="ml-3 text-lg font-serif text-burgundy">Loading Preamble...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6 text-center">
        <p className="text-destructive font-serif">Error loading Preamble. Please try again.</p>
      </div>
    );
  }

  if (!preamble) {
    return (
      <div className="bg-muted/50 border border-border rounded-lg p-12 text-center">
        <p className="text-muted-foreground font-serif text-lg">
          The Preamble has not been set yet.
        </p>
      </div>
    );
  }

  return (
    <Card className="border-4 border-gold bg-gradient-to-br from-burgundy/5 to-gold/5 shadow-2xl">
      <CardHeader className="border-b-2 border-gold/30 bg-burgundy/10">
        <div className="flex items-center gap-3">
          <ScrollText className="w-8 h-8 text-burgundy" />
          <CardTitle className="text-3xl font-serif font-bold text-burgundy tracking-wide">
            {preamble.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-8 pb-8">
        <div className="prose prose-lg max-w-none font-serif">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap text-justify">
            {preamble.explanation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

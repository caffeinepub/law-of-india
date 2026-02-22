import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import PreambleDisplay from '../components/PreambleDisplay';

export default function PreamblePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => navigate({ to: '/' })}
          className="border-burgundy text-burgundy hover:bg-burgundy hover:text-gold font-serif"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Laws
        </Button>
      </div>

      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-serif font-bold text-burgundy tracking-wide">
            The Preamble
          </h2>
          <p className="text-lg font-serif text-muted-foreground italic">
            The foundation and guiding light of the Indian Constitution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PreambleDisplay />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-6 bg-gold/10 border-2 border-gold/30 rounded-lg">
          <p className="text-sm font-serif text-muted-foreground leading-relaxed">
            The Preamble to the Constitution of India is a brief introductory statement that sets out 
            the guiding purpose, principles, and philosophy of the Constitution. It declares India to be 
            a sovereign, socialist, secular, democratic republic and outlines the objectives of justice, 
            liberty, equality, and fraternity for all its citizens.
          </p>
        </div>
      </div>
    </div>
  );
}

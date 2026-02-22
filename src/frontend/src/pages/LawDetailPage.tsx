import { useParams, useNavigate } from '@tanstack/react-router';
import LawDetail from '../components/LawDetail';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function LawDetailPage() {
  const { number } = useParams({ from: '/law/$number' });
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        onClick={() => navigate({ to: '/' })}
        variant="outline"
        className="mb-6 border-burgundy text-burgundy hover:bg-burgundy hover:text-gold font-serif"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to All Laws
      </Button>
      <LawDetail lawNumber={BigInt(number)} />
    </div>
  );
}

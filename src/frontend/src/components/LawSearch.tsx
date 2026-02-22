import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

interface LawSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function LawSearch({ searchTerm, onSearchChange }: LawSearchProps) {
  return (
    <div className="relative">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-burgundy/60" />
          <Input
            type="text"
            placeholder="Search laws by title or number..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10 h-12 border-2 border-burgundy/30 focus:border-gold font-serif text-base bg-background/80 backdrop-blur-sm"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onSearchChange('')}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-burgundy hover:text-gold hover:bg-burgundy/10"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

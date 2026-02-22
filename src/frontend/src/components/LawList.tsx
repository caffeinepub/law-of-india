import { useState } from 'react';
import { useGetAllLaws } from '../hooks/useQueries';
import LawListItem from './LawListItem';
import LawSearch from './LawSearch';
import { useLawFilter } from '../hooks/useLawFilter';
import { Loader2, Scale } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LawList() {
  const { data: laws, isLoading, error } = useGetAllLaws();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredLaws = useLawFilter(laws || [], searchTerm);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-burgundy" />
        <span className="ml-3 text-lg font-serif text-burgundy">Loading laws...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6 text-center">
        <p className="text-destructive font-serif">Error loading laws. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <LawSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="flex items-center justify-between text-sm font-serif text-muted-foreground">
        <p>
          Showing <span className="font-bold text-burgundy">{filteredLaws.length}</span> of{' '}
          <span className="font-bold text-burgundy">{laws?.length || 0}</span> laws
        </p>
        <Scale className="w-5 h-5 text-gold" />
      </div>

      {filteredLaws.length === 0 ? (
        <div className="bg-muted/50 border border-border rounded-lg p-12 text-center">
          <p className="text-muted-foreground font-serif text-lg">
            No laws found matching your search criteria.
          </p>
        </div>
      ) : (
        <ScrollArea className="h-[600px] rounded-lg border border-gold/30">
          <div className="grid gap-4 p-4">
            {filteredLaws.map((law) => (
              <LawListItem key={law.number.toString()} law={law} />
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

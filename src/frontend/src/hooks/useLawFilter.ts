import { useMemo } from 'react';
import type { Law } from '../backend';

export function useLawFilter(laws: Law[], searchTerm: string): Law[] {
  return useMemo(() => {
    if (!searchTerm.trim()) {
      return laws;
    }

    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    return laws.filter((law) => {
      const titleMatch = law.title.toLowerCase().includes(lowerSearchTerm);
      const numberMatch = law.number.toString().includes(lowerSearchTerm);
      const explanationMatch = law.explanation.toLowerCase().includes(lowerSearchTerm);

      return titleMatch || numberMatch || explanationMatch;
    });
  }, [laws, searchTerm]);
}

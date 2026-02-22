import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { initialLaws } from '../data/initialLaws';

export function useInitializeLaws() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      
      // Convert the data to the format expected by the backend
      const lawsData: [string, bigint, string][] = initialLaws.map(([title, number, explanation]) => [
        title,
        number,
        explanation
      ]);

      await actor.initializeLaws(lawsData);
    },
    onSuccess: () => {
      // Invalidate the laws query to refetch the data
      queryClient.invalidateQueries({ queryKey: ['laws'] });
    },
  });
}

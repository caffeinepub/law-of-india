import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Law, Preamble } from '../backend';

export function useGetAllLaws() {
  const { actor, isFetching } = useActor();

  return useQuery<Law[]>({
    queryKey: ['laws'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLaws();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetLaw(number: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Law | null>({
    queryKey: ['law', number.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getLaw(number);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPreamble() {
  const { actor, isFetching } = useActor();

  return useQuery<Preamble | null>({
    queryKey: ['preamble'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPreamble();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSetPreamble() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, explanation }: { title: string; explanation: string }) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.setPreamble(title, explanation);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['preamble'] });
    },
  });
}

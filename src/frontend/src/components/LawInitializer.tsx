import { useEffect, useState } from 'react';
import { useGetAllLaws } from '../hooks/useQueries';
import { useInitializeLaws } from '../hooks/useInitializeLaws';
import { Loader2 } from 'lucide-react';

export default function LawInitializer() {
  const { data: laws, isLoading: isLoadingLaws } = useGetAllLaws();
  const { mutate: initializeLaws, isPending, isSuccess } = useInitializeLaws();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Only initialize if laws haven't been loaded yet and we haven't already tried
    if (!isLoadingLaws && !hasInitialized && laws && laws.length === 0) {
      setHasInitialized(true);
      initializeLaws();
    }
  }, [laws, isLoadingLaws, hasInitialized, initializeLaws]);

  // Don't render anything if initialization is complete or not needed
  if (!isPending && (isSuccess || (laws && laws.length > 0))) {
    return null;
  }

  // Show loading indicator during initialization
  if (isPending) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-burgundy/90 backdrop-blur-sm text-gold px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="font-serif text-sm">Initializing Constitution laws...</span>
      </div>
    );
  }

  return null;
}

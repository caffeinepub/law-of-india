import { Outlet, useNavigate } from '@tanstack/react-router';
import { Scale, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'law-of-india';
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="legal-bg-overlay fixed inset-0 pointer-events-none" />
      
      <header className="relative z-10 bg-burgundy border-b-4 border-gold shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => navigate({ to: '/' })}
            >
              <img 
                src="/assets/generated/scales-icon.dim_128x128.png" 
                alt="Scales of Justice" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-3xl font-serif font-bold text-gold tracking-wide">
                  Laws of India
                </h1>
                <p className="text-gold/80 text-sm font-serif italic">
                  A Comprehensive Legal Reference
                </p>
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={() => navigate({ to: '/preamble' })}
              className="bg-gold/10 border-gold text-gold hover:bg-gold hover:text-burgundy transition-colors font-serif"
            >
              <ScrollText className="w-4 h-4 mr-2" />
              Preamble
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="relative z-10 bg-burgundy border-t-4 border-gold mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gold/90 text-sm font-serif">
            <p>© {currentYear} Laws of India. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Scale className="w-4 h-4 text-gold" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 underline transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

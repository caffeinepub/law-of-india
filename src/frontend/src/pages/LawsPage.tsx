import LawList from '../components/LawList';

export default function LawsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-serif font-bold text-burgundy mb-2">
          Indian Legal Compendium
        </h2>
        <p className="text-muted-foreground font-serif text-lg">
          Browse through 99 fundamental laws that govern the Republic of India
        </p>
      </div>
      
      <div className="mb-8 text-center">
        <p className="text-3xl font-serif font-semibold text-burgundy-700">
          devansh shukla 6B AF PANCHWATI
        </p>
      </div>
      
      <LawList />
    </div>
  );
}

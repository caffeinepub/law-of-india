import LawList from '../components/LawList';

export default function LawsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-serif font-bold text-burgundy mb-2">
          Indian Legal Compendium
        </h2>
        <p className="text-muted-foreground font-serif text-lg">
          Browse through 50 fundamental laws that govern the Republic of India
        </p>
      </div>
      <LawList />
    </div>
  );
}

import type { JewelryItem } from '@/data/jewelry';
import { ProductCard } from './ProductCard';
import { Gem } from 'lucide-react';

interface ProductGridProps {
  items: JewelryItem[];
  onItemClick: (item: JewelryItem) => void;
}
export function ProductGrid({ items, onItemClick }: ProductGridProps) {
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-6 md:px-8 py-24 text-center">
        <Gem className="mx-auto h-10 w-10 text-muted-foreground/50 mb-4" />
        <h3 className="text-xl font-medium text-foreground mb-2">
          No pieces found
        </h3>
   <p className="text-sm text-muted-foreground">
          Try adjusting your search or filters to discover more jewelry.
        </p>
      </div>
    );
  }
return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 intersect:opacity-100 transition duration-700"
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
 <ProductCard item={item} onClick={onItemClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





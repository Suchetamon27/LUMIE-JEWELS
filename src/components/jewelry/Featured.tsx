import { getFeaturedItems } from '@/data/jewelry';
import { ProductCard } from './ProductCard';

export function Featured() {
  const featuredItems = getFeaturedItems();

  return (
<section id="featured" className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 opacity-0 intersect:opacity-100 transition duration-700">
            Handpicked Favorites
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground opacity-0 intersect:opacity-100 transition duration-700 delay-100">
            Featured Pieces
          </h2>
  </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 intersect:opacity-100 transition duration-700"
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <ProductCard item={item} />
            </div>
       ))}
        </div>
      </div>
    </section>
  );
}




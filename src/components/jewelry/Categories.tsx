import { mainCategories } from '@/data/jewelry';

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
 <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 opacity-0 intersect:opacity-100 transition duration-700">
            Shop by Category
          </p>
 <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground opacity-0 intersect:opacity-100 transition duration-700 delay-100">
            Lumie Jewels Premium Collections
          </h2>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() =>
                onSelectCategory(
                  selectedCategory === category.id ? null : category.id
                )
}
              className="group text-left border transition-all duration-300 opacity-0 intersect:opacity-100"
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {category.name}
    </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              {selectedCategory === category.id && (
                <div className="h-1 bg-accent" />
              )}
   </button>
          ))}
        </div>
      </div>
    </section>
  );
}








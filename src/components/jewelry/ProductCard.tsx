import type { JewelryItem } from '@/data/jewelry';
import { getMainCategoryById } from '@/data/jewelry';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  item: JewelryItem;
  onClick?: (item: JewelryItem) => void;
}

export function ProductCard({ item, onClick }: ProductCardProps) {
  const category = getMainCategoryById(item.mainCategory);

  return (
<Card
      onClick={() => onClick?.(item)}
      className="group cursor-pointer border border-border bg-card overflow-hidden rounded-none shadow-none hover:border-accent/50 transition-colors duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
  <CardContent className="p-5">
        <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
          {category?.name} — {item.subCategory}
        </p>
        <h3 className="text-base font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
          {item.name}
        </h3>
 <p className="text-sm text-muted-foreground">
          ₹ {item.price.toLocaleString('en-IN')}
        </p>
      </CardContent>
    </Card>
  );
}




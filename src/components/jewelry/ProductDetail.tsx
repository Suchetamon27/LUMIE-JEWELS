import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { JewelryItem } from '@/data/jewelry';
import { getMainCategoryById } from '@/data/jewelry';
import { Badge } from '@/components/ui/badge';
interface ProductDetailProps {
  item: JewelryItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetail({ item, open, onOpenChange }: ProductDetailProps) {
  if (!item) return null;
const category = getMainCategoryById(item.mainCategory);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-4xl p-0 overflow-hidden rounded-none border-border bg-background">
        <DialogHeader className="sr-only">
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>
            {item.subCategory} — {item.material}
  </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto bg-muted">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
 <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="w-fit rounded-none border-accent text-accent uppercase tracking-wider text-xs"
              >
                {category?.name}
              </Badge>
              <Badge
                variant="outline"
                className="w-fit rounded-none border-border text-muted-foreground uppercase tracking-wider text-xs"
              >
 {item.collection}
              </Badge>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
              {item.name}
            </h2>

            <p className="text-sm text-muted-foreground mb-6">
              {item.subCategory} / {item.material}
            </p>
  <p className="text-base text-foreground leading-relaxed mb-8">
              {item.description}
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-2xl font-semibold text-foreground">
                ₹ {item.price.toLocaleString('en-IN')}
              </span>
  <span className="text-sm text-muted-foreground">
                Inclusive of all taxes
              </span>
            </div>

            <div className="p-4 bg-muted text-sm text-muted-foreground">
              </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}








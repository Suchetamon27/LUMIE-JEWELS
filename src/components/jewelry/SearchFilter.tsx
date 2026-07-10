mport { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
 mainCategories,
  subCategories,
  materials,
  collections,
} from '@/data/jewelry';

interface SearchFilterProps {
  query: string;
onQueryChange: (value: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  selectedSubCategory: string | null;
  onSelectSubCategory: (value: string | null) => void;
  selectedMaterial: string | null;
  onSelectMaterial: (value: string | null) => void;
  selectedCollection: string | null;
  onSelectCollection: (value: string | null) => void;
  resultCount: number;
}
export function SearchFilter({
  query,
  onQueryChange,
  selectedCategory,
  onSelectCategory,
  selectedSubCategory,
  onSelectSubCategory,
  selectedMaterial,
  onSelectMaterial,
  selectedCollection,
  onSelectCollection,
  resultCount,
}: SearchFilterProps) {
  const hasActiveFilters =
    query.trim() ||
 selectedCategory ||
    selectedSubCategory ||
    selectedMaterial ||
    selectedCollection;

  const clearFilters = () => {
    onQueryChange('');
    onSelectCategory(null);
    onSelectSubCategory(null);
    onSelectMaterial(null);
    onSelectCollection(null);
  };
 return (
    <section id="search" className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 opacity-0 intersect:opacity-100 transition duration-700">
            Find Your Piece
          </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground opacity-0 intersect:opacity-100 transition duration-700 delay-100">
            Search the Collection
          </h2>
        </div>
 <div className="flex flex-col gap-6 opacity-0 intersect:opacity-100 transition duration-700 delay-200">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, category, material, collection..."
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="pl-10 pr-10 h-12 rounded-none border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-accent"
            />
{query && (
              <button
                onClick={() => onQueryChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
<div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              {mainCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    onSelectCategory(
                      selectedCategory === category.id ? null : category.id
                    )
                  }
 className={`rounded-none text-xs tracking-wider uppercase h-9 px-3 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-accent-foreground border-accent hover:bg-accent/90'
                      : 'bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground'
                  }`}
                >
                  {category.name.split(' ')[0]}
                </Button>
              ))}
            </div>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:ml-auto md:w-auto w-full">
              <Select
                value={selectedSubCategory || 'all'}
                onValueChange={(value) =>
                  onSelectSubCategory(value === 'all' ? null : value)
                }
              >
                <SelectTrigger className="rounded-none h-9 text-xs tracking-wider uppercase border-border bg-background text-muted-foreground focus:ring-accent">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:ml-auto md:w-auto w-full">
              <Select
                value={selectedSubCategory || 'all'}
                onValueChange={(value) =>
                  onSelectSubCategory(value === 'all' ? null : value)
                }
              >
                <SelectTrigger className="rounded-none h-9 text-xs tracking-wider uppercase border-border bg-background text-muted-foreground focus:ring-accent">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
  value={selectedMaterial || 'all'}
                onValueChange={(value) =>
                  onSelectMaterial(value === 'all' ? null : value)
                }
              >
                <SelectTrigger className="rounded-none h-9 text-xs tracking-wider uppercase border-border bg-background text-muted-foreground focus:ring-accent">
                  <SelectValue placeholder="Material" />
                </SelectTrigger>
  <SelectContent className="rounded-none">
                  <SelectItem value="all">All Materials</SelectItem>
                  {materials.map((mat) => (
                    <SelectItem key={mat} value={mat}>
                      {mat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedCollection || 'all'}
                onValueChange={(value) =>
                  onSelectCollection(value === 'all' ? null : value)
                }
    >
                <SelectTrigger className="rounded-none h-9 text-xs tracking-wider uppercase border-border bg-background text-muted-foreground focus:ring-accent">
                  <SelectValue placeholder="Collection" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectItem value="all">All Collections</SelectItem>
                  {collections.map((col) => (
                    <SelectItem key={col} value={col}>
                      {col}
                    </SelectItem>
                  ))}
   </SelectContent>
              </Select>
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="rounded-none text-xs tracking-wider uppercase h-9 text-muted-foreground hover:text-foreground"
              >
 Clear
              </Button>
            )}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground opacity-0 intersect:opacity-100 transition duration-700 delay-300">
          {resultCount} {resultCount === 1 ? 'piece' : 'pieces'} found
        </p>
      </div>
    </section>
  );
        }
















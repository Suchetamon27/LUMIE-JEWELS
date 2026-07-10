export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-lg tracking-[0.2em] uppercase text-foreground mb-2">
              LUMIE JEWELS
            </p>
<p className="text-sm text-muted-foreground">
              Indian fine jewelry, crafted for every luminous celebration.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} LUMIE JEWELS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

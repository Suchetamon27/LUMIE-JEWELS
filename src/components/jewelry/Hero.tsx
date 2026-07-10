import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);
 const scrollToCollections = () => {
    const element = document.querySelector('#collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background — desktop only for performance */}
      <video
        ref={videoRef}
ref={videoRef}
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 0.85 : 0 }}
        autoPlay
        muted
        loop
        playsInline
        poster="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c0bee111-1907-446d-889c-91c884eea0db.jpg"
        onLoadedData={() => setVideoLoaded(true)}
      >
 <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Static fallback image for mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 md:hidden"
        style={{
 backgroundImage:
            'url(https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c0bee111-1907-446d-889c-91c884eea0db.jpg)',
        }}
      />

      {/* Static fallback image for desktop while video loads */}
      <div
 className="hidden md:block absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          opacity: videoLoaded ? 0 : 0.8,
          backgroundImage:
            'url(https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c0bee111-1907-446d-889c-91c884eea0db.jpg)',
        }}
      />
 {/* Soft overlay to keep text readable while background stays visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/25 to-background/60" />

      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-24 pb-16 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 intersect:opacity-100 transition duration-700 drop-shadow-md">
          Timeless Elegance
        </p>
<h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 opacity-0 intersect:opacity-100 transition duration-700 delay-100 drop-shadow-lg">
          LUMIE JEWELS
        </h1>
        <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10 opacity-0 intersect:opacity-100 transition duration-700 delay-200 drop-shadow-md">
          Discover a curated collection of Indian fine jewelry — solitaire
          rings, mangalsutras, jhumkas, bangles, and more — crafted to
          celebrate every luminous moment.
        </p>
<div className="opacity-0 intersect:opacity-100 transition duration-700 delay-300">
          <Button
            onClick={scrollToCollections}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase"
          >
            Explore Collections
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToCollections}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}







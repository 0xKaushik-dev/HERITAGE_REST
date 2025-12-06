'use client';

import { Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#121212]' : 'bg-transparent'}`}
      style={{ padding: '12px 60px' }}
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-x-3 text-white transition-opacity hover:opacity-80">
          <div style={{ backgroundColor: 'var(--color-logo-accent, #C00000)' }} className="h-9 w-9 rounded-full"></div>
          <span className="font-['Cinzel'] text-2xl tracking-wider">HERITAGE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-x-8 md:flex">
          <Link href="/#about" className="text-base font-medium text-foreground transition-colors hover:text-primary">About</Link>
          <Link href="/menu" className="text-base font-medium text-foreground transition-colors hover:text-primary">Menu</Link>
          <Link href="/#contact" className="text-base font-medium text-foreground transition-colors hover:text-primary">Contact</Link>
          <Link href="https://www.google.com/maps/reserve/v/dine/c/nuaM6ifkOKY?source=pa&opi=79508299&hl=en-IN&gei=oRAzaeG0D5iXseMP-eW0oAs&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m21!1s0x390d1937c81d1f05:0x6cc93bf6845355b7!3m12!1m3!1d30173.811667762093!2d77.05021042217315!3d28.48304948667389!2m3!1f0!2f0!3f0!3m2!1i1536!2i826!4f13.1!4m2!3d28.483161!4d77.0501917!6b0!15m2!1m1!4s/g/11sd9g4gvb!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1slw8zaeuYN86gnesPhozo6AI!7e81!15m110!1m31!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m20!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!27m1!1b0!28b0!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!14m1!3b0!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i826!1m6!1m2!1i1486!2i0!2m2!1i1536!2i826!1m6!1m2!1i0!2i0!2m2!1i1536!2i20!1m6!1m2!1i0!2i806!2m2!1i1536!2i826!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i760!38sChNyZXN0YXVyYW50cyBuZWFyIG1lIgOQAQFaFSITcmVzdGF1cmFudHMgbmVhciBtZZIBF25vcnRoX2luZGlhbl9yZXN0YXVyYW504AEA!39sCurry%2BGarden%26q%3DCurry%2BGarden" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground transition-colors hover:text-primary">Reservation</Link>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-x-6 md:flex">
          <Link href="https://www.google.com/maps/reserve/v/dine/c/nuaM6ifkOKY?source=pa&opi=79508299&hl=en-IN&gei=oRAzaeG0D5iXseMP-eW0oAs&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m21!1s0x390d1937c81d1f05:0x6cc93bf6845355b7!3m12!1m3!1d30173.811667762093!2d77.05021042217315!3d28.48304948667389!2m3!1f0!2f0!3f0!3m2!1i1536!2i826!4f13.1!4m2!3d28.483161!4d77.0501917!6b0!15m2!1m1!4s/g/11sd9g4gvb!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1slw8zaeuYN86gnesPhozo6AI!7e81!15m110!1m31!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m20!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!27m1!1b0!28b0!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!14m1!3b0!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i826!1m6!1m2!1i1486!2i0!2m2!1i1536!2i826!1m6!1m2!1i0!2i0!2m2!1i1536!2i20!1m6!1m2!1i0!2i806!2m2!1i1536!2i826!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i760!38sChNyZXN0YXVyYW50cyBuZWFyIG1lIgOQAQFaFSITcmVzdGF1cmFudHMgbmVhciBtZZIBF25vcnRoX2luZGlhbl9yZXN0YXVyYW504AEA!39sCurry%2BGarden%26q%3DCurry%2BGarden" target="_blank" rel="noopener noreferrer" className="rounded border border-foreground bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:bg-primary">
            BOOK
          </Link>
        </div>

        {/* Mobile Menu Button (placeholder) */}
        <div className="md:hidden">
          <button type="button" aria-label="Open menu" className="text-foreground">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navigation;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';

const row1Images = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/bFylbxD0AFzVrTvcuVcrbZAdHg-1.jpg", width: '250px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/dSLGUQGHRmDzS37aekXrk0Uo-2.jpg", width: '200px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/IzhqOwUPJW0naybsKoYCbe9bcxA-3.jpg", width: '150px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/n9Zp3M4Z95peBZzqyDVITNYJvtg-4.jpg", width: '250px' },
];

const row2Images = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/vk457b2UvYYUaaOkbY2xW4Szwp0-5.jpg", width: '250px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/wmUXQViezLWggT7SyQbFRcvv6l8-6.jpg", width: '150px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/tn40umn82b3r7mkIFWgG2lTELjY-7.jpg", width: '200px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/euIFR7u0NopzKjVYcPxT859ps-8.jpg", width: '250px' },
];

const row3Images = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/IVWdKHLjywd0auwBaIKOsQNYVCk-9.jpg", width: '250px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/lxQSlZsHiNw1a5Kq7RgO7Ov7AUs-10.jpg", width: '200px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/7epkGKEo45UxkNtkSgmFBZC6gk-11.jpg", width: '250px' },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/LA7nDk24O0xYEXu0vY7n4gYVIk-12.jpg", width: '200px' },
];

type TickerImage = {
  src: string;
  width: string;
};

const TickerRow = ({ images, reverse = false }: { images: TickerImage[]; reverse?: boolean }) => {
  return (
    <div className="flex-1 w-full overflow-hidden h-full">
      <ul className={`flex h-full w-max ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {[...images, ...images].map((img, i) => (
          <li key={i} style={{ width: img.width }} className="relative h-full mx-2 border border-border-subtle flex-shrink-0">
            <Image src={img.src} alt="Authentic Oishi Sushi" fill className="object-cover" sizes="30vw" priority={i < images.length} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll 60s linear infinite reverse;
        }
      `}</style>
      <header className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-background">
        <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 py-4">
          <TickerRow images={row1Images} />
          <TickerRow images={row2Images} reverse />
          <TickerRow images={row3Images} />
        </div>

        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(180deg, rgb(10, 10, 10) 0%, rgba(10, 10, 10, 0.7) 12.5%, rgba(10, 10, 10, 0) 25%, rgba(10, 10, 10, 0) 75%, rgba(10, 10, 10, 0.7) 87.5%, rgb(10, 10, 10) 100%)' }}></div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-text-primary text-center uppercase">
            HERITAGE THE FINE DINE<br />
            <span className="text-3xl md:text-4xl mt-2 block font-sans">हेरिटेज द फाइन डाइन</span>
          </h1>
          <p className="mt-4 text-text-secondary text-center text-xl max-w-2xl">
            Laid-back restaurant offering hearty classic dishes and buffet dining, served with desserts & beverages. Perfect for family and group dining.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="https://www.google.com/maps/reserve/v/dine/c/nuaM6ifkOKY?source=pa&opi=79508299&hl=en-IN&gei=oRAzaeG0D5iXseMP-eW0oAs&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m21!1s0x390d1937c81d1f05:0x6cc93bf6845355b7!3m12!1m3!1d30173.811667762093!2d77.05021042217315!3d28.48304948667389!2m3!1f0!2f0!3f0!3m2!1i1536!2i826!4f13.1!4m2!3d28.483161!4d77.0501917!6b0!15m2!1m1!4s/g/11sd9g4gvb!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1slw8zaeuYN86gnesPhozo6AI!7e81!15m110!1m31!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m20!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!27m1!1b0!28b0!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!14m1!3b0!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i826!1m6!1m2!1i1486!2i0!2m2!1i1536!2i826!1m6!1m2!1i0!2i0!2m2!1i1536!2i20!1m6!1m2!1i0!2i806!2m2!1i1536!2i826!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i760!38sChNyZXN0YXVyYW50cyBuZWFyIG1lIgOQAQFaFSITcmVzdGF1cmFudHMgbmVhciBtZZIBF25vcnRoX2luZGlhbl9yZXN0YXVyYW504AEA!39sCurry%2BGarden%26q%3DCurry%2BGarden"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-accent-red-hover text-primary-foreground py-3 px-8 text-label-button transition-transform duration-300 hover:scale-105"
            >
              RESERVE A TABLE
            </Link>
            <Link
              href="/menu"
              className="border border-white text-white py-3 px-8 text-label-button transition-transform duration-300 hover:scale-105 bg-black/20 hover:bg-white/10"
            >
              VIEW MENU
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 z-20 hidden md:block bg-card/40 backdrop-blur-[10px] p-6 text-sm text-text-primary">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p>Closed · Opens 11 AM</p>
              <p className="text-text-secondary">Daily: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-4">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p>SCO-55, 1st Floor, Old Judicial Complex,</p>
              <p className="text-text-secondary">Jail Rd, Civil Lines, Gurugram, Haryana 122001</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
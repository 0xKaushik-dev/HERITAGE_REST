"use client";

import Image from "next/image";
import { Clock, MapPin } from "lucide-react";

const row1Images = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/bFylbxD0AFzVrTvcuVcrbZAdHg-1.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/dSLGUQGHRmDzS37aekXrk0Uo-2.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/IzhqOwUPJW0naybsKoYCbe9bcxA-3.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/n9Zp3M4Z95peBZzqyDVITNYJvtg-4.jpg",
];

const row2Images = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/vk457b2UvYYUaaOkbY2xW4Szwp0-5.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/wmUXQViezLWggT7SyQbFRcvv6l8-6.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/tn40umn82b3r7mkIFWgG2lTELjY-7.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/euIFR7u0NopzKjVYcPxT859ps-8.jpg",
];

const row3Images = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/IVWdKHLjywd0auwBaIKOsQNYVCk-9.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/lxQSlZsHiNw1a5Kq7RgO7Ov7AUs-10.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/7epkGKEo45UxkNtkSgmFBZC6gk-11.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/LA7nDk24O0xYEXu0vY7n4gYVIk-12.jpg",
];

const ImageSet = ({ images, keyPrefix }: { images: string[]; keyPrefix: string }) => (
  <div className="flex shrink-0 items-center justify-around gap-5">
    {images.map((src, i) => (
      <div
        key={`${keyPrefix}-${i}`}
        className="relative h-[240px] w-[360px] shrink-0 overflow-hidden rounded-lg border border-border md:h-[300px] md:w-[450px]"
      >
        <Image
          src={src}
          alt="A delicious sushi dish from Oishi Sushi"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={i < 2}
        />
      </div>
    ))}
  </div>
);

const ScrollerRow = ({ images, duration, reverse = false }: { images: string[]; duration: string; reverse?: boolean }) => {
  const animationClass = reverse 
    ? "animate-[scroll_var(--duration)_linear_infinite_reverse]" 
    : "animate-[scroll_var(--duration)_linear_infinite]";

  return (
    <div className="flex w-max items-center" style={{ '--duration': duration } as React.CSSProperties}>
      <div className={`${animationClass}`}>
        <div className="flex">
          <ImageSet images={images} keyPrefix={duration+"-1"} />
          <ImageSet images={images} keyPrefix={duration+"-2"} aria-hidden="true" />
        </div>
      </div>
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
      `}</style>
      <header className="relative h-screen w-full overflow-hidden bg-background-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex -rotate-12 scale-[1.3] flex-col gap-5 md:scale-150">
            <ScrollerRow images={row1Images} duration="40s" />
            <ScrollerRow images={row2Images} duration="25s" reverse={true} />
            <ScrollerRow images={row3Images} duration="60s" />
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-['Cinzel'] text-4xl text-text-primary tracking-[0.03em] md:text-6xl lg:text-[72px] lg:leading-[1.1] lg:tracking-[2.16px]">
            AUTHENTIC OISHI SUSHI
          </h1>
          <h2 className="mt-4 max-w-xl font-['Inter'] text-lg text-[#cccccc] md:text-xl md:tracking-[0.4px]">
            Experience the Art of Sushi: Fresh, Authentic, and Exquisite Delights
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="#"
              className="border-2 border-primary bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-primary-foreground transition-colors hover:bg-accent-red-hover hover:border-accent-red-hover rounded-[4px]"
            >
              BOOK TABLE
            </a>
            <a
              href="#"
              className="border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-white transition-colors hover:bg-white/10 rounded-[4px]"
            >
              VIEW MENU
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 z-20 hidden rounded-lg bg-black/30 p-5 backdrop-blur-sm md:bottom-10 md:left-10 md:block">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 text-white" />
              <div className="font-['Inter'] text-base text-white">
                <p>Monday - Sunday</p>
                <p>9:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-white" />
              <div className="font-['Inter'] text-base text-white">
                <p>36 Market St,</p>
                <p>New York, NY 10002</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
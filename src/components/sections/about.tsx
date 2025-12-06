import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#0A0A0A] py-20 lg:py-[120px]">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h5 className="font-sans text-xs font-bold uppercase tracking-[2px] text-[#999999]">
            ABOUT OISHI
          </h5>
          <h2 className="font-display text-[48px] font-normal leading-[1.2] tracking-tight text-white lg:text-[56px]">
            Creating a New World of FlaVORs
          </h2>
          <p className="mx-auto max-w-[600px] font-sans text-base font-normal leading-[1.8] text-[#cccccc] lg:mx-0">
            Welcome to Oishi, where the delicate artistry of sushi meets the
            vibrant flavors of Japan. At Oishi, we are passionate about
            delivering an authentic and unforgettable dining experience,
            bringing the essence of traditional Japanese cuisine to every plate.
          </p>
          <p className="mx-auto max-w-[600px] font-sans text-base font-normal leading-[1.8] text-[#cccccc] lg:mx-0">
            Our master chefs meticulously craft each piece of sushi using the
            freshest, highest-quality ingredients sourced locally and globally.
            From the rich, buttery taste of our sashimi to the perfectly
            balanced rolls, every bite at Oishi is a testament to our
            commitment to excellence and authenticity.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[350px] w-full md:h-[480px] lg:h-auto lg:aspect-[3/2]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/jXPPq5orZyD06or2eBrk6Lqkrik-13.jpg"
            alt="Sushi chef preparing food at a wooden counter"
            fill
            className="rounded-lg object-cover shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]"
            sizes="(max-width: 1023px) 90vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-20 items-center">
          <div className="lg:col-span-3">
            <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-5">
              ABOUT OISHI
            </p>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-primary-foreground mb-8 leading-tight">
              Creating a New World
              <br />
              of FlaVORs
            </h2>
            <div className="font-body space-y-6 text-lg text-[#CCCCCC] leading-[1.8]">
              <p>
                Welcome to Oishi, where the delicate artistry of sushi meets the vibrant flavors of Japan. At Oishi, we are passionate about delivering an authentic and unforgettable dining experience, bringing the essence of traditional Japanese cuisine to every plate.
              </p>
              <p>
                Our master chefs meticulously craft each piece of sushi using the freshest, highest-quality ingredients sourced locally and globally. From the rich, buttery taste of our sashimi to the perfectly balanced rolls, every bite at Oishi is a testament to our commitment to excellence and authenticity.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 mt-12 lg:mt-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/jXPPq5orZyD06or2eBrk6Lqkrik-13.jpg"
              alt="Oishi sushi chef preparing a dish with precision"
              width={480}
              height={640}
              className="rounded-2xl w-full h-auto object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

const reviews = [
  {
    quote:
      "Oishi never disappoints. The variety on the menu is impressive, and everything I've tried has been delicious. The staff is friendly and attentive, making every visit enjoyable. The spicy tuna roll is a must-try!",
    author: "Michael T.",
    initials: "MT",
  },
  {
    quote:
      "I've been to many sushi restaurants, but Oishi stands out for its quality and creativity. The Omakase experience was unforgettable. Each piece of sushi was a delight, and the chef's explanations added a special touch.",
    author: "Emily R.",
    initials: "ER",
  },
  {
    quote:
      "The ambiance at Oishi is fantastic. It's cozy, modern, and the perfect place for a date night or a casual dinner with friends. The dragon roll is my absolute favorite. Service is always top-notch.",
    author: "Jane A.",
    initials: "JA",
  },
  {
    quote:
      "Oishi has the best sushi in town! The fish is always incredibly fresh, and the presentation is stunning. The chefs are true artists. I can't get enough of their sashimi platter. Highly recommend!",
    author: "Mark S.",
    initials: "MS",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-background py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium leading-6 text-muted-foreground uppercase tracking-[0.1em]">
            REVIEWS
          </p>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            OUR CUSTOMERS LOVE US
          </h2>
        </div>
        <motion.div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.author}
              className="flex flex-col bg-card p-10 rounded-xl border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
              variants={cardVariants}
            >
              <div className="flex-grow">
                <p className="text-base leading-[1.7] text-foreground">
                  “{review.quote}”
                </p>
              </div>
              <footer className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700">
                  <span className="text-sm font-medium text-zinc-400">{review.initials}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {review.author}
                </div>
              </footer>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-80 hover:underline"
          >
            READ MORE REVIEWS
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
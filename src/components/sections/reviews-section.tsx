"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

interface Review {
  quote: string;
  author: string;
}

const reviewsData: Review[] = [
  {
    quote: "I visited Heritage The Fine Dine and had a great experience. Mr. Sandeep suggested amazing options. Delicious food & excellent service.",
    author: "Raveena Singh",
  },
  {
    quote: "What you’ll like: A sorted vegetarian-friendly restaurant with decent food options.",
    author: "Uthranarayan C",
  },
  {
    quote: "Food quality is good. Crispy corn needs improvement, but starters & main course were very good overall.",
    author: "Deepanshu Sachdeva",
  },
  {
    quote: "The food here is absolutely delightful! The atmosphere is peaceful — perfect for families to enjoy a relaxed meal together.",
    author: "Sunil Kharwar",
  },
];

const highlights = [
  "The service, staff, quality and portion of serving is absolutely amazing.",
  "Cosy ambience with beautiful decor and relaxed dining experience.",
  "Good food and ambiance, parking access can be improved."
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-card border border-border p-8 transition-all duration-700 ease-out hover:border-border-hover hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="font-body text-base leading-relaxed text-text-secondary">
        "{review.quote}"
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-border">
          <span className="font-body text-sm font-medium text-text-secondary">
            {getInitials(review.author)}
          </span>
        </div>
        <p className="font-body text-sm text-text-tertiary">{review.author}</p>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
            REVIEWS
          </p>
          <h2 className="mt-4 font-display text-[3rem] leading-tight text-text-primary">
            OUR CUSTOMERS LOVE US
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 text-left">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="bg-card/50 p-4 border border-border/50 rounded-lg">
                <p className="text-sm italic text-text-secondary">"{highlight}"</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
          {reviewsData.map((review, index) => (
            <ReviewCard key={review.author} review={review} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary"
          >
            READ MORE REVIEWS
          </a>
          <div className="mt-8 text-text-secondary">
            <p className="font-semibold uppercase tracking-wider text-sm">Nearby</p>
            <p className="mt-2 text-lg">Palettes by Heritage – ⭐4.6 | Banquet Hall · Floor 0 · Opens 11am</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
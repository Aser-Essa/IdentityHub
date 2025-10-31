import SectionHeader from "@/components/SectionHeader";

import TestimonialsSwiper from "@/components/TestimonialsSwiper";

export default function Testimonials() {
  return (
    <section className="mt-36.5 px-4 md:px-20">
      <SectionHeader
        label={"Testimonials"}
        title={
          <p>
            What’s our user{" "}
            <span className="text-gradient-blue-pink-horizontal">says</span>
            <br />
            about us
          </p>
        }
      />
      <TestimonialsSwiper />
    </section>
  );
}

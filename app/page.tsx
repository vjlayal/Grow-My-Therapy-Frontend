'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OfficeSection from '@/components/OfficeSection';

export default function Home() {
  // State for Professional Background accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // State for FAQs accordion
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  // Specialties data
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "Support for constant worry, physical tension, sleep difficulties, and feeling on edge. I help clients understand and manage the emotional and physiological aspects of anxiety.",
      imageSrc: "https://images.pexels.com/photos/6144393/pexels-photo-6144393.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Trauma & EMDR",
      description: "Specialized treatment for single-incident and complex trauma using EMDR and trauma-informed approaches. Emphasis on safety, stabilization, and helping you feel more regulated in daily life.",
      imageSrc: "https://images.pexels.com/photos/17458121/pexels-photo-17458121.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Burnout & Perfectionism",
      description: "Therapy for entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress. Develop more sustainable ways of living and working.",
      imageSrc: "https://images.pexels.com/photos/7640769/pexels-photo-7640769.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Professional background items
  const backgroundItems = [
    {
      title: "Education",
      content: "Doctor of Psychology (PsyD) in Clinical Psychology. Specialized training in trauma-focused therapies, cognitive-behavioral approaches, and EMDR."
    },
    {
      title: "Licensure",
      content: "Licensed Clinical Psychologist in the state of California. Authorized to provide both in-person and telehealth services to California residents."
    },
    {
      title: "Specializations",
      content: "Anxiety and panic disorders, trauma and PTSD (EMDR certified), professional burnout, perfectionism, and high-functioning stress. Experience working with entrepreneurs, creatives, and high-achieving professionals."
    },
    {
      title: "Therapeutic Approach",
      content: "Integrative evidence-based therapy combining CBT, EMDR, mindfulness-based practices, and body-oriented techniques. Warm, collaborative, and grounded approach with emphasis on both symptom relief and long-term personal growth."
    }
  ];

  // Social images
  const socialImages = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=300&fit=crop"
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      {/* Fulfilling Life Section */}
      <section className="w-full min-h-[950px] grid grid-cols-1 md:grid-cols-2">
        {/* Left - Content with Button */}
        <div className="relative bg-primary-light min-h-[950px] flex flex-col order-2 md:order-1">
          <div className="flex-1 px-8 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark mb-8">
                Therapy That Helps You Feel Grounded Again
              </h2>

              <p className="text-base md:text-lg text-text-primary font-light leading-relaxed mb-6">
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
              </p>

              <p className="text-base md:text-lg text-text-primary font-light leading-relaxed">
                I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you're experiencing.
              </p>
            </div>
          </div>

          {/* Button - Edge to edge at bottom */}
          <button className="w-full border-t border-primary-dark text-primary-dark hover:bg-primary hover:text-white transition-all duration-300 font-light text-sm tracking-wide py-6">
            LEARN MORE →
          </button>
        </div>
        {/* Right - Image (spans both rows) */}
        <div className="relative min-h-[950px] md:min-h-screen bg-primary-light row-span-2 order-1 md:order-3">
          <Image
            src="https://images.pexels.com/photos/8942907/pexels-photo-8942907.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Therapy session - finding balance and peace"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Specialties Section */}
      <section className="w-full px-8 md:px-10 lg:px-24 py-24 my-10">
        <div className="max-w-full mx-5 ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark text-center mb-16">
            Core Areas of Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-primary-light w-full h-[600px] border-[1px] border-solid border-primary-dark px-4  flex flex-col space-y-6 justify-around">
                <h3 className="text-xl font-bold text-primary-dark">{specialty.title}</h3>
                <p className="text-text-secondary font-light text-base leading-relaxed">
                  {specialty.description}
                </p>
                <div className="relative w-full aspect-square max-w-[400px] mx-auto mt-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={specialty.imageSrc}
                      alt={specialty.title}
                      fill
                      className={`object-cover ${index === 2 ? 'grayscale' : ''}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section - You don't have to do this all alone */}
      <section className="w-full min-h-[950px] grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr_auto]">
        {/* Left - Image (spans both rows) */}
        <div className="relative min-h-[500px] md:min-h-screen bg-accent row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=1000&fit=crop"
            alt="Person looking up thoughtfully"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="bg-accent px-8 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8">
              If You're Experiencing...
            </h2>

            <p className="text-base md:text-xl text-white font-light mb-8">
              Many of the people I work with are high-achieving and self-aware—but internally feel:
            </p>

            <ul className="space-y-4 mb-10">
              <li className="text-sm md:text-base lg:text-xl text-white font-light flex items-start">
                <span className="mr-3">•</span>
                <span>Constant worry or feeling on edge</span>
              </li>
              <li className="text-sm md:text-base lg:text-xl text-white font-light flex items-start">
                <span className="mr-3">•</span>
                <span>Physical tension or difficulty sleeping</span>
              </li>
              <li className="text-sm md:text-base lg:text-xl text-white font-light flex items-start">
                <span className="mr-3">•</span>
                <span>Impact of past experiences on current relationships</span>
              </li>
              <li className="text-sm md:text-base lg:text-xl text-white font-light flex items-start">
                <span className="mr-3">•</span>
                <span>Professional burnout or exhaustion</span>
              </li>
              <li className="text-sm md:text-base lg:text-xl text-white font-light flex items-start">
                <span className="mr-3">•</span>
                <span>Perfectionism and high internal pressure</span>
              </li>
            </ul>

            <p className="text-sm md:text-base lg:text-xl text-white font-light leading-relaxed">
              Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
            </p>
          </div>
        </div>

        {/* Button - Edge to edge at bottom */}
        <button className="w-full bg-accent border-t border-white text-white hover:bg-primary-dark hover:text-white transition-all duration-300 font-light text-base tracking-wide py-6">
          WORK WITH ME →
        </button>
      </section>

      {/* Introduction Section - Hi, I'm Lilac */}
      <section className="w-full min-h-[1000px] py-20 px-8 md:px-16 lg:px-24 bg-primary-light">
        <div className="max-w-full mx-14 my-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right - Overlapping Circular Images (First on mobile) */}
          <div className="relative h-[450px] md:h-[550px] order-1 md:order-2">
            {/* Large arch-shaped image - Dr. Reynolds' photo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 w-[320px] h-[420px] md:w-[420px] md:h-[550px] lg:w-[480px] lg:h-[630px] rounded-t-full overflow-hidden shadow-lg">
              <Image
                src="https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa"
                alt="Dr. Maya Reynolds, PsyD - Clinical Psychologist in Santa Monica"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left - Text Content (Second on mobile) */}
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark">
              About Dr. Maya Reynolds
            </h2>
            <p className="text-base md:text-xl text-text-primary font-light leading-relaxed max-w-3xl">
              I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </p>
            <p className="text-base md:text-xl text-text-primary font-light leading-relaxed max-w-3xl">
              I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
            </p>
            <div className="flex flex-col items-center pt-20">
              <button className="px-8 py-3 border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 font-light text-sm tracking-wide">
                LEARN MORE ABOUT MY APPROACH →
              </button>
            </div>
          </div>
        </div>
      </section>

      <OfficeSection />

      {/* FAQs Section */}
      <section className="w-full min-h-[900px] py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[9/16] max-h-[calc(550px*16/9-25px)] ml-10">
              <div className="absolute inset-0 rounded-t-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5428826/pexels-photo-5428826.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Peaceful therapy environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - FAQs */}
          <div className="space-y-8">
            <h2 className="text-5xl font-light text-primary-dark">FAQs</h2>
            <div className="space-y-0">
              <div className="border-b border-text-secondary">
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === 0 ? null : 0)}
                  className="w-full py-6 flex items-center gap-4 text-left hover:text-primary-dark transition-colors"
                >
                  <span className="text-3xl text-text-secondary flex-shrink-0">
                    {faqOpenIndex === 0 ? '−' : '+'}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-dark whitespace-nowrap">Do you take insurance?</span>
                </button>
                {faqOpenIndex === 0 && (
                  <div className="pb-6 text-text-secondary font-light leading-relaxed">
                    Yes, I accept most major insurance plans. Please contact me to verify your specific coverage.
                  </div>
                )}
              </div>
              <div className="border-b border-text-secondary">
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === 1 ? null : 1)}
                  className="w-full py-6 flex items-center gap-4 text-left hover:text-primary-dark transition-colors"
                >
                  <span className="text-3xl text-text-secondary flex-shrink-0">
                    {faqOpenIndex === 1 ? '−' : '+'}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-dark whitespace-nowrap">Do you offer telehealth therapy?</span>
                </button>
                {faqOpenIndex === 1 && (
                  <div className="pb-6 text-text-secondary font-light leading-relaxed">
                    Yes, I offer secure telehealth sessions for clients located anywhere in California. I also provide in-person therapy from my Santa Monica office.
                  </div>
                )}
              </div>
              <div className="border-b border-text-secondary">
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === 2 ? null : 2)}
                  className="w-full py-6 flex items-center gap-4 text-left hover:text-primary-dark transition-colors"
                >
                  <span className="text-3xl text-text-secondary flex-shrink-0">
                    {faqOpenIndex === 2 ? '−' : '+'}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-dark whitespace-nowrap">What is your therapeutic approach?</span>
                </button>
                {faqOpenIndex === 2 && (
                  <div className="pb-6 text-text-secondary font-light leading-relaxed">
                    I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. My approach is warm, collaborative, and grounded.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="w-full h-[800px]flex flex-col justify-center items-center  px-8 md:px-16 lg:px-24 py-24 bg-primary-light ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark text-center mb-12">
            My Professional Background
          </h2>
          <div className="mt-12">
            {backgroundItems.map((item, index) => (
              <div key={index} className="border-b border-primary-dark">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors"
                >
                  <span className="text-xl md:text-2xl font-light text-primary-dark">{item.title}</span>
                  <span className="text-2xl text-text-secondary">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-6 text-text-secondary font-light leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="w-full h-[700px] flex  justify-center px-8 md:px-16 lg:px-24 bg-primary-dark">
        <div className="flex flex-col justify-around items-center space-y-6">
          <div className="max-w-6xl mx-auto text-white flex flex-col justify-center items-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4">
              Ready to Start Therapy?
            </h2>
            <p className="text-lg md:text-xl font-light">Whether you're dealing with anxiety, trauma, or burnout, therapy can help you develop insight, resilience, and a stronger relationship with yourself.</p>
            <p className="text-lg md:text-xl font-light">Reach out to schedule a free 15-minute consultation or to ask any questions about my practice.</p>
          </div>
          <div>
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-300 font-light text-base tracking-wide">
              CONTACT DR. REYNOLDS →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

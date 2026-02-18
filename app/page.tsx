'use client';

import questionImg from '@/public/images/question.jpg';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OfficeSection from '@/components/OfficeSection';
import AnimationWrapper from '@/components/AnimationWrapper';

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
      <section className="w-full min-h-[950px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left - Content with Button */}
        <div className="relative bg-primary-light min-h-[950px] flex flex-col order-2 md:order-1">
          <div className="flex-1 px-8 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="max-w-xl">
              <AnimationWrapper direction="right">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark mb-8">
                  Therapy That Helps You Feel Grounded Again
                </h2>
              </AnimationWrapper>

              <AnimationWrapper direction="right" delay={0.2}>
                <p className="text-base md:text-lg text-text-primary font-light leading-relaxed mb-6">
                  I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
                </p>
              </AnimationWrapper>

              <AnimationWrapper direction="right" delay={0.4}>
                <p className="text-base md:text-lg text-text-primary font-light leading-relaxed">
                  I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you&apos;re experiencing.
                </p>
              </AnimationWrapper>
            </div>
          </div>

          {/* Button - Edge to edge at bottom */}
          <AnimationWrapper direction="up" delay={0.6} className="w-full">
            <button className="w-full border-t border-primary-dark text-primary-dark hover:bg-primary hover:text-white transition-all duration-300 font-light text-sm tracking-wide py-6">
              LEARN MORE →
            </button>
          </AnimationWrapper>
        </div>
        {/* Right - Image (spans both rows) */}
        <div className="relative sm:min-h-[350px] md:min-h-screen bg-primary-light row-span-2 order-1 md:order-3">
          <AnimationWrapper direction="left" duration={1.5} className="h-full w-full">
            <Image
              src="https://images.pexels.com/photos/8942907/pexels-photo-8942907.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Therapy session - finding balance and peace"
              fill
              className="object-cover"
            />
          </AnimationWrapper>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="w-full px-8 md:px-10 lg:px-24 py-24 my-10">
        <div className="max-w-full mx-5 ">
          <AnimationWrapper>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark text-center mb-16">
              Core Areas of Focus
            </h2>
          </AnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {specialties.map((specialty, index) => (
              <AnimationWrapper key={index} delay={index * 0.2} direction="up">
                <div className="bg-primary-light w-full h-[600px] border-[1px] border-solid border-primary-dark px-4  flex flex-col space-y-6 justify-around hover:shadow-lg transition-shadow duration-300">
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
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section - You don't have to do this all alone */}
      <section className="w-full min-h-[950px] grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr_auto] overflow-hidden">
        {/* Left - Image (spans both rows) */}
        <div className="relative sm:min-h-[350px] min-h-[500px] md:min-h-screen bg-accent row-span-2">
          <AnimationWrapper direction="right" duration={1.5} className="h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=1000&fit=crop"
              alt="Person looking up thoughtfully"
              fill
              className="object-cover"
            />
          </AnimationWrapper>
        </div>

        {/* Right - Content */}
        <div className="bg-accent px-8 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-center">
          <div className="max-w-xl">
            <AnimationWrapper direction="left">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8">
                If You&apos;re Experiencing...
              </h2>
            </AnimationWrapper>

            <AnimationWrapper direction="left" delay={0.2}>
              <p className="text-base md:text-xl text-white font-light mb-8">
                Many of the people I work with are high-achieving and self-aware—but internally feel:
              </p>
            </AnimationWrapper>

            <ul className="space-y-4 mb-10">
              {[
                "Constant worry or feeling on edge",
                "Physical tension or difficulty sleeping",
                "Impact of past experiences on current relationships",
                "Professional burnout or exhaustion",
                "Perfectionism and high internal pressure"
              ].map((item, i) => (
                <AnimationWrapper key={i} direction="left" delay={0.3 + i * 0.1}>
                  <li className="text-sm md:text-base lg:text-xl text-white font-light flex items-start">
                    <span className="mr-3">•</span>
                    <span>{item}</span>
                  </li>
                </AnimationWrapper>
              ))}
            </ul>

            <AnimationWrapper direction="left" delay={0.8}>
              <p className="text-sm md:text-base lg:text-xl text-white font-light leading-relaxed">
                Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
              </p>
            </AnimationWrapper>
          </div>
        </div>

        {/* Button - Edge to edge at bottom */}
        <AnimationWrapper direction="up" delay={1} className="w-full h-full">
          <button className="w-full bg-accent border-t border-white text-white hover:bg-primary-dark hover:text-white transition-all duration-300 font-light text-base tracking-wide py-6">
            WORK WITH ME →
          </button>
        </AnimationWrapper>
      </section>

      {/* Introduction Section - Hi, I'm Lilac */}
      <section className="w-full min-h-[1000px] py-20 px-8 md:px-16 lg:px-24 bg-primary-light">
        <div className="max-w-full mx-14 my-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right - Overlapping Arch Image */}
          <div className="relative h-[450px] md:h-[550px] order-1 md:order-2">
            <AnimationWrapper direction="up" duration={1.2}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[420px] md:w-[420px] md:h-[550px] lg:w-[480px] lg:h-[630px] rounded-t-full overflow-hidden shadow-lg">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa"
                  alt="Dr. Maya Reynolds, PsyD - Clinical Psychologist in Santa Monica"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>
          </div>

          {/* Left - Text Content */}
          <div className="space-y-8 order-2 md:order-1">
            <AnimationWrapper direction="right">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark">
                About Dr. Maya Reynolds
              </h2>
            </AnimationWrapper>
            <AnimationWrapper direction="right" delay={0.2}>
              <p className="text-base md:text-xl text-text-primary font-light leading-relaxed max-w-3xl">
                I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
            </AnimationWrapper>
            <AnimationWrapper direction="right" delay={0.4}>
              <p className="text-base md:text-xl text-text-primary font-light leading-relaxed max-w-3xl">
                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
              </p>
            </AnimationWrapper>
            <AnimationWrapper direction="up" delay={0.6} className="flex flex-col items-center pt-20">
              <button className="px-8 py-3 border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 font-light text-sm tracking-wide">
                LEARN MORE ABOUT MY APPROACH →
              </button>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <OfficeSection />

      {/* FAQs Section */}
      <section className="w-full min-h-[900px] py-10  md:py-20 px-4 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
            <AnimationWrapper direction="left" duration={1.2} className="w-full">
              <div className="flex justify-center sm:items-center md:justify-start">
                  <div className="relative w-full max-w-[250px] md:max-w-[450px] lg:max-w-[680px] aspect-[9/16] max-h-[950px]">
                    <div className="absolute inset-0 rounded-t-full overflow-hidden">
                      <Image
                        src={questionImg}
                        alt="Peaceful therapy environment"
                        fill
                        unoptimized={true}
                        className="object-cover"
                      />
                    </div>
                  </div>
              </div>
            </AnimationWrapper>

          {/* Right - FAQs */}
          <div className="space-y-8">
            <AnimationWrapper direction="right">
              <h2 className="text-5xl font-light text-primary-dark">FAQs</h2>
            </AnimationWrapper>
            <div className="space-y-0">
              {["Do you take insurance?", "Do you offer telehealth therapy?", "What is your therapeutic approach?"].map((q, i) => (
                <AnimationWrapper key={i} direction="right" delay={0.1 * i + 0.2}>
                  <div className="border-b border-text-secondary">
                    <button
                      onClick={() => setFaqOpenIndex(faqOpenIndex === i ? null : i)}
                      className="w-full py-6 flex items-center gap-4 text-left hover:text-primary-dark transition-colors"
                    >
                      <span className="text-3xl text-text-secondary flex-shrink-0">
                        {faqOpenIndex === i ? '−' : '+'}
                      </span>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-dark whitespace-nowrap">{q}</span>
                    </button>
                    {faqOpenIndex === i && (
                      <div className="pb-6 text-text-secondary font-light leading-relaxed">
                        {i === 0 && "Yes, I accept most major insurance plans. Please contact me to verify your specific coverage."}
                        {i === 1 && "Yes, I offer secure telehealth sessions for clients located anywhere in California. I also provide in-person therapy from my Santa Monica office."}
                        {i === 2 && "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. My approach is warm, collaborative, and grounded."}
                      </div>
                    )}
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="w-full h-[800px] flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-24 bg-primary-light ">
        <div className="max-w-4xl mx-auto w-full">
          <AnimationWrapper>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark text-center mb-12">
              My Professional Background
            </h2>
          </AnimationWrapper>
          <div className="mt-12">
            {backgroundItems.map((item, index) => (
              <AnimationWrapper key={index} direction="up" delay={index * 0.1}>
                <div className="border-b border-primary-dark">
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
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="w-full h-[700px] flex justify-center px-8 md:px-16 lg:px-24 bg-primary-dark overflow-hidden">
        <div className="flex flex-col justify-around items-center space-y-6">
          <div className="max-w-6xl mx-auto text-white flex flex-col justify-center items-center space-y-6">
            <AnimationWrapper direction="up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4">
                Ready to Start Therapy?
              </h2>
            </AnimationWrapper>
            <AnimationWrapper direction="up" delay={0.2}>
              <p className="text-lg md:text-xl font-light text-center">Whether you&apos;re dealing with anxiety, trauma, or burnout, therapy can help you develop insight, resilience, and a stronger relationship with yourself.</p>
            </AnimationWrapper>
            <AnimationWrapper direction="up" delay={0.4}>
              <p className="text-lg md:text-xl font-light text-center">Reach out to schedule a free 15-minute consultation or to ask any questions about my practice.</p>
            </AnimationWrapper>
          </div>
          <AnimationWrapper direction="up" delay={0.6}>
            <div>
              <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-300 font-light text-base tracking-wide">
                CONTACT DR. REYNOLDS →
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <Footer />
    </main>
  );
}

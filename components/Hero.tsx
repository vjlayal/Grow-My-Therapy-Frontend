import Image from 'next/image';

interface HeroProps {
  imageSrc?: string;
  heading?: string;
  subtext?: string;
}

export default function Hero({
  imageSrc = "https://images.pexels.com/photos/2276928/pexels-photo-2276928.jpeg?auto=compress&cs=tinysrgb&w=1920",
  heading = "Find Relief from\nAnxiety & Overwhelm.",
  subtext = "Therapy for adults in Santa Monica, CA who feel stuck in overthinking, stress, or the effects of past experiences."
}: HeroProps) {
  return (
    <section className="w-full min-h-[85vh] mt-[80px] flex items-center px-4 md:px-16 lg:px-24 py-12">
      <div className="max-w-50% mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-[250px] md:max-w-[450px] lg:max-w-[680px] aspect-[9/16] max-h-[1000px]">
            <div className="absolute inset-0 rounded-t-full overflow-hidden">
              <Image
                src={imageSrc}
                alt="Calming ocean waters - Santa Monica therapy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="max-w-50% flex flex-col sm:text-left md:text-left lg:text-left items-center justify-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-light text-primary-dark leading-tight text-center">
            {heading.split('\n').map((line, i) => (
              <span key={i}>
                {line}{i < heading.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-light text-center">
            {subtext}
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 font-light text-base tracking-wide">
              SCHEDULE A CONSULTATION →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

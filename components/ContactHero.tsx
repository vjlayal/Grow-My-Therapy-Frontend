import Image from 'next/image';
import AnimationWrapper from './AnimationWrapper';

export default function ContactHero() {
    return (
        <section className="w-full min-h-screen bg-accent px-4 md:px-16 lg:px-24 py-16 md:py-24 pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column */}
                <div className="flex flex-col justify-center space-y-12">
                    {/* Heading and subtext */}
                    <div className="space-y-8 text-center md:text-left">
                        <AnimationWrapper duration={1}>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-light text-white leading-tight">
                                Let&apos;s Connect
                            </h1>
                        </AnimationWrapper>
                        <div className="space-y-4 max-w-lg mx-auto md:mx-0">
                            <AnimationWrapper delay={0.2}>
                                <p className="text-white text-lg md:text-xl lg:text-2xl font-light">
                                    Starting therapy is a courageous step.
                                </p>
                            </AnimationWrapper>
                            <AnimationWrapper delay={0.4}>
                                <p className="text-white text-lg md:text-xl lg:text-2xl font-light">
                                    Reach out for questions or to schedule a free 15-minute consultation to see if we&apos;re a good fit.
                                </p>
                            </AnimationWrapper>
                        </div>
                    </div>

                    {/* Image Composition */}
                    <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full flex justify-center md:justify-start">
                        {/* Large arch-shaped image */}
                        <AnimationWrapper direction="left" duration={1.2} delay={0.6}>
                            <div className="relative w-[180px] h-[280px] md:w-[240px] md:h-[400px] lg:w-[280px] lg:h-[480px] rounded-t-full overflow-hidden shadow-2xl z-10">
                                <Image
                                    src="https://images.pexels.com/photos/5685928/pexels-photo-5685928.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000"
                                    alt="Professional therapy session - Dr. Maya Reynolds"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </AnimationWrapper>
                        {/* Small circular image overlapping */}
                        <AnimationWrapper direction="none" scale={0.8} duration={1} delay={1} className="absolute bottom-4 left-1/2 md:left-auto md:ml-40 -translate-x-1/2 md:translate-x-0 z-20">
                            <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-8 border-accent shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/5685961/pexels-photo-5685961.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
                                    alt="Therapist working - professional setting"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </AnimationWrapper>
                    </div>
                </div>

                {/* Right Column - Dark blue info box */}
                <div className="flex items-center justify-center lg:justify-end">
                    <AnimationWrapper direction="right" duration={1} delay={0.5}>
                        <div className="bg-primary-dark p-8 md:p-12 lg:p-16 w-full max-w-2xl lg:min-h-[400px] flex items-center shadow-2xl">
                            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white italic">
                                <span className="font-normal not-italic text-sm tracking-widest uppercase block mb-6 opacity-60">Please Note:</span>
                                I prioritize your privacy. For secure communication, please use my HIPAA-compliant client portal for scheduling and clinical questions. I look forward to hearing from you.
                            </p>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </section>
    );
}

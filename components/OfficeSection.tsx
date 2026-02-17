import Image from 'next/image';
import Link from 'next/link';
import AnimationWrapper from './AnimationWrapper';

export default function OfficeSection() {
    return (
        <section className="w-full min-h-[800px] py-20 px-8 md:px-16 lg:px-24 bg-[#FBF6F1]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Heading */}
                <div className="text-center mb-16 space-y-4">
                    <AnimationWrapper>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#212842]">
                            A Calm Space for Healing
                        </h2>
                    </AnimationWrapper>
                    <AnimationWrapper delay={0.2}>
                        <p className="text-lg md:text-xl text-[#2D3748] font-light max-w-2xl mx-auto">
                            Your environment plays a vital role in your healing journey. My Santa Monica office is designed to be a quiet, private sanctuary where you can feel grounded and at ease.
                        </p>
                    </AnimationWrapper>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Images Column */}
                    <div className="relative h-[600px] flex items-center justify-center">
                        {/* Large arch-shaped image */}
                        <AnimationWrapper direction="left" duration={1.2}>
                            <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] rounded-t-full overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src="https://drive.google.com/uc?export=view&id=1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW"
                                    alt="Dr. Maya Reynolds Therapy Office - Calm Space"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </AnimationWrapper>
                        {/* Small circular image overlapping */}
                        <AnimationWrapper direction="none" scale={0.8} duration={1} delay={0.5} className="absolute -bottom-10 -right-4 md:right-10 z-20">
                            <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border-8 border-[#FBF6F1] transition-transform duration-500 hover:scale-110">
                                <Image
                                    src="https://drive.google.com/uc?export=view&id=1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy"
                                    alt="Office Detail - Natural Light and Calm"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </AnimationWrapper>
                    </div>

                    {/* Text Column */}
                    <div className="space-y-10 lg:pl-12 text-center lg:text-left">
                        <div className="space-y-6">
                            <AnimationWrapper direction="right">
                                <h3 className="text-3xl md:text-4xl font-light text-[#212842]">
                                    Designed for Comfort & Safety
                                </h3>
                            </AnimationWrapper>
                            <AnimationWrapper direction="right" delay={0.2}>
                                <div className="space-y-4 text-[#2D3748] font-light text-lg leading-relaxed">
                                    <p>
                                        My practice features a comfortable, uncluttered environment with soft natural light. Many clients find that the space itself helps them settle into the work of therapy more easily.
                                    </p>
                                    <p>
                                        Located in the heart of Santa Monica, the office is a dedicated space for reflection, depth, and stabilization. Whether you visit in person or connect via telehealth, my goal is to provide a setting that feels safe and respectful.
                                    </p>
                                </div>
                            </AnimationWrapper>
                        </div>

                        {/* Location Details */}
                        <AnimationWrapper direction="right" delay={0.4}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#212842]/10 text-center md:text-left">
                                <div>
                                    <h4 className="text-sm font-semibold text-[#212842] uppercase tracking-wider mb-3">Location</h4>
                                    <p className="text-[#2D3748] font-light">
                                        123th Street 45 W<br />
                                        Santa Monica, CA 90401
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-[#212842] uppercase tracking-wider mb-3">Availability</h4>
                                    <p className="text-[#2D3748] font-light">
                                        In-person & Hybrid Sessions<br />
                                        Secure Telehealth for CA Residents
                                    </p>
                                </div>
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper direction="up" delay={0.6} className="pt-8 flex justify-center lg:justify-start">
                            <Link
                                href="/contact#office"
                                className="px-10 py-4 border border-[#212842] text-[#212842] hover:bg-[#212842] hover:text-white transition-all duration-300 font-light text-sm tracking-widest uppercase inline-block"
                            >
                                Explore the Space →
                            </Link>
                        </AnimationWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}

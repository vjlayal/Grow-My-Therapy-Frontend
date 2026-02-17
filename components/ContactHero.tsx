import Image from 'next/image';

export default function ContactHero() {
    return (
        <section className="w-full min-h-[1200px] bg-accent px-8 md:px-16 lg:px-24 py-16 md:py-20 pt-24 md:pt-32">
            <div className="max-w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div className="flex flex-col justify-between">
                    {/* Heading and subtext */}
                    <div className="space-y-6 px-12 pt-24">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                            Let's Connect
                        </h1>
                        <div className="space-y-3 pt-20">
                            <p className="text-white text-lg md:text-xl font-light">
                                Starting therapy is a courageous step.
                            </p>
                            <p className="text-white  text-lg md:text-xl font-light">
                                Reach out for questions or to schedule a free 15-minute consultation to see if we're a good fit.
                            </p>
                        </div>
                    </div>


                    {/* Flower vases images - centered below text */}
                    <div className="max-w-full relative h-[400px] md:h-[450px] flex  justify-start items-center mt-16 mr-56 ">
                        {/* Large arch-shaped image - background */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-[200px] h-[320px] md:w-[240px] md:h-[400px] rounded-t-full overflow-hidden">
                            <Image
                                src="https://images.pexels.com/photos/5685928/pexels-photo-5685928.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000"
                                alt="Professional therapy session - Dr. Maya Reynolds"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Small circular image - overlapping bottom right */}
                        <div className="absolute bottom-0 left-1/2 translate-x-[40px] md:translate-x-[50px] w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden">
                            <Image
                                src="https://images.pexels.com/photos/5685961/pexels-photo-5685961.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
                                alt="Therapist working - professional setting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Dark green info box */}
                <div className="flex items-start md:items-center lg:justify-start justify-center">
                    <div className="bg-primary-dark p-6 md:p-8 lg:p-10 max-w-full w-[725px] h-[325px]">
                        <p className="text-md md:text-xl font-light leading-normal text-white">
                            <span className="font-normal text-white">PLEASE NOTE:</span> If you opt to use a &quot;Form Block&quot; on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

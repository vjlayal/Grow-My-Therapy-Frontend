'use client';

export default function OfficeLocation() {
    return (
        <section id="office" className="w-full bg-primary-dark min-h-[750px] px-8 md:px-16 lg:px-24 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Office Info */}
                <div className="text-white space-y-8 md:space-y-12 flex flex-col justify-start text-center md:text-left">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
                            My Santa Monica Office
                        </h2>
                        <div className="space-y-2 text-lg md:text-xl font-light text-primary-light/80">
                            <p>123th Street 45 W</p>
                            <p>Santa Monica, CA 90401</p>
                        </div>
                        <p className="text-lg md:text-xl font-light mt-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-primary-light">
                            Office Hours
                        </h3>
                        <div className="space-y-1 text-lg font-light text-primary-light/80">
                            <p>Monday – Friday</p>
                            <p>10am – 6pm</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Interactive Map */}
                <div className="w-full flex items-center justify-center">
                    <div className="w-full aspect-square md:aspect-video overflow-hidden shadow-2xl border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.99424444411!2d-118.52573949999999!3d34.0194543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Santa Monica Office Location"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

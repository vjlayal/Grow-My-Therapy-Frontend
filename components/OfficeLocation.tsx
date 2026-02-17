'use client';

export default function OfficeLocation() {
    return (
        <section id="office" className="w-full bg-primary-dark h-[750px] px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="max-w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Left Column - Office Info */}
                <div className="text-white space-y-8 md:space-y-12 flex flex-col justify-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8">
                            My Santa Monica Office
                        </h2>
                        <div className="space-y-1">
                            <p className="text-base md:text-lg font-light">123th Street 45 W</p>
                            <p className="text-base md:text-lg font-light">Santa Monica, CA 90401</p>
                        </div>
                        <p className="text-base md:text-lg font-light mt-6 max-w-md">
                            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
                            Hours
                        </h3>
                        <div className="space-y-1">
                            <p className="text-base md:text-lg font-light">Monday – Friday</p>
                            <p className="text-base md:text-lg font-light">10am – 6pm</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Interactive Map */}
                <div className="flex items-center justify-center mt-16">
                    <div className="w-full aspect-video overflow-hidden">
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

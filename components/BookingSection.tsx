'use client';

export default function BookingSection() {
    return (
        <section className="w-full h-[1125px] bg-primary-light px-8 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-dark mb-6 md:mb-8">
                    Schedule an Appointment
                </h2>

                {/* Description Text */}
                <p className="text-base md:text-xl text-text-primary font-light leading-loose mb-12 md:mb-16 max-w-4xl text-left">
                    I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients throughout California. Use the scheduler below or contact me directly to find a time that works for you.
                </p>

                {/* Scheduling Widget Placeholder */}
                <div className="bg-white p-8 md:p-12 my-48 max-w-md mx-auto">
                    <div className="text-center space-y-6">
                        <h3 className="text-xl md:text-2xl font-normal text-primary-dark">
                            This page is not active
                        </h3>
                        <p className="text-sm md:text-base text-text-secondary">
                            If you are the owner, please log into your account to start a free trial or subscribe
                        </p>
                        <button className="bg-primary-dark text-white px-6 py-3 text-xs md:text-sm font-medium hover:bg-accent transition-colors">
                            GO TO ACCOUNT
                        </button>
                    </div>
                </div>

                {/* Powered by text */}
                <div className="mt-8 md:mt-12 text-center">
                    <p className="text-xs md:text-sm text-gray-600">
                        Powered by <span className="font-medium">acuity scheduling</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

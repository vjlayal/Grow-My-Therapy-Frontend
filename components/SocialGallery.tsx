import Image from 'next/image';

export default function SocialGallery() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
            alt: "Lilac flowers bouquet"
        },
        {
            src: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop",
            alt: "Person reading by bookshelf"
        },
        {
            src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
            alt: "Coffee and journal flatlay"
        },
        {
            src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
            alt: "Lilac flowers in hand"
        }
    ];

    return (
        <section className="w-full bg-white h-[750px] px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="max-w-full mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-primary-dark pb-8 pt-20">
                    Find me on social.
                </h2>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-square overflow-hidden"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

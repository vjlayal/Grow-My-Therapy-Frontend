'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function BlogPage() {
    const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

    const blogPosts = [
        {
            id: 1,
            date: "January 2, 2026",
            title: "The Transformative Power of Self-Awareness",
            image: "https://images.pexels.com/photos/652348/pexels-photo-652348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
            preview: "Exploring the journey of self-discovery and personal growth through mindful practices and intentional living.",
            content: "In this post, we dive deep into the transformative power of self-awareness and how small daily practices can lead to profound changes in our lives. We explore techniques for mindfulness, journaling, and reflection that help us understand ourselves better and create meaningful change."
        },
        {
            id: 2,
            date: "January 17, 2026",
            title: "Prioritizing Mental Wellness in a Fast-Paced World",
            image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
            preview: "Understanding the importance of mental health and creating space for healing in our busy lives.",
            content: "Mental health is just as important as physical health, yet we often neglect it in our fast-paced world. This post discusses practical strategies for prioritizing mental wellness, setting boundaries, and creating sustainable self-care routines that actually work."
        },
        {
            id: 3,
            date: "February 5, 2026",
            title: "Finding Stability During Life's Uncertain Moments",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
            preview: "Finding balance and peace in the midst of life's challenges and uncertainties.",
            content: "Life is full of unexpected challenges and transitions. This post explores how we can find stability and peace even when everything around us feels uncertain. We discuss coping strategies, resilience-building techniques, and the power of community support."
        },
        {
            id: 4,
            date: "February 12, 2026",
            title: "Building Deeper Connections That Support Growth",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
            preview: "Building meaningful connections and nurturing relationships that support our growth.",
            content: "Healthy relationships are fundamental to our wellbeing. In this post, we examine what makes relationships thrive, how to communicate effectively, and ways to build deeper connections with the people who matter most in our lives."
        }
    ];

    const openModal = (index: number) => {
        setSelectedBlog(index);
    };

    const closeModal = () => {
        setSelectedBlog(null);
    };

    const nextBlog = () => {
        if (selectedBlog !== null) {
            setSelectedBlog((selectedBlog + 1) % blogPosts.length);
        }
    };

    const prevBlog = () => {
        if (selectedBlog !== null) {
            setSelectedBlog((selectedBlog - 1 + blogPosts.length) % blogPosts.length);
        }
    };

    return (
        <main className="min-h-screen bg-[#FBF6F1]">
            <Header />

            <Hero
                imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=600&fit=crop"
                heading="Insights & Resources for Mental Wellness"
                subtext="Explore articles on anxiety, trauma recovery, burnout prevention, and building resilience in daily life."
            />

            {/* Blog Posts Grid Section */}
            <section className="w-full  py-16 px-8 md:px-16 lg:px-24 bg-[#E5E0DA]">
                <div className="max-w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                        {blogPosts.map((post, index) => (
                            <article key={post.id} className="group cursor-pointer" onClick={() => openModal(index)}>
                                <div className="relative aspect-[5/4] w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <p className="text-xs md:text-sm text-slate-600 font-light mb-2">{post.date}</p>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-4">
                                        {post.title}
                                    </h3>
                                    <button className="text-sm text-slate-800 font-light underline hover:no-underline">
                                        Read More
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Carousel */}
            {selectedBlog !== null && (
                <div className="fixed inset-0 bg-[#E5E0DA] z-50 flex flex-col" onClick={(e) => e.stopPropagation()}>
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-slate-700 hover:text-slate-900 text-2xl font-light z-10"
                    >
                        ×
                    </button>

                    {/* Content Container */}
                    <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16 md:py-20">
                        {/* Part Indicator */}
                        <p className="text-xs md:text-sm text-slate-700 font-light mb-8 tracking-wider uppercase">
                            Part {selectedBlog + 1}
                        </p>

                        {/* Blog Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#2D4A2B] text-center mb-8 md:mb-12 max-w-3xl">
                            {blogPosts[selectedBlog].title}
                        </h2>

                        {/* Blog Content */}
                        <div className="max-w-2xl text-center space-y-6">
                            <p className="text-sm md:text-base lg:text-lg text-slate-700 font-light leading-relaxed">
                                {blogPosts[selectedBlog].content}
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center px-8 md:px-16 lg:px-24 pb-12">
                        <button
                            onClick={prevBlog}
                            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-light text-lg md:text-xl lg:text-2xl"
                        >
                            <span>‹</span>
                            <span>{blogPosts[(selectedBlog - 1 + blogPosts.length) % blogPosts.length].title}</span>
                        </button>
                        <button
                            onClick={nextBlog}
                            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-light text-lg md:text-xl lg:text-2xl"
                        >
                            <span>{blogPosts[(selectedBlog + 1) % blogPosts.length].title}</span>
                            <span>›</span>
                        </button>
                    </div>
                </div>
            )}


            {/* Subscribe Section */}
            <section className="w-full h-[700px] py-20 px-8 md:px-16 lg:px-24 bg-[#212842] flex items-center justify-center">
                <div className="max-w-7xl w-full border-2 border-white px-12 md:px-16 lg:px-20 py-16 md:py-20 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                        Subscribe
                    </h2>
                    <p className="text-base md:text-lg font-light text-white mb-8 max-w-2xl">
                        Sign up with your email address to receive news and updates.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mb-6">
                        <input
                            className="flex-1 px-6 py-4 text-slate-700 font-light text-base placeholder:text-slate-400"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <button
                            className="px-8 py-4 border-2 text-white font-light text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                            type="submit"
                        >
                            SIGN UP
                        </button>
                    </form>
                    <p className="text-sm font-light text-white">
                        We respect your privacy.
                    </p>
                </div>
            </section>

            <Footer />
        </main >
    );
}

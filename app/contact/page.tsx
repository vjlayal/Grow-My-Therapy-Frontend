'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import BookingSection from '@/components/BookingSection';
import OfficeLocation from '@/components/OfficeLocation';
import SocialIcons from '@/components/SocialIcons';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FBF6F1]">
            <Header />
            <ContactHero />
            <BookingSection />
            <OfficeLocation />
            <SocialIcons />
            <Footer />
        </main>
    );
}
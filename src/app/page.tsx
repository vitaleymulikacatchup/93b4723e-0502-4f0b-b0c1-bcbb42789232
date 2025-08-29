"use client";
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <>
      <BillboardHero
        title="Welcome to NebulaLens Photography"
        subtitle="Capture your moments in a futuristic way"
      />
      <SplitAbout
        heading="About Us"
        body="We specialize in high-contrast, neon photography that embodies innovation and art. Our futuristic approach ensures that every image tells a story."
      />
      <ProcessRoadmap
        items={[
          { id: '1', title: 'Inquiry', description: 'Contact us for your photography needs.', image: '/images/placeholder1.avif', items: [], reverse: false },
          { id: '2', title: 'Booking', description: 'Choose your preferred session and schedule.', image: '/images/placeholder2.avif', items: [], reverse: true },
          { id: '3', title: 'Session', description: 'Experience a bespoke photography session.', image: '/images/placeholder3.avif', items: [], reverse: false }
        ]}
        className="mb-10"
      />
      <NumberGridTokenomics
        title="Our Key Numbers"
        description="Explore our impactful metrics and showcases."
        kpiItems={[
          { value: '500+', description: 'Sessions Held' },
          { value: '200+', description: 'Happy Clients' },
          { value: '98%', description: 'Satisfaction Rate' }
        ]}
      />
      <CentralFAQ
        items={[
          { title: 'How to book a session?', content: 'Visit our booking page and select the session type you prefer.' },
          { title: 'What kind of photography do you specialize in?', content: 'We specialize in futuristic, high-contrast photography with neon elements.' },
          { title: 'Do you provide editing services?', content: 'Yes, every session includes professional editing to ensure top quality.' }
        ]}
      />
    </>
  );
}
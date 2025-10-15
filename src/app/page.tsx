"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = {
  heroImage: "https://images.pexels.com/photos/34234300/pexels-photo-34234300.png?auto=compress&cs=tinysrgb&h=650&w=940",
  aboutImage: "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940",
  featureImage: "https://images.pexels.com/photos/11035537/pexels-photo-11035537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  contactImage: "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
};

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Features', id: 'feature' },
  { name: 'Contact', id: 'contact' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="YourAIStartup" navItems={navItems} />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to YourAIStartup"
            description="Transform Your Business with Our AI Solutions"
            imageSrc={assetMap.heroImage}
            className="bg-blue-50 text-gray-900"
            buttons={[
              { text: "Get Started", href: "#feature" },
              { text: "Learn More", href: "#about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Innovative AI Solutions to Enhance Efficiency"
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Advanced Analytics", description: "Gain insights with our detailed analytics.", imageSrc: assetMap.featureImage },
              { title: "Seamless Integration", description: "Integrate smoothly with your existing systems.", imageSrc: assetMap.featureImage },
              { title: "24/7 Support", description: "Get round-the-clock support from our team.", imageSrc: assetMap.featureImage }
            ]}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Informed with Our Newsletter"
            description="Subscribe for updates and exclusive content."
            imageSrc={assetMap.contactImage}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Careers", href: "#careers" }] },
              { title: "Resources", items: [{ label: "Blog", href: "#blog" }, { label: "Help Center", href: "#help" }] }
            ]}
            className="bg-blue-50 text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

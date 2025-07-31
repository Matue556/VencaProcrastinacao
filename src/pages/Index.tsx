
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import TransformationStory from '@/components/TransformationStory';
import ObjectionsSection from '@/components/ObjectionsSection';
import OfferCard from '@/components/ContactInfo';
import Features from '@/components/Features';
import Testimonials from '@/components/Projects';
import WhyQuebrando from '@/components/WhyWrlds';
import SEO from '@/components/SEO';


const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Quebrando Correntes - Vença a Procrastinação" 
        description="Descubra como quebrar os ciclos de autossabotagem e criar uma rotina de ação, foco e disciplina com o eBook 'Quebrando Correntes'."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['procrastinação', 'produtividade', 'foco', 'disciplina', 'mindset', 'transformação pessoal', 'ebook']}
      />
      <Hero />
      <TransformationStory />
      <ObjectionsSection />
      <OfferCard />
      <Features />
      <WhyQuebrando />
      <Testimonials />
      
    </PageLayout>
  );
};

export default Index;

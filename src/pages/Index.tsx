
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import ThreePillarsSection from '@/components/ThreePillarsSection';
import TransformationStory from '@/components/TransformationStory';
import ObjectionsSection from '@/components/ObjectionsSection';
import OfferCard from '@/components/ContactInfo';
import MethodApplicationSection from '@/components/MethodApplicationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TransformativeBenefitsSection from '@/components/TransformativeBenefitsSection';
import DiagnosisSection from '@/components/DiagnosisSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
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
      <ThreePillarsSection />
      <TransformationStory />
      <ObjectionsSection />
      <OfferCard />
      <MethodApplicationSection />
      <TestimonialsSection />
      <TransformativeBenefitsSection />
      <DiagnosisSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      
    </PageLayout>
  );
};

export default Index;

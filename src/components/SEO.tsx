import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Quebrando Correntes',
  description = 'Guia prático e motivador para vencer a procrastinação, desenvolver foco e construir uma rotina produtiva.',
  type = 'website',
  name = 'Quebrando correntes',
  imageUrl = 'public/Capa ebook1.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['produtividade', 'vencer a procrastinação', 'foco', 'rotina produtiva', 'desenvolvimento pessoal', 'disciplina', 'gestão do tempo'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://vencaprocrastinacao.netlify.app/${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://vencaprocrastinacao.netlify.app/${imageUrl}`;

  // Enhanced keywords for specific posts
  const enhancedKeywords = [
  'produtividade',
  'foco',
  'disciplina',
  'vencer a procrastinação',
  'rotina produtiva',
  'gestão do tempo',
  'autoajuda prática',
  'mudança de hábitos',
  'motivação diária',
  'desenvolvimento pessoal'
];

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WRLDS Technologies',
    url: 'https://wrlds.com',
    logo: 'https://wrlds.com/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png',
    description: 'Pioneering smart engineering solutions with textile sensors',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@wrlds.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/wrlds-technologies',
      'https://twitter.com/wrldstechnologies'
    ]
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'Quebrando Correntes',
      url: 'https://vencaprocrastinacao.netlify.app/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Quebrando Correntes',
      logo: {
        '@type': 'ImageObject',
        url: 'public/Capa ebook1.png',
        width: 512,
        height: 512
      },
      url: 'https://vencaprocrastinacao.netlify.app/'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for Smart PPE post
  

  // Combine keywords with any additional category terms
  const keywordString = enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://vencaprocrastinacao.netlify.app/" />}
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
    </Helmet>
  );
};

export default SEO;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { RovelaSymbolSvg } from '../components/RovelaLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 Page Not Found | ROVELA"
        description="The page you requested could not be found on the ROVELA website."
      />

      <section
        className="section section--teal"
        style={{
          minHeight: 'calc(100vh - var(--header-height))',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
        aria-labelledby="not-found-heading"
      >
        <div className="hero__watermark" aria-hidden="true">
          <RovelaSymbolSvg primaryColor="#F6F3EA" diamondColor="#C7A56A" />
        </div>

        <div
          className="container"
          style={{ position: 'relative', zIndex: 2, maxWidth: '720px' }}
        >
          <span className="eyebrow eyebrow--gold">Error 404</span>
          <h1
            id="not-found-heading"
            className="display-title"
            style={{ color: 'var(--rovela-ivory)', marginBottom: '1.25rem' }}
          >
            This path could not be found.
          </h1>
          <p
            className="lead-paragraph"
            style={{
              color: 'rgba(246, 243, 234, 0.85)',
              marginBottom: '2.25rem'
            }}
          >
            The page you are looking for may have been moved or the URL may be
            incorrect. Use the navigation links below to continue exploring
            ROVELA’s capabilities and approach.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/" className="btn btn--gold">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn--outline-ivory">
              <Compass size={16} aria-hidden="true" />
              <span>Explore Our Services</span>
            </Link>
            <Link to="/contact" className="btn btn--outline-ivory">
              <span>Contact ROVELA</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

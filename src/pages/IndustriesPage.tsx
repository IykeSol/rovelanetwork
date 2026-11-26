import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Landmark,
  Building2,
  ShoppingBag,
  BookOpenCheck,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { INDUSTRIES_DATA, IndustrySector } from '../data/siteData';

const INDUSTRY_ICONS: Record<IndustrySector['iconName'], React.ReactNode> = {
  Terminal: <Terminal size={22} aria-hidden="true" />,
  Landmark: <Landmark size={22} aria-hidden="true" />,
  Building2: <Building2 size={22} aria-hidden="true" />,
  ShoppingBag: <ShoppingBag size={22} aria-hidden="true" />,
  BookOpenCheck: <BookOpenCheck size={22} aria-hidden="true" />,
  Sparkles: <Sparkles size={22} aria-hidden="true" />
};

export const IndustriesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Industries & Opportunities | Sector Applications for Technology & Strategy | ROVELA"
        description="Explore how ROVELA's technology, data analytics, AI automation, Web3, and strategic consulting capabilities support Technology, Fintech, Professional Services, Digital Commerce, Education, and Emerging Technologies."
        canonicalPath="/industries"
      />

      {/* Page Hero with Real Photographic Hero Image */}
      <section className="page-hero" aria-labelledby="industries-hero-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="/images/hero-main.webp"
            alt=""
            className="page-hero__bg-img"
            width={1600}
            height={900}
          />
          <div className="page-hero__bg-overlay" />
        </div>

        <div className="container page-hero__grid">
          <div className="page-hero__inner">
            <span className="eyebrow eyebrow--gold">
              Industries &amp; Opportunities
            </span>
            <h1
              id="industries-hero-heading"
              className="display-title page-hero__title"
            >
              Capabilities adaptable to dynamic sectors.
            </h1>
            <p className="page-hero__lead">
              Across industries, organizations face a common imperative: harness
              modern technology, extract clarity from data, and execute with
              agility. ROVELA’s capabilities are structured to support key sectors
              where digital transformation creates measurable value.
            </p>
          </div>

          <div className="page-hero__media-card">
            <img
              src="/images/hero-main.webp"
              alt="Modern corporate headquarters representing cross-sector technology and business innovation"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Sector Deep-Dive List */}
      <section
        className="section section--ivory"
        aria-labelledby="sectors-catalog-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                Sector Focus Areas
              </span>
              <h2 id="sectors-catalog-heading" className="h1-title">
                Six core sectors where ROVELA creates opportunity.
              </h2>
            </div>
            <p>
              Each sector presents distinct operational, analytical, and
              commercial challenges. Below is how our capabilities can be
              applied to support organizations in these domains.
            </p>
          </div>

          <div className="service-detail-list">
            {INDUSTRIES_DATA.map((sector) => (
              <article
                key={sector.id}
                id={sector.id}
                className="service-detail-card"
                aria-labelledby={`sector-heading-${sector.id}`}
              >
                <div className="service-detail-card__header">
                  <div>
                    <span
                      className="capability-card__index"
                      style={{ display: 'inline-block', marginBottom: '0.65rem' }}
                    >
                      SECTOR {sector.index}
                    </span>
                    <h3
                      id={`sector-heading-${sector.id}`}
                      className="h1-title"
                    >
                      {sector.title}
                    </h3>
                  </div>
                  <div
                    className="capability-card__icon-box"
                    style={{ width: '52px', height: '52px' }}
                  >
                    {INDUSTRY_ICONS[sector.iconName]}
                  </div>
                </div>

                <p
                  className="lead-paragraph"
                  style={{ marginBottom: '1.75rem', maxWidth: '80ch' }}
                >
                  {sector.summary}
                </p>

                <div className="service-detail-card__body">
                  {/* Opportunity Focus & Relevant Capabilities */}
                  <div className="service-detail-card__subpanel service-detail-card__subpanel--ivory">
                    <h4 className="h3-title" style={{ marginBottom: '0.65rem' }}>
                      Strategic Opportunity Focus
                    </h4>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        marginBottom: '1.35rem',
                        color: 'var(--rovela-charcoal)'
                      }}
                    >
                      {sector.opportunityFocus}
                    </p>

                    <h5
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--rovela-teal)',
                        marginBottom: '0.65rem'
                      }}
                    >
                      Aligned ROVELA Capabilities
                    </h5>
                    <div className="industry-card__tags">
                      {sector.relevantCapabilities.map((cap) => (
                        <span key={cap} className="industry-tag">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Practical Applications in Sector */}
                  <div className="service-detail-card__subpanel service-detail-card__subpanel--sage">
                    <h4 className="h3-title" style={{ marginBottom: '1rem' }}>
                      Potential Value Applications
                    </h4>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}
                    >
                      {sector.useCases.map((uc) => (
                        <li
                          key={uc}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.9375rem'
                          }}
                        >
                          <CheckCircle2
                            size={17}
                            style={{
                              color: 'var(--rovela-teal)',
                              marginTop: '0.2rem',
                              flexShrink: 0
                            }}
                            aria-hidden="true"
                          />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-detail-card__footer">
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--rovela-charcoal-muted)'
                    }}
                  >
                    Exploring an opportunity in <strong>{sector.title}</strong>?
                  </span>
                  <Link
                    to={`/contact?subject=${encodeURIComponent(
                      `Sector Enquiry: ${sector.title}`
                    )}`}
                    className="btn btn--primary btn--sm"
                  >
                    <span>Discuss This Sector</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry CTA */}
      <section
        className="section section--sage"
        aria-labelledby="industries-cta-heading"
      >
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow eyebrow--gold">
                Cross-Sector Collaboration
              </span>
              <h2
                id="industries-cta-heading"
                className="h1-title"
                style={{ color: 'var(--rovela-ivory)', marginBottom: '0.85rem' }}
              >
                Operating outside these sectors?
              </h2>
              <p style={{ color: 'rgba(246, 243, 234, 0.86)', maxWidth: '60ch' }}>
                Software architecture, data intelligence, workflow automation,
                and strategic consulting apply across virtually every modern
                industry. Connect with us to evaluate your specific use case.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn--gold">
                <span>Get in Touch</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn--outline-ivory">
                <span>All Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

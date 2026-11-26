import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sliders,
  Users,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { APPROACH_STEPS } from '../data/siteData';

export const ApproachPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Our Approach | Discover, Strategise, Collaborate, Execute, Evolve | ROVELA"
        description="Learn how ROVELA approaches business opportunities and technology initiatives through our client-focused five-stage methodology: Discover, Strategise, Collaborate, Execute, and Evolve."
        canonicalPath="/approach"
      />

      {/* Page Hero with Real Photographic Hero Image */}
      <section className="page-hero" aria-labelledby="approach-hero-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="/images/hero-approach.webp"
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
              Delivery Methodology &amp; Process
            </span>
            <h1
              id="approach-hero-heading"
              className="display-title page-hero__title"
            >
              Structured thinking. Collaborative execution.
            </h1>
            <p className="page-hero__lead">
              ROVELA approaches every business opportunity and technical project
              through a clear, client-focused five-stage progression, ensuring
              that strategy, engineering, and measurable value remain aligned at
              every step.
            </p>
          </div>

          <div className="page-hero__media-card">
            <img
              src="/images/hero-approach.webp"
              alt="High-tech engineering pavilion with cantilevered deep teal steel arches and golden light pathways"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Visual Process Overview Strip */}
      <section
        className="section section--ivory"
        aria-labelledby="process-stages-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                The Five-Stage Progression
              </span>
              <h2 id="process-stages-heading" className="h1-title">
                From initial discovery to continuous evolution.
              </h2>
            </div>
            <p>
              We do not jump into code or prescribe off-the-shelf templates
              before understanding the underlying business objective. Each phase
              builds verifiable clarity for the next.
            </p>
          </div>

          {/* 5-Stage Detailed Visual Cards */}
          <div className="approach-detail-list">
            {APPROACH_STEPS.map((step) => (
              <article
                key={step.number}
                className="approach-detail-card"
                aria-labelledby={`step-title-${step.number}`}
              >
                <div>
                  <div className="approach-detail-card__number">
                    {step.number}
                  </div>
                  <h3
                    id={`step-title-${step.number}`}
                    className="h1-title"
                    style={{ fontSize: '1.65rem', marginBottom: '0.35rem' }}
                  >
                    {step.phase}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.825rem',
                      color: 'var(--rovela-gold-accessible-dark)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {step.subtitle}
                  </p>
                </div>

                <div>
                  <p style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>
                    {step.description}
                  </p>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.78125rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--rovela-teal)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    Key Stage Activities
                  </h4>
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem'
                    }}
                  >
                    {step.keyActivities.map((activity) => (
                      <li
                        key={activity}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.925rem'
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
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="approach-detail-card__outcome-box">
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.725rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--rovela-teal)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Client Outcome · Stage {step.number}
                  </span>
                  <p style={{ fontSize: '0.925rem', fontWeight: 500 }}>
                    {step.clientOutcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Principles */}
      <section
        className="section section--teal"
        aria-labelledby="principles-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--gold">
                Engagement Standards
              </span>
              <h2 id="principles-heading" className="h1-title">
                Principles that govern how we work with clients.
              </h2>
            </div>
            <p style={{ color: 'rgba(246, 243, 234, 0.85)' }}>
              A clear methodology is only as effective as the discipline behind
              it. Every ROVELA engagement is anchored by four operational
              commitments.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            <div className="why-pillar-row">
              <span className="why-pillar-row__num">
                <Sliders size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="why-pillar-row__title">
                  Scope &amp; Objective Clarity
                </h3>
                <p className="why-pillar-row__desc">
                  We define realistic deliverables, architectural boundaries, and
                  success criteria upfront so expectations remain aligned.
                </p>
              </div>
            </div>

            <div className="why-pillar-row">
              <span className="why-pillar-row__num">
                <Users size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="why-pillar-row__title">
                  Right-Sized Capability
                </h3>
                <p className="why-pillar-row__desc">
                  We bring together the specific technical and strategic
                  specialists required for your challenge without unnecessary
                  overhead.
                </p>
              </div>
            </div>

            <div className="why-pillar-row">
              <span className="why-pillar-row__num">
                <ShieldCheck size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="why-pillar-row__title">
                  Quality &amp; Maintainability
                </h3>
                <p className="why-pillar-row__desc">
                  Solutions are engineered with clean architecture, clear
                  documentation, and long-term maintainability in mind.
                </p>
              </div>
            </div>

            <div className="why-pillar-row">
              <span className="why-pillar-row__num">
                <Sparkles size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="why-pillar-row__title">
                  Knowledge Transfer
                </h3>
                <p className="why-pillar-row__desc">
                  We empower your team to understand, operate, and build upon
                  the solutions we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="section section--ivory"
        aria-labelledby="approach-cta-heading"
      >
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow eyebrow--gold">Start With Discovery</span>
              <h2
                id="approach-cta-heading"
                className="h1-title"
                style={{ color: 'var(--rovela-ivory)', marginBottom: '0.85rem' }}
              >
                Begin with a focused discovery conversation.
              </h2>
              <p style={{ color: 'rgba(246, 243, 234, 0.86)', maxWidth: '60ch' }}>
                Share your objectives or operational challenge with us. We will
                help you assess the opportunity and outline a practical path
                forward.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn--gold">
                <span>Schedule a Conversation</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn--outline-ivory">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

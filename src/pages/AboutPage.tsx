import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { RovelaSymbolSvg } from '../components/RovelaLogo';
import { BRAND_PILLARS } from '../data/siteData';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About ROVELA | Brand Philosophy, Vision & Collaborative Intelligence"
        description="Learn what ROVELA stands for: Relationships Evolving into Lasting Value. Discover our brand philosophy, vision, mission, collaborative model, and long-term direction."
        canonicalPath="/about"
      />

      {/* Page Hero with Real Photographic Hero Image */}
      <section className="page-hero" aria-labelledby="about-hero-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="/images/hero-about.webp"
            alt=""
            className="page-hero__bg-img"
            width={1600}
            height={900}
          />
          <div className="page-hero__bg-overlay" />
        </div>

        <div className="container page-hero__grid">
          <div className="page-hero__inner">
            <span className="eyebrow eyebrow--gold">About ROVELA</span>
            <h1 id="about-hero-heading" className="display-title page-hero__title">
              Relationships evolving into lasting value.
            </h1>
            <p className="page-hero__lead">
              ROVELA is built around a foundational conviction: strong
              professional relationships create opportunities, opportunities
              create value, and value supports sustainable growth.
            </p>
          </div>

          <div className="page-hero__media-card">
            <img
              src="/images/hero-about.webp"
              alt="Executive strategy lounge and glass skybridge overlooking a contemporary skyline"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* 1. Brand Identity & Philosophy + RO-VE-LA Construction */}
      <section
        className="section section--ivory"
        aria-labelledby="philosophy-heading"
      >
        <div className="container">
          <div className="brand-intro-grid">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                01 / Brand Identity &amp; Philosophy
              </span>
              <h2
                id="philosophy-heading"
                className="h1-title"
                style={{ marginBottom: '1.35rem' }}
              >
                A collaborative force for technology and business advancement.
              </h2>

              <p className="lead-paragraph" style={{ marginBottom: '1.25rem' }}>
                In modern technology and commerce, the most meaningful breakthroughs
                happen when specialized capabilities are connected with clear
                purpose.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                ROVELA represents the deliberate synthesis of{' '}
                <strong>Relationships</strong>, <strong>Value</strong>, and{' '}
                <strong>Leadership &amp; Advancement</strong>. Rather than
                treating technology as an isolated commodity, we view engineering,
                data intelligence, digital innovation, and strategic consulting as
                interlocking instruments for long-term value creation.
              </p>
              <p>
                Every system we architect, workflow we automate, and strategy we
                develop is guided by a commitment to professional excellence,
                intellectual clarity, and lasting utility.
              </p>
            </div>

            <div>
              <div className="rovela-syllable-list" role="list">
                {BRAND_PILLARS.map((pillar) => (
                  <div
                    key={pillar.syllable}
                    className="rovela-syllable-item"
                    role="listitem"
                  >
                    <div className="rovela-syllable-code">
                      {pillar.syllable}
                    </div>
                    <div>
                      <h3 className="rovela-syllable-title">{pillar.title}</h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.78125rem',
                          fontWeight: 600,
                          color: 'var(--rovela-gold-accessible-dark)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: '0.4rem'
                        }}
                      >
                        {pillar.subtitle}
                      </p>
                      <p className="rovela-syllable-desc">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="brand-equation-bar">
                <span>Relationships</span>
                <span className="brand-equation-bar__op">+</span>
                <span>Value</span>
                <span className="brand-equation-bar__op">+</span>
                <span>Leadership &amp; Advancement</span>
                <span className="brand-equation-bar__op">=</span>
                <span className="brand-equation-bar__result">ROVELA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section
        className="section section--sage"
        aria-labelledby="vision-mission-heading"
      >
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow--on-sage">
              02 / Purpose &amp; Direction
            </span>
            <h2 id="vision-mission-heading" className="h1-title">
              Our Vision and Mission
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">OUR VISION</span>
                  <span className="pillar-card__icon">
                    <Compass size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.25rem', marginBottom: '0.85rem' }}
                >
                  An internationally respected catalyst for technology-enabled
                  growth.
                </h3>
                <p>
                  To be a trusted, internationally competitive technology and
                  business solutions brand recognized for transforming complex
                  potential into enduring commercial, technological, and
                  institutional value.
                </p>
              </div>
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-on-ivory)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--rovela-teal)'
                }}
              >
                Connecting Potential. Creating Value.
              </div>
            </article>

            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">OUR MISSION</span>
                  <span className="pillar-card__icon">
                    <Target size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.25rem', marginBottom: '0.85rem' }}
                >
                  Combining multidisciplinary expertise to deliver practical
                  solutions.
                </h3>
                <p>
                  To unite skilled engineering, data analytics, emerging
                  technologies, and strategic insight, helping businesses and
                  institutions solve meaningful problems, capture new
                  opportunities, and build resilient digital capabilities.
                </p>
              </div>
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-on-ivory)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--rovela-teal)'
                }}
              >
                Practical Execution · Measurable Outcomes
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. The Symbol Rationale: Three Ideas. One Symbol. */}
      <section
        className="section section--teal"
        aria-labelledby="symbol-story-heading"
      >
        <div className="container">
          <div className="why-rovela-layout">
            <div>
              <span className="eyebrow eyebrow--gold">
                03 / What ROVELA Stands For
              </span>
              <h2
                id="symbol-story-heading"
                className="h1-title"
                style={{ marginBottom: '1.25rem' }}
              >
                Three ideas. One symbol.
              </h2>
              <p
                style={{
                  color: 'rgba(246, 243, 234, 0.88)',
                  marginBottom: '2rem'
                }}
              >
                Two arches join to form a single ascending summit: partnership
                that lifts everyone higher. At its heart sits a four-point
                brass-gold diamond, representing the shared value that
                disciplined growth creates.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--rovela-teal-deep)',
                  border: '1px solid rgba(199, 165, 106, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1.25rem'
                }}
              >
                <div style={{ width: '180px' }}>
                  <RovelaSymbolSvg
                    primaryColor="#F6F3EA"
                    diamondColor="#C7A56A"
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    letterSpacing: '0.2em',
                    color: 'var(--rovela-ivory)'
                  }}
                >
                  ROVELA
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--rovela-sage)'
                  }}
                >
                  Interlocking Arches · Guiding Diamond · Ascending Summit
                </p>
              </div>
            </div>

            <div className="why-pillars-list">
              <div className="why-pillar-row">
                <span className="why-pillar-row__num">RO</span>
                <div>
                  <h3 className="why-pillar-row__title">
                    People, Partnership &amp; Collaboration
                  </h3>
                  <p className="why-pillar-row__desc">
                    Two rounded arches embrace and overlap, read as two figures
                    joined or hands clasped, expressing that every enduring
                    opportunity begins with a trusted relationship.
                  </p>
                </div>
              </div>

              <div className="why-pillar-row">
                <span className="why-pillar-row__num">VE</span>
                <div>
                  <h3 className="why-pillar-row__title">
                    Excellence &amp; Shared Prosperity
                  </h3>
                  <p className="why-pillar-row__desc">
                    A four-point diamond sits at the centre, in the negative
                    space between the arches. Its concave, star-like form reads
                    as a guiding light: value discovered through connection,
                    not imposed from outside.
                  </p>
                </div>
              </div>

              <div className="why-pillar-row">
                <span className="why-pillar-row__num">LA</span>
                <div>
                  <h3 className="why-pillar-row__title">
                    An Upward Flow of Growth
                  </h3>
                  <p className="why-pillar-row__desc">
                    The overall silhouette is a mountain peak and an upward
                    trajectory in one. Strokes sweep upward toward the summit,
                    embodying leadership, initiative, and continuous
                    advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach to Collaboration & Commitment to Measurable Value */}
      <section
        className="section section--ivory"
        aria-labelledby="collaboration-heading"
      >
        <div className="container">
          <div className="why-rovela-layout">
            <div className="editorial-image-frame">
              <img
                src="/images/hero-approach.webp"
                alt="High-tech architectural research pavilion with cantilevered deep teal steel arches and golden light pathways"
                width={1600}
                height={900}
                loading="lazy"
              />
              <div className="editorial-image-frame__caption">
                <span>Collective Intelligence in Practice</span>
                <span style={{ color: 'var(--rovela-gold)' }}>
                  Precision &amp; Harmony
                </span>
              </div>
            </div>

            <div>
              <span className="eyebrow eyebrow--on-ivory">
                04 / Collaborative Intelligence
              </span>
              <h2
                id="collaboration-heading"
                className="h1-title"
                style={{ marginBottom: '1.25rem' }}
              >
                Turning individual specialization into collective execution.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Modern business challenges rarely respect traditional boundaries.
                Launching a successful digital product or modernizing an
                operation requires software engineering, data architecture, AI
                automation, user experience, and commercial strategy working in
                concert.
              </p>
              <p style={{ marginBottom: '1.75rem' }}>
                ROVELA’s collaborative model brings together domain specialists
                around a shared standard of quality. For our clients and
                partners, this means cohesive problem-solving without
                disconnected handoffs:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    padding: '1.25rem',
                    backgroundColor: 'var(--rovela-ivory-pure)',
                    border: '1px solid var(--border-on-ivory)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <Users
                    size={20}
                    style={{
                      color: 'var(--rovela-teal)',
                      marginBottom: '0.5rem'
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="h3-title" style={{ marginBottom: '0.35rem' }}>
                    Integrated Expertise
                  </h3>
                  <p style={{ fontSize: '0.88rem' }}>
                    Technical specialists and strategic advisors aligned around
                    one unified objective.
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    backgroundColor: 'var(--rovela-ivory-pure)',
                    border: '1px solid var(--border-on-ivory)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <TrendingUp
                    size={20}
                    style={{
                      color: 'var(--rovela-teal)',
                      marginBottom: '0.5rem'
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="h3-title" style={{ marginBottom: '0.35rem' }}>
                    Measurable Value
                  </h3>
                  <p style={{ fontSize: '0.88rem' }}>
                    Every deliverable is anchored to operational efficiency,
                    clarity, or commercial growth.
                  </p>
                </div>
              </div>

              <Link to="/approach" className="link-arrow">
                <span>See Our 5-Stage Delivery Process</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Long-Term Direction */}
      <section
        className="section section--ivory-pure"
        aria-labelledby="direction-heading"
        style={{ borderTop: '1px solid var(--border-on-ivory)' }}
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                05 / Long-Term Horizon
              </span>
              <h2 id="direction-heading" className="h1-title">
                Building for durability in a rapidly shifting technological era.
              </h2>
            </div>
            <p>
              ROVELA is structured not merely to respond to current digital
              needs, but to evolve continuously alongside emerging technologies
              and global market opportunities.
            </p>
          </div>

          <div className="what-we-do-grid">
            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">HORIZON 01</span>
                  <span className="pillar-card__icon">
                    <Sparkles size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.15rem', marginBottom: '0.65rem' }}
                >
                  Applied Frontier Technology
                </h3>
                <p>
                  Continually advancing our capabilities in applied artificial
                  intelligence, intelligent automation, data science, and
                  decentralized protocols to keep our partners ahead of the
                  curve.
                </p>
              </div>
            </article>

            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">HORIZON 02</span>
                  <span className="pillar-card__icon">
                    <ShieldCheck size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.15rem', marginBottom: '0.65rem' }}
                >
                  Enduring Digital Assets &amp; Platforms
                </h3>
                <p>
                  Designing and developing proprietary and client-commissioned
                  software platforms, analytical tools, and digital products that
                  compound in utility over time.
                </p>
              </div>
            </article>

            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">HORIZON 03</span>
                  <span className="pillar-card__icon">
                    <Compass size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.15rem', marginBottom: '0.65rem' }}
                >
                  Knowledge &amp; Ecosystem Enablement
                </h3>
                <p>
                  Expanding human and institutional potential through technology
                  training, advisory partnerships, and digital literacy programs
                  that empower organizations from within.
                </p>
              </div>
            </article>
          </div>

          <div style={{ marginTop: '3.5rem' }}>
            <div className="cta-banner">
              <div>
                <span className="eyebrow eyebrow--gold">
                  Partner With ROVELA
                </span>
                <h3
                  className="h1-title"
                  style={{ color: 'var(--rovela-ivory)', marginBottom: '0.75rem' }}
                >
                  Explore how our capabilities align with your objectives.
                </h3>
                <p style={{ color: 'rgba(246, 243, 234, 0.85)' }}>
                  Review our eight core service offerings or connect directly
                  with our team to discuss an upcoming initiative.
                </p>
              </div>
              <div className="cta-banner__actions">
                <Link to="/services" className="btn btn--gold">
                  <span>Explore Services</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn btn--outline-ivory">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

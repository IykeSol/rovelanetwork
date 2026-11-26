import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  BarChart3,
  Blocks,
  Code2,
  ServerCog,
  Megaphone,
  Briefcase,
  GraduationCap,
  Layers,
  Compass,
  ShieldCheck,
  Terminal,
  Landmark,
  Building2,
  ShoppingBag,
  BookOpenCheck,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { RovelaSymbolSvg } from '../components/RovelaLogo';
import {
  BRAND_PILLARS,
  SERVICES_DATA,
  APPROACH_STEPS,
  INDUSTRIES_DATA,
  WHY_ROVELA_PILLARS,
  ServiceCategory,
  IndustrySector
} from '../data/siteData';

const SERVICE_ICONS: Record<ServiceCategory['iconName'], React.ReactNode> = {
  Cpu: <Cpu size={20} aria-hidden="true" />,
  BarChart3: <BarChart3 size={20} aria-hidden="true" />,
  Blocks: <Blocks size={20} aria-hidden="true" />,
  Code2: <Code2 size={20} aria-hidden="true" />,
  ServerCog: <ServerCog size={20} aria-hidden="true" />,
  Megaphone: <Megaphone size={20} aria-hidden="true" />,
  Briefcase: <Briefcase size={20} aria-hidden="true" />,
  GraduationCap: <GraduationCap size={20} aria-hidden="true" />
};

const INDUSTRY_ICONS: Record<IndustrySector['iconName'], React.ReactNode> = {
  Terminal: <Terminal size={20} aria-hidden="true" />,
  Landmark: <Landmark size={20} aria-hidden="true" />,
  Building2: <Building2 size={20} aria-hidden="true" />,
  ShoppingBag: <ShoppingBag size={20} aria-hidden="true" />,
  BookOpenCheck: <BookOpenCheck size={20} aria-hidden="true" />,
  Sparkles: <Sparkles size={20} aria-hidden="true" />
};

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="ROVELA | Connecting Potential. Creating Value. | Technology & Business Solutions"
        description="ROVELA brings together technology, multidisciplinary professional expertise, and strategic thinking to create practical digital solutions and lasting business value."
        canonicalPath="/"
      />

      {/* =================================================================
          HERO SECTION (Full-Bleed Photographic Hero + Showcase Frame)
         ================================================================= */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg-media" aria-hidden="true">
          <img
            src="/images/hero-main.webp"
            alt=""
            className="hero__bg-img"
            width={1600}
            height={900}
            fetchPriority="high"
          />
          <div className="hero__bg-overlay" />
        </div>

        <div className="hero__watermark" aria-hidden="true">
          <RovelaSymbolSvg primaryColor="#F6F3EA" diamondColor="#C7A56A" />
        </div>

        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow eyebrow--gold">
              Relationships Evolving Into Lasting Value
            </span>
            <h1 id="hero-heading" className="display-title hero__title">
              Connecting Potential.
              <span className="hero__title-accent">Creating Value.</span>
            </h1>
            <p className="hero__lead">
              ROVELA brings together advanced technology, multidisciplinary
              expertise, and strategic intelligence to engineer practical
              solutions, unlock high-leverage business opportunities, and support
              sustainable organizational growth.
            </p>

            <div className="hero__actions">
              <Link to="/services" className="btn btn--gold">
                <span>Explore Our Services</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn--outline-ivory">
                <span>Get in Touch</span>
              </Link>
            </div>

            <div className="hero__pillars-bar" aria-label="Brand Foundations">
              <div className="hero__pillar-item">
                <span className="hero__pillar-code">RO · RELATIONSHIPS</span>
                <span className="hero__pillar-label">Collaborative Trust</span>
                <span className="hero__pillar-sub">
                  Partnership as the foundation
                </span>
              </div>
              <div className="hero__pillar-item">
                <span className="hero__pillar-code">VE · VALUE</span>
                <span className="hero__pillar-label">Measurable Impact</span>
                <span className="hero__pillar-sub">
                  Practical commercial clarity
                </span>
              </div>
              <div className="hero__pillar-item">
                <span className="hero__pillar-code">LA · LEADERSHIP</span>
                <span className="hero__pillar-label">Upward Advancement</span>
                <span className="hero__pillar-sub">
                  Forward-looking innovation
                </span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-card">
              <div className="hero__image-wrapper">
                <img
                  src="/images/hero-main.webp"
                  alt="Modern international technology campus with an arched deep-teal glass facade and illuminated atrium"
                  className="hero__image"
                  width={1600}
                  height={900}
                  fetchPriority="high"
                />
                <div className="hero__visual-overlay">
                  <span className="hero__visual-badge">
                    <RovelaSymbolSvg
                      primaryColor="#F6F3EA"
                      diamondColor="#C7A56A"
                      className="rovela-logo__horizontal-symbol"
                    />
                    <span>ROVELA · Technology &amp; Advisory</span>
                  </span>

                  <div className="hero__visual-caption">
                    <div>
                      <p className="hero__visual-caption-text">
                        Collective Intelligence &amp; Applied Engineering
                      </p>
                      <p className="hero__visual-caption-sub">
                        AI · Data Analytics · Software · Web3 · Business Strategy
                      </p>
                    </div>
                    <Link
                      to="/approach"
                      className="btn btn--gold btn--sm"
                      aria-label="Learn about the ROVELA methodology"
                    >
                      <span>Our Model</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          1. INTRODUCTION TO ROVELA
         ================================================================= */}
      <section
        className="section section--ivory"
        aria-labelledby="intro-heading"
      >
        <div className="container">
          <div className="brand-intro-grid">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                01 / Introduction to ROVELA
              </span>
              <h2
                id="intro-heading"
                className="h1-title"
                style={{ marginBottom: '1.35rem' }}
              >
                Relationships evolving into lasting value.
              </h2>

              <p className="lead-paragraph" style={{ marginBottom: '1.25rem' }}>
                Strong professional relationships create opportunities;
                opportunities create value; and value supports sustainable
                growth.
              </p>
              <p style={{ marginBottom: '1.75rem', color: 'var(--rovela-charcoal)' }}>
                ROVELA is a collaborative technology and business solutions
                brand built to turn multidisciplinary capabilities into
                structured opportunities and measurable results. By uniting
                technical engineering, analytical rigor, and commercial
                strategy, we help organizations navigate complexity and build
                for the long term.
              </p>

              <Link to="/about" className="link-arrow">
                <span>Discover Our Philosophy &amp; Identity</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
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
                      <p className="rovela-syllable-desc">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="brand-equation-bar" aria-label="ROVELA Brand Equation">
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

      {/* =================================================================
          2. WHAT WE DO (Strategic Synthesis)
         ================================================================= */}
      <section
        className="section section--sage"
        aria-labelledby="what-we-do-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-sage">02 / What We Do</span>
              <h2 id="what-we-do-heading" className="h1-title">
                Bridging technological capability and commercial outcomes.
              </h2>
            </div>
            <p>
              We operate across three interconnected domains, helping
              organizations engineer modern systems, extract intelligence from
              data, and position their businesses for sustainable expansion.
            </p>
          </div>

          <div className="what-we-do-grid">
            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">DOMAIN 01</span>
                  <span className="pillar-card__icon">
                    <Cpu size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}
                >
                  Intelligence &amp; Data Systems
                </h3>
                <p>
                  We design applied artificial intelligence workflows, process
                  automation, and executive business intelligence systems that
                  transform raw information into operational speed and clarity.
                </p>
              </div>
              <Link
                to="/services#ai-automation"
                className="link-arrow"
              >
                <span>AI &amp; Analytics Capabilities</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>

            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">DOMAIN 02</span>
                  <span className="pillar-card__icon">
                    <Layers size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}
                >
                  Software, Web3 &amp; Infrastructure
                </h3>
                <p>
                  From bespoke web platforms and enterprise applications to
                  decentralized Web3 architectures and dependable IT solutions,
                  we engineer resilient digital foundations.
                </p>
              </div>
              <Link
                to="/services#software-web-development"
                className="link-arrow"
              >
                <span>Engineering Capabilities</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>

            <article className="pillar-card">
              <div>
                <div className="pillar-card__meta">
                  <span className="pillar-card__index">DOMAIN 03</span>
                  <span className="pillar-card__icon">
                    <Compass size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className="h2-title"
                  style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}
                >
                  Strategy, Brand &amp; Enablement
                </h3>
                <p>
                  We combine business development consulting, strategic digital
                  marketing, and structured technology training so organizations
                  and teams can capture market opportunities confidently.
                </p>
              </div>
              <Link
                to="/services#business-development-consulting"
                className="link-arrow"
              >
                <span>Advisory &amp; Growth Capabilities</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. OUR CORE CAPABILITIES (All 8 Service Offerings)
         ================================================================= */}
      <section
        className="section section--ivory"
        aria-labelledby="capabilities-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                03 / Our Core Capabilities
              </span>
              <h2 id="capabilities-heading" className="h1-title">
                Eight integrated areas of professional capability.
              </h2>
            </div>
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Each service area is structured to solve real operational and
                strategic challenges, whether engaged as a focused initiative
                or combined into a multidisciplinary solution.
              </p>
              <Link to="/services" className="link-arrow">
                <span>View Full Service Specifications</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="capabilities-grid">
            {SERVICES_DATA.map((service) => (
              <article key={service.id} className="capability-card">
                <div>
                  <div className="capability-card__top">
                    <div className="capability-card__badge-group">
                      <span className="capability-card__index">
                        {service.index}
                      </span>
                      <span className="capability-card__group-tag">
                        {service.categoryGroup}
                      </span>
                    </div>
                    <div className="capability-card__icon-box">
                      {SERVICE_ICONS[service.iconName]}
                    </div>
                  </div>

                  <h3 className="capability-card__title">{service.title}</h3>
                  <p className="capability-card__desc">{service.description}</p>

                  <ul
                    className="capability-card__highlights"
                    aria-label={`${service.shortTitle} capabilities`}
                  >
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <li
                        key={cap}
                        className="capability-card__highlight-item"
                      >
                        <span
                          className="capability-card__bullet"
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem'
                  }}
                >
                  <Link
                    to={`/services#${service.slug}`}
                    className="link-arrow"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          4. WHY ROVELA (Deep Forest Teal Feature Section)
         ================================================================= */}
      <section
        className="section section--teal"
        aria-labelledby="why-rovela-heading"
      >
        <div className="container">
          <div className="why-rovela-layout">
            <div>
              <span className="eyebrow eyebrow--gold">04 / Why ROVELA</span>
              <h2 id="why-rovela-heading" className="h1-title" style={{ marginBottom: '1.25rem' }}>
                Designed for clarity, collaborative depth, and enduring results.
              </h2>
              <p
                style={{
                  color: 'rgba(246, 243, 234, 0.86)',
                  marginBottom: '2rem'
                }}
              >
                In a landscape crowded with fragmented vendors and short-term
                tactics, ROVELA focuses on disciplined execution and high-trust
                collaboration. We align technical capability directly with the
                outcomes that matter to your organization.
              </p>

              <div className="editorial-image-frame">
                <img
                  src="/images/hero-services.webp"
                  alt="Enterprise technology and data operations environment at ROVELA"
                  width={1600}
                  height={900}
                  loading="lazy"
                />
                <div className="editorial-image-frame__caption">
                  <span>Structured Systems · Connected Intelligence</span>
                  <span style={{ color: 'var(--rovela-gold)' }}>
                    RO · VE · LA
                  </span>
                </div>
              </div>
            </div>

            <div className="why-pillars-list">
              {WHY_ROVELA_PILLARS.map((item) => (
                <div key={item.index} className="why-pillar-row">
                  <span className="why-pillar-row__num">{item.index}</span>
                  <div>
                    <h3 className="why-pillar-row__title">{item.title}</h3>
                    <p className="why-pillar-row__desc">{item.description}</p>
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <Link to="/about" className="btn btn--gold">
                  <span>More About ROVELA</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn btn--outline-ivory">
                  <span>Discuss an Initiative</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          5. OUR APPROACH (5-Stage Visual Process)
         ================================================================= */}
      <section
        className="section section--ivory-pure"
        aria-labelledby="approach-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                05 / Our Approach
              </span>
              <h2 id="approach-heading" className="h1-title">
                A disciplined five-stage methodology from discovery to evolution.
              </h2>
            </div>
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Every initiative follows a clear, client-focused progression
                designed to eliminate ambiguity, bring the right capabilities
                together, and deliver verifiable value.
              </p>
              <Link to="/approach" className="link-arrow">
                <span>Explore Full Delivery Methodology</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="approach-timeline">
            {APPROACH_STEPS.map((step) => (
              <article key={step.number} className="approach-step-card">
                <div>
                  <div className="approach-step-card__num">
                    <span>{step.number}</span>
                    <ShieldCheck
                      size={18}
                      style={{ color: 'var(--rovela-gold)' }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="approach-step-card__phase"
                    style={{ marginTop: '1rem' }}
                  >
                    {step.phase}
                  </h3>
                  <p className="approach-step-card__subtitle">
                    {step.subtitle}
                  </p>
                  <p className="approach-step-card__desc">
                    {step.description}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: '0.78125rem',
                    fontWeight: 600,
                    color: 'var(--rovela-teal)',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-on-ivory)'
                  }}
                >
                  Outcome: {step.clientOutcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          6. INDUSTRIES AND OPPORTUNITIES
         ================================================================= */}
      <section
        className="section section--sage"
        aria-labelledby="industries-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-sage">
                06 / Industries &amp; Opportunities
              </span>
              <h2 id="industries-heading" className="h1-title">
                Adaptable capabilities across high-opportunity sectors.
              </h2>
            </div>
            <div>
              <p style={{ marginBottom: '1rem' }}>
                ROVELA’s technology, data, and strategic solutions are
                architected to support organizations across key industries
                seeking modernization, intelligence, and digital growth.
              </p>
              <Link to="/industries" className="link-arrow">
                <span>Explore Sector Applications</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="industries-grid">
            {INDUSTRIES_DATA.map((industry) => (
              <article key={industry.id} className="industry-card">
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.15rem'
                    }}
                  >
                    <span className="pillar-card__index">
                      SECTOR {industry.index}
                    </span>
                    <span className="pillar-card__icon">
                      {INDUSTRY_ICONS[industry.iconName]}
                    </span>
                  </div>
                  <h3 className="h2-title" style={{ marginBottom: '0.65rem' }}>
                    {industry.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                    {industry.summary}
                  </p>
                </div>

                <div>
                  <div
                    className="industry-card__tags"
                    style={{ marginBottom: '1.15rem' }}
                  >
                    {industry.relevantCapabilities.slice(0, 2).map((cap) => (
                      <span key={cap} className="industry-tag">
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/industries#${industry.id}`}
                    className="link-arrow"
                  >
                    <span>View Sector Focus</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          7. CONTACT CTA SECTION
         ================================================================= */}
      <section
        className="section section--ivory"
        aria-labelledby="home-cta-heading"
      >
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow eyebrow--gold">
                07 / Initiate a Partnership
              </span>
              <h2
                id="home-cta-heading"
                className="h1-title"
                style={{ color: 'var(--rovela-ivory)', marginBottom: '1rem' }}
              >
                Let’s turn potential into lasting value.
              </h2>
              <p
                style={{
                  color: 'rgba(246, 243, 234, 0.86)',
                  maxWidth: '58ch'
                }}
              >
                Whether you are exploring an AI workflow, building a modern web
                platform, structuring a data analytics foundation, or navigating
                a strategic digital initiative, ROVELA is ready to collaborate.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn--gold">
                <span>Get in Touch</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn--outline-ivory">
                <span>Review Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

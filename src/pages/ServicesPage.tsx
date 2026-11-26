import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  BarChart3,
  Blocks,
  Code2,
  ServerCog,
  Megaphone,
  Briefcase,
  GraduationCap,
  Layers
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_DATA, ServiceCategory } from '../data/siteData';

const SERVICE_ICONS: Record<ServiceCategory['iconName'], React.ReactNode> = {
  Cpu: <Cpu size={22} aria-hidden="true" />,
  BarChart3: <BarChart3 size={22} aria-hidden="true" />,
  Blocks: <Blocks size={22} aria-hidden="true" />,
  Code2: <Code2 size={22} aria-hidden="true" />,
  ServerCog: <ServerCog size={22} aria-hidden="true" />,
  Megaphone: <Megaphone size={22} aria-hidden="true" />,
  Briefcase: <Briefcase size={22} aria-hidden="true" />,
  GraduationCap: <GraduationCap size={22} aria-hidden="true" />
};

type FilterGroup = 'All' | ServiceCategory['categoryGroup'];

const FILTER_GROUPS: FilterGroup[] = [
  'All',
  'Intelligence & Data',
  'Engineering & Infrastructure',
  'Strategy & Digital Growth'
];

export const ServicesPage: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<FilterGroup>('All');

  const filteredServices =
    activeGroup === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.categoryGroup === activeGroup);

  return (
    <>
      <SEOHead
        title="Services & Core Capabilities | AI, Data Analytics, Software, Web3 & Consulting | ROVELA"
        description="Explore ROVELA's eight core service areas: Artificial Intelligence & Automation, Data Analytics & BI, Web3 & Blockchain, Software & Web Development, IT Solutions, Digital Marketing, Business Consulting, and Technology Training."
        canonicalPath="/services"
      />

      {/* Page Hero with Real Photographic Hero Image */}
      <section className="page-hero" aria-labelledby="services-hero-heading">
        <div className="page-hero__bg" aria-hidden="true">
          <img
            src="/images/hero-services.webp"
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
              Capabilities &amp; Service Offerings
            </span>
            <h1
              id="services-hero-heading"
              className="display-title page-hero__title"
            >
              Practical technology and strategic solutions built for value.
            </h1>
            <p className="page-hero__lead">
              ROVELA offers multidisciplinary capabilities across artificial
              intelligence, data analytics, software engineering, decentralized
              technologies, and strategic advisory, structured to address real
              commercial and operational priorities.
            </p>
          </div>

          <div className="page-hero__media-card">
            <img
              src="/images/hero-services.webp"
              alt="Enterprise technology and data analytics operations studio"
              width={1224}
              height={816}
              fetchPriority="high"
            />
            <div className="editorial-image-frame__caption">
              <span>Applied Engineering · Connected Intelligence</span>
              <span style={{ color: 'var(--rovela-gold)' }}>RO · VE · LA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Anchor Bar & Category Filter */}
      <section
        className="section section--ivory"
        aria-labelledby="services-catalog-heading"
      >
        <div className="container">
          <div className="section-header section-header--split">
            <div>
              <span className="eyebrow eyebrow--on-ivory">
                Service Architecture
              </span>
              <h2 id="services-catalog-heading" className="h1-title">
                Explore our eight areas of professional capability.
              </h2>
            </div>
            <p>
              Filter by practice domain or select any capability below to review
              technical competencies, practical business applications, and the
              measurable value delivered.
            </p>
          </div>

          {/* Interactive Domain Filter */}
          <div
            className="service-filter-bar"
            role="group"
            aria-label="Filter services by practice domain"
          >
            {FILTER_GROUPS.map((group) => {
              const isSelected = activeGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  aria-pressed={isSelected}
                  aria-controls="services-specification-list"
                  onClick={() => setActiveGroup(group)}
                  className={`service-filter-btn ${
                    isSelected ? 'service-filter-btn--active' : ''
                  }`}
                >
                  {group === 'All' ? 'All Capabilities (08)' : group}
                </button>
              );
            })}
          </div>

          {/* Quick-Jump Index Strip */}
          <nav
            aria-label="Service quick jump anchors"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '0.75rem',
              marginBottom: '3rem'
            }}
          >
            {filteredServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--rovela-ivory-pure)',
                  border: '1px solid var(--border-on-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--rovela-teal)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--rovela-gold-accessible-dark)',
                    fontWeight: 700
                  }}
                >
                  {service.index}
                </span>
                <span>{service.shortTitle}</span>
              </a>
            ))}
          </nav>

          {/* Comprehensive Service Specification Cards */}
          <div id="services-specification-list" className="service-detail-list">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                id={service.slug}
                className="service-detail-card"
                aria-labelledby={`heading-${service.slug}`}
              >
                <div className="service-detail-card__header">
                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '0.65rem'
                        }}
                      >
                        <span className="capability-card__index">
                          CAPABILITY {service.index}
                        </span>
                        <span className="capability-card__group-tag">
                          {service.categoryGroup}
                        </span>
                      </div>

                      <div
                        className="capability-card__icon-box"
                        style={{ width: '44px', height: '44px' }}
                      >
                        {SERVICE_ICONS[service.iconName]}
                      </div>
                    </div>

                    <h3
                      id={`heading-${service.slug}`}
                      className="h1-title"
                      style={{ marginBottom: '0.5rem' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '0.975rem',
                        color: 'var(--rovela-gold-accessible-dark)'
                      }}
                    >
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <p
                  className="lead-paragraph"
                  style={{ marginBottom: '2rem', maxWidth: '82ch' }}
                >
                  {service.description}
                </p>

                <div className="service-detail-card__body">
                  {/* Relevant Capabilities */}
                  <div className="service-detail-card__subpanel service-detail-card__subpanel--ivory">
                    <h4
                      className="h3-title"
                      style={{
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <Layers
                        size={18}
                        style={{ color: 'var(--rovela-teal)' }}
                        aria-hidden="true"
                      />
                      <span>Relevant Capabilities</span>
                    </h4>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}
                    >
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
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
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Business Applications */}
                  <div className="service-detail-card__subpanel service-detail-card__subpanel--sage">
                    <h4
                      className="h3-title"
                      style={{
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <Briefcase
                        size={18}
                        style={{ color: 'var(--rovela-teal)' }}
                        aria-hidden="true"
                      />
                      <span>Practical Business Applications</span>
                    </h4>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}
                    >
                      {service.applications.map((app) => (
                        <li
                          key={app}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.9375rem'
                          }}
                        >
                          <span
                            className="capability-card__bullet"
                            aria-hidden="true"
                          />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Value Delivered & Service CTA */}
                <div className="service-detail-card__value-banner">
                  <div style={{ maxWidth: '64ch' }}>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        fontSize: '0.725rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--rovela-gold)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Value Delivered
                    </span>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--rovela-ivory)'
                      }}
                    >
                      {service.valueDelivered}
                    </p>
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(
                      service.shortTitle
                    )}`}
                    className="btn btn--gold btn--sm"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Custom Engagement Section */}
      <section
        className="section section--sage"
        aria-labelledby="services-custom-heading"
      >
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow eyebrow--gold">
                Tailored Multidisciplinary Solutions
              </span>
              <h2
                id="services-custom-heading"
                className="h1-title"
                style={{ color: 'var(--rovela-ivory)', marginBottom: '0.85rem' }}
              >
                Need a combined capability approach?
              </h2>
              <p style={{ color: 'rgba(246, 243, 234, 0.86)', maxWidth: '60ch' }}>
                Many initiatives span multiple disciplines, such as pairing
                custom software engineering with data analytics or AI workflow
                automation. Tell us about your objectives and we will structure
                an appropriate approach.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn--gold">
                <span>Discuss Your Requirements</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/approach" className="btn btn--outline-ivory">
                <span>How We Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

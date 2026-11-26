import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Globe, ShieldCheck } from 'lucide-react';
import { RovelaLogo, RovelaSymbolSvg } from './RovelaLogo';
import { SERVICES_DATA, SOCIAL_LINKS } from '../data/siteData';

export const SocialIcon: React.FC<{ id: 'linkedin' | 'x' | 'instagram' }> = ({
  id
}) => {
  if (id === 'linkedin') {
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (id === 'x') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__watermark" aria-hidden="true">
        <RovelaSymbolSvg
          primaryColor="#F6F3EA"
          diamondColor="#C7A56A"
          className="site-footer__watermark-svg"
        />
      </div>

      <div className="container site-footer__container">
        {/* Top Brand & Equation Strip */}
        <div className="site-footer__top">
          <div className="site-footer__brand-col">
            <Link
              to="/"
              className="site-footer__logo-link"
              aria-label="ROVELA Home"
            >
              <RovelaLogo
                variant="horizontal"
                theme="reversed"
                showTagline={true}
                size="lg"
              />
            </Link>
            <p className="site-footer__mission">
              ROVELA represents{' '}
              <strong>Relationships Evolving into Lasting Value</strong>. We bring
              together technology, multidisciplinary insight, and strategic
              thinking to engineer practical solutions and sustainable business
              opportunities.
            </p>
            <div className="site-footer__equation" aria-label="Brand Formula">
              <span>RELATIONSHIPS</span>
              <span className="site-footer__eq-op">+</span>
              <span>VALUE</span>
              <span className="site-footer__eq-op">+</span>
              <span>LEADERSHIP &amp; ADVANCEMENT</span>
              <span className="site-footer__eq-op">=</span>
              <strong className="site-footer__eq-res">ROVELA</strong>
            </div>
          </div>

          <div className="site-footer__cta-card">
            <span className="eyebrow eyebrow--gold">Engage With ROVELA</span>
            <h3 className="site-footer__cta-title">
              Ready to align potential with measurable execution?
            </h3>
            <p className="site-footer__cta-desc">
              Discuss a technology initiative, strategic challenge, or capability
              enablement opportunity with our team.
            </p>
            <div className="site-footer__cta-actions">
              <Link to="/contact" className="btn btn--gold">
                <span>Initiate an Enquiry</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn--outline-ivory">
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

        <hr className="site-footer__divider" />

        {/* Navigation Columns */}
        <div className="site-footer__grid">
          <div className="site-footer__col">
            <h4 className="site-footer__heading">Company</h4>
            <ul className="site-footer__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About ROVELA</Link>
              </li>
              <li>
                <Link to="/approach">Our Approach</Link>
              </li>
              <li>
                <Link to="/industries">Industries &amp; Opportunities</Link>
              </li>
              <li>
                <Link to="/contact">Contact &amp; Enquiries</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col site-footer__col--wide">
            <h4 className="site-footer__heading">Core Capabilities</h4>
            <ul className="site-footer__list site-footer__list--two-col">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.slug}`}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Direct Channels</h4>
            <ul className="site-footer__contact-list">
              <li>
                <Mail size={16} className="site-footer__icon" aria-hidden="true" />
                <div>
                  <span className="site-footer__contact-label">General Enquiries</span>
                  <a href="mailto:contact@rovelanetwork.com">contact@rovelanetwork.com</a>
                </div>
              </li>
              <li>
                <Globe size={16} className="site-footer__icon" aria-hidden="true" />
                <div>
                  <span className="site-footer__contact-label">Operating Model</span>
                  <span>International Digital &amp; Advisory Practice</span>
                </div>
              </li>
              <li>
                <ShieldCheck size={16} className="site-footer__icon" aria-hidden="true" />
                <div>
                  <span className="site-footer__contact-label">Engagement Standards</span>
                  <span>Confidential, Value-Driven Execution</span>
                </div>
              </li>
            </ul>

            <div className="site-footer__socials">
              <span className="site-footer__contact-label">
                Official Social Channels
              </span>
              <div className="site-footer__social-links">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__social-btn"
                    aria-label={social.ariaLabel}
                    title={`${social.label} (${social.handle})`}
                  >
                    <SocialIcon id={social.id} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="site-footer__divider" />

        {/* Bottom Legal Bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; {currentYear} ROVELA. All rights reserved. Connecting Potential. Creating Value.
          </p>
          <ul className="site-footer__legal-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-use">Terms of Use</Link>
            </li>
            <li>
              <Link to="/contact">Enquiries</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RovelaLogo } from './RovelaLogo';
import { SOCIAL_LINKS } from '../data/siteData';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Approach', path: '/approach' },
  { label: 'Industries', path: '/industries' }
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
        role="banner"
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <div className="container site-header__inner">
          <Link
            to="/"
            className="site-header__brand"
            aria-label="ROVELA Home: Connecting Potential. Creating Value."
          >
            <RovelaLogo variant="horizontal" theme="full-colour" size="md" />
          </Link>

          <nav
            className="site-header__nav"
            aria-label="Primary Navigation"
          >
            <ul className="site-header__nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.path} className="site-header__nav-item">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `site-header__nav-link ${
                        isActive ? 'site-header__nav-link--active' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <Link to="/contact" className="btn btn--primary btn--sm site-header__cta">
              <span>Get in Touch</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <button
              type="button"
              className="site-header__menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer (Sibling outside header to avoid backdrop-filter fixed containment) */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer__backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__top">
            <span className="eyebrow eyebrow--gold" style={{ marginBottom: '0.5rem' }}>
              Navigation
            </span>
            <p className="mobile-drawer__tagline">
              Connecting Potential. Creating Value.
            </p>
          </div>

          <nav aria-label="Mobile Primary Navigation" className="mobile-drawer__nav">
            <ul className="mobile-drawer__list">
              {NAV_ITEMS.map((item, idx) => (
                <li key={item.path} className="mobile-drawer__item">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `mobile-drawer__link ${
                        isActive ? 'mobile-drawer__link--active' : ''
                      }`
                    }
                  >
                    <span className="mobile-drawer__index">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer__footer">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn--gold btn--full"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <div className="mobile-drawer__socials" aria-label="Social Media Links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer__social-link"
                  aria-label={social.ariaLabel}
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="mobile-drawer__meta">
              <span>RO · VE · LA</span>
              <span>Relationships Evolving into Lasting Value</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

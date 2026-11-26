import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  ArrowLeft,
  Mail,
  Lock,
  Globe
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const OFFICIAL_EMAIL = 'contact@rovelanetwork.com';
const OFFICIAL_DOMAIN = 'www.rovelanetwork.com';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | ROVELA"
        description="Read the official ROVELA Privacy Policy governing how we collect, use, and protect personal information across www.rovelanetwork.com and contact@rovelanetwork.com."
        canonicalPath="/privacy-policy"
      />

      <section className="page-hero" aria-labelledby="privacy-hero-heading">
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
        <div className="container page-hero__inner">
          <span className="eyebrow eyebrow--gold">Legal &amp; Data Protection</span>
          <h1
            id="privacy-hero-heading"
            className="display-title page-hero__title"
          >
            Privacy Policy
          </h1>
          <p className="page-hero__lead">
            ROVELA is committed to protecting the privacy, confidentiality, and
            security of information shared by our clients, prospective partners,
            and website visitors across {OFFICIAL_DOMAIN}.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div
            style={{
              backgroundColor: 'var(--rovela-sage-surface)',
              border: '1px solid var(--border-on-ivory-strong)',
              borderLeft: '4px solid var(--rovela-teal)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <ShieldCheck
              size={22}
              style={{
                color: 'var(--rovela-teal)',
                flexShrink: 0,
                marginTop: '0.15rem'
              }}
              aria-hidden="true"
            />
            <div>
              <h2 className="h3-title" style={{ marginBottom: '0.35rem' }}>
                Effective Date: November 2026 | Domain: {OFFICIAL_DOMAIN}
              </h2>
              <p style={{ fontSize: '0.925rem' }}>
                This Privacy Policy explains what information ROVELA collects
                when you visit <strong>{OFFICIAL_DOMAIN}</strong> or submit an
                enquiry to <strong>{OFFICIAL_EMAIL}</strong>, how we use and
                safeguard that information, and the rights available to you.
              </p>
            </div>
          </div>

          <div
            className="service-detail-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                1. Who We Are
              </h3>
              <p>
                ROVELA ("ROVELA", "we", "us", or "our") operates the corporate
                website <strong>https://{OFFICIAL_DOMAIN}</strong> and provides
                technology, data analytics, artificial intelligence, software
                engineering, Web3, digital marketing, business consulting, and
                technology training solutions. For any questions regarding data
                privacy, our designated contact channel is{' '}
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  style={{
                    color: 'var(--rovela-teal)',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  {OFFICIAL_EMAIL}
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                2. Information We Collect
              </h3>
              <p style={{ marginBottom: '0.85rem' }}>
                We practice strict data minimisation and collect only the
                information necessary to communicate with you and maintain a
                secure, high-performing website:
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  paddingLeft: '0.5rem'
                }}
              >
                <li>
                  <strong>Voluntary Enquiry Information:</strong> When you
                  submit our contact form or email us directly at{' '}
                  {OFFICIAL_EMAIL}, we collect your name or organization name,
                  email address, selected service area of interest, subject, and
                  the content of your message.
                </li>
                <li>
                  <strong>Direct Business Correspondence:</strong> If you engage
                  with ROVELA for discovery sessions, consulting, or project
                  scoping, we retain records of professional correspondence
                  necessary to evaluate and fulfill your request.
                </li>
                <li>
                  <strong>Standard Technical Log Data:</strong> Like most web
                  servers, our hosting environment records standard non-identifying
                  request metadata (such as browser type, operating system,
                  referring URL, date/time of access, and anonymised IP address)
                  solely for security monitoring, uptime diagnostics, and abuse
                  prevention.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                3. How We Use Your Information
              </h3>
              <p style={{ marginBottom: '0.85rem' }}>
                ROVELA uses the information you provide strictly for legitimate
                professional purposes:
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  paddingLeft: '0.5rem'
                }}
              >
                <li>
                  Responding to your project enquiries, consultation requests,
                  and partnership proposals sent to {OFFICIAL_EMAIL}.
                </li>
                <li>
                  Preparing tailored capability briefings, technical scopes, or
                  service proposals aligned with your stated objectives.
                </li>
                <li>
                  Maintaining the technical security, accessibility, and
                  performance integrity of {OFFICIAL_DOMAIN}.
                </li>
                <li>
                  Complying with applicable legal, regulatory, or contractual
                  obligations.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                4. Enquiry Transmission &amp; Third-Party Service Providers
              </h3>
              <p>
                We do not sell, rent, or trade your personal information to any
                third party. When you submit an enquiry through our online
                contact form, your submission is securely routed to our official
                inbox (<strong>{OFFICIAL_EMAIL}</strong>) via encrypted HTTPS
                mail-relay infrastructure or your local email client. We only
                use reputable infrastructure, hosting, and email delivery
                providers bound by industry-standard confidentiality and data
                protection obligations.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                5. Cookies &amp; Analytics
              </h3>
              <p>
                Our website is engineered as a lightweight static application
                that does not rely on intrusive tracking cookies, cross-site
                advertising pixels, or behavioral profiling scripts. Any local
                browser states are used solely to support essential user
                interface functionality during your active session.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                6. Data Retention &amp; Security
              </h3>
              <p>
                We retain business enquiry correspondence only for as long as
                necessary to address your request, maintain an ongoing
                professional relationship, or meet applicable legal recordkeeping
                requirements. We implement appropriate technical and
                organisational safeguards, including HTTPS/TLS encryption and
                restricted access controls on {OFFICIAL_EMAIL}, to protect
                information against unauthorized access, alteration, or
                disclosure.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                7. External Social &amp; Third-Party Links
              </h3>
              <p>
                Our website includes links to ROVELA’s official profiles on
                external platforms including LinkedIn, X (Twitter), and
                Instagram. Visiting those external platforms is governed by the
                respective privacy policies and terms of those platform
                operators.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                8. Your Privacy Rights &amp; Contact Information
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Depending on your jurisdiction, you may have the right to
                request access to, correction of, or deletion of personal
                information you have submitted to us, or to object to further
                correspondence. To exercise any of these rights, contact our
                team directly:
              </p>
              <div
                style={{
                  backgroundColor: 'var(--rovela-ivory)',
                  border: '1px solid var(--border-on-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={18} style={{ color: 'var(--rovela-teal)' }} aria-hidden="true" />
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    style={{ fontWeight: 700, color: 'var(--rovela-teal)' }}
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Globe size={18} style={{ color: 'var(--rovela-teal)' }} aria-hidden="true" />
                  <span>https://{OFFICIAL_DOMAIN}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <Link to="/" className="btn btn--outline-teal btn--sm">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/terms-of-use" className="btn btn--primary btn--sm">
              <FileText size={15} aria-hidden="true" />
              <span>Read Terms of Use</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Use | ROVELA"
        description="Read the official Terms of Use governing access to www.rovelanetwork.com and engagements with ROVELA."
        canonicalPath="/terms-of-use"
      />

      <section className="page-hero" aria-labelledby="terms-hero-heading">
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
        <div className="container page-hero__inner">
          <span className="eyebrow eyebrow--gold">Legal &amp; Governance</span>
          <h1
            id="terms-hero-heading"
            className="display-title page-hero__title"
          >
            Terms of Use
          </h1>
          <p className="page-hero__lead">
            These Terms of Use govern your access to and use of the ROVELA
            corporate website ({OFFICIAL_DOMAIN}) and any informational materials
            or enquiry channels provided herein.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div
            style={{
              backgroundColor: 'var(--rovela-sage-surface)',
              border: '1px solid var(--border-on-ivory-strong)',
              borderLeft: '4px solid var(--rovela-teal)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <Lock
              size={22}
              style={{
                color: 'var(--rovela-teal)',
                flexShrink: 0,
                marginTop: '0.15rem'
              }}
              aria-hidden="true"
            />
            <div>
              <h2 className="h3-title" style={{ marginBottom: '0.35rem' }}>
                Effective Date: November 2026 | Domain: {OFFICIAL_DOMAIN}
              </h2>
              <p style={{ fontSize: '0.925rem' }}>
                By accessing or using <strong>https://{OFFICIAL_DOMAIN}</strong>,
                you agree to comply with and be bound by these Terms of Use. If
                you do not agree with any part of these terms, please discontinue
                use of the website.
              </p>
            </div>
          </div>

          <div
            className="service-detail-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                1. Purpose of Website &amp; Professional Services
              </h3>
              <p>
                The content on <strong>{OFFICIAL_DOMAIN}</strong> is provided to
                communicate ROVELA’s brand identity, methodology, and service
                capabilities across Artificial Intelligence and Automation, Data
                Analytics and Business Intelligence, Web3 and Blockchain,
                Software and Web Development, IT Services, Digital Marketing,
                Business Consulting, and Technology Training. Website content is
                for general informational purposes and does not constitute a
                binding commercial offer, technical warranty, or professional
                advisory relationship until a formal written agreement or
                Statement of Work is executed between ROVELA and a client.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                2. Intellectual Property &amp; Brand Assets
              </h3>
              <p>
                All materials on this website, including the ROVELA name, the
                interlocking ascending-arches symbol, the four-point diamond
                mark, the tagline <em>"Connecting Potential. Creating Value."</em>,
                visual design tokens, photographs, graphics, text, and underlying
                source code, are the proprietary intellectual property of ROVELA
                or its licensors. You may view and print pages for your internal
                evaluation of ROVELA’s services, but you may not reproduce,
                modify, distribute, republish, or commercially exploit our brand
                assets or website content without prior written authorization
                from ROVELA.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                3. Acceptable Use of Website &amp; Enquiry Channels
              </h3>
              <p style={{ marginBottom: '0.85rem' }}>
                When browsing {OFFICIAL_DOMAIN} or submitting enquiries to{' '}
                {OFFICIAL_EMAIL}, you agree not to:
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  paddingLeft: '0.5rem'
                }}
              >
                <li>
                  Submit false, misleading, defamatory, or unlawful information,
                  or impersonate any person or organization.
                </li>
                <li>
                  Attempt to disrupt, probe, scrape, or compromise the security,
                  availability, or hosting infrastructure of {OFFICIAL_DOMAIN}.
                </li>
                <li>
                  Transmit unsolicited bulk promotional messages (spam),
                  malicious code, or automated form submissions to{' '}
                  {OFFICIAL_EMAIL}.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                4. Confidentiality of Preliminary Enquiries
              </h3>
              <p>
                While ROVELA treats incoming project briefs and business
                enquiries sent to {OFFICIAL_EMAIL} with professional discretion,
                please avoid transmitting highly sensitive trade secrets,
                regulated personal data, or cryptographic private keys through
                initial web enquiry forms prior to establishing a formal mutual
                Non-Disclosure Agreement (NDA) with our team.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                5. Third-Party Links &amp; External Platforms
              </h3>
              <p>
                This website contains links to external third-party platforms,
                including ROVELA’s official company pages on LinkedIn, X, and
                Instagram. ROVELA does not control and is not responsible for the
                availability, security, or policies of third-party websites.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                6. Disclaimer of Warranties &amp; Limitation of Liability
              </h3>
              <p>
                This website and its informational content are provided on an
                "as is" and "as available" basis without warranties of any kind,
                whether express or implied. To the fullest extent permitted by
                applicable law, ROVELA shall not be liable for any indirect,
                incidental, consequential, or special damages arising out of or
                related to your access to, use of, or inability to use{' '}
                {OFFICIAL_DOMAIN}.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                7. Updates to These Terms
              </h3>
              <p>
                ROVELA reserves the right to revise or update these Terms of Use
                at any time to reflect operational, technological, or legal
                developments. Updated terms become effective upon publication on{' '}
                {OFFICIAL_DOMAIN}.
              </p>
            </div>

            <div>
              <h3 className="h2-title" style={{ marginBottom: '0.6rem' }}>
                8. Contact Us
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                For questions regarding these Terms of Use, brand permissions,
                or commercial engagements, please contact ROVELA at:
              </p>
              <div
                style={{
                  backgroundColor: 'var(--rovela-ivory)',
                  border: '1px solid var(--border-on-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={18} style={{ color: 'var(--rovela-teal)' }} aria-hidden="true" />
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    style={{ fontWeight: 700, color: 'var(--rovela-teal)' }}
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Globe size={18} style={{ color: 'var(--rovela-teal)' }} aria-hidden="true" />
                  <span>https://{OFFICIAL_DOMAIN}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <Link to="/" className="btn btn--outline-teal btn--sm">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/privacy-policy" className="btn btn--primary btn--sm">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>Read Privacy Policy</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

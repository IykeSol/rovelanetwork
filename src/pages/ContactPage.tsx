import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Mail,
  Globe,
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SocialIcon } from '../components/Footer';
import { SERVICES_DATA, SOCIAL_LINKS } from '../data/siteData';

const OFFICIAL_EMAIL = 'contact@rovelanetwork.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${OFFICIAL_EMAIL}`;

interface ContactFormValues {
  name: string;
  email: string;
  serviceInterest: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    serviceInterest: searchParams.get('service') || '',
    subject: searchParams.get('subject') || '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<
    'idle' | 'sending' | 'sent' | 'fallback'
  >('idle');
  const [deliveryNote, setDeliveryNote] = useState<string>('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const subjectParam = searchParams.get('subject');
    if (serviceParam || subjectParam) {
      setValues((prev) => ({
        ...prev,
        serviceInterest: serviceParam || prev.serviceInterest,
        subject:
          subjectParam ||
          (serviceParam ? `Enquiry regarding ${serviceParam}` : prev.subject)
      }));
    }
  }, [searchParams]);

  const validate = (formValues: ContactFormValues): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = 'Please enter your full name or organization name.';
    } else if (formValues.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      nextErrors.email = 'Please provide a valid email address.';
    } else if (!emailRegex.test(formValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email format (e.g. name@company.com).';
    }

    if (!formValues.subject.trim()) {
      nextErrors.subject = 'Please specify a brief subject for your enquiry.';
    } else if (formValues.subject.trim().length < 4) {
      nextErrors.subject = 'Subject should be at least 4 characters.';
    }

    if (!formValues.message.trim()) {
      nextErrors.message = 'Please share a brief overview of your project or enquiry.';
    } else if (formValues.message.trim().length < 20) {
      nextErrors.message =
        'Please provide at least 20 characters so we can understand your requirements.';
    }

    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const buildMailtoHref = () =>
    `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
      values.subject || 'ROVELA Website Enquiry'
    )}&body=${encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nService Area: ${
        values.serviceInterest || 'General Enquiry'
      }\n\nMessage:\n${values.message}`
    )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitState('sending');
    setDeliveryNote('');

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          service_area: values.serviceInterest || 'General Enquiry',
          subject: values.subject.trim(),
          message: values.message.trim(),
          _subject: `ROVELA Enquiry: ${values.subject.trim()}`,
          _replyto: values.email.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitState('sent');
        setDeliveryNote(
          `Your enquiry has been transmitted directly to ${OFFICIAL_EMAIL}. Our team will review your brief and respond promptly.`
        );
      } else {
        setSubmitState('fallback');
        setDeliveryNote(
          `Your enquiry has been validated and prepared for ${OFFICIAL_EMAIL}. Click "Send via Email Client" below if direct relay is restricted by your network.`
        );
      }
    } catch {
      setSubmitState('fallback');
      setDeliveryNote(
        `Your enquiry has been validated and formatted for ${OFFICIAL_EMAIL}. Because your browser is currently offline or blocking external mail relays, you can dispatch it immediately with your email client below.`
      );
    }
  };

  const handleReset = () => {
    setValues({
      name: '',
      email: '',
      serviceInterest: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setTouched({});
    setSubmitState('idle');
    setDeliveryNote('');
  };

  return (
    <>
      <SEOHead
        title="Contact ROVELA | Start a Conversation or Project Enquiry"
        description="Get in touch with ROVELA at contact@rovelanetwork.com to discuss AI & automation, data analytics, software development, Web3, business consulting, or technology training opportunities."
        canonicalPath="/contact"
      />

      {/* Page Hero with Real Photographic Hero Image */}
      <section className="page-hero" aria-labelledby="contact-hero-heading">
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
            <span className="eyebrow eyebrow--gold">Contact &amp; Enquiries</span>
            <h1
              id="contact-hero-heading"
              className="display-title page-hero__title"
            >
              Every opportunity begins with a conversation.
            </h1>
            <p className="page-hero__lead">
              Connect with ROVELA to discuss a technology project, strategic
              advisory engagement, capability training initiative, or partnership
              opportunity.
            </p>
          </div>

          <div className="page-hero__media-card">
            <img
              src="/images/hero-about.webp"
              alt="Executive consultation space and architectural skybridge"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        className="section section--ivory"
        aria-labelledby="enquiry-section-heading"
      >
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Direct Channels */}
            <aside className="contact-info-panel" aria-label="Contact Information">
              <span className="eyebrow eyebrow--gold">Direct Channels</span>
              <h2
                className="h1-title"
                style={{
                  color: 'var(--rovela-ivory)',
                  fontSize: '1.75rem',
                  marginBottom: '0.85rem'
                }}
              >
                Connect with ROVELA
              </h2>
              <p
                style={{
                  color: 'rgba(246, 243, 234, 0.84)',
                  fontSize: '0.95rem'
                }}
              >
                Use the enquiry form or reach out directly to our official desk
                and social channels below.
              </p>

              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <span className="contact-info-item__icon">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.725rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--rovela-gold)'
                      }}
                    >
                      Email Us
                    </span>
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}`}
                      style={{
                        fontWeight: 600,
                        color: 'var(--rovela-ivory)',
                        fontSize: '1rem'
                      }}
                    >
                      {OFFICIAL_EMAIL}
                    </a>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--rovela-sage)',
                        marginTop: '0.15rem'
                      }}
                    >
                      For project enquiries, partnerships &amp; support
                    </p>
                  </div>
                </li>

                <li className="contact-info-item">
                  <span className="contact-info-item__icon">
                    <Globe size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.725rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--rovela-gold)'
                      }}
                    >
                      Official Website
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: 'var(--rovela-ivory)',
                        fontSize: '1rem'
                      }}
                    >
                      www.rovelanetwork.com
                    </span>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--rovela-sage)',
                        marginTop: '0.15rem'
                      }}
                    >
                      Available for remote &amp; on-site client projects
                    </p>
                  </div>
                </li>
              </ul>

              <div className="contact-socials-box">
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.725rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--rovela-gold)',
                    marginBottom: '0.75rem'
                  }}
                >
                  Official Social Network
                </span>
                <div className="contact-socials-grid">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-item"
                      aria-label={social.ariaLabel}
                    >
                      <span className="contact-social-item__icon">
                        <SocialIcon id={social.id} />
                      </span>
                      <span className="contact-social-item__text">
                        <strong>{social.label}</strong>
                        <small>{social.handle}</small>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.825rem',
                  color: 'var(--rovela-sage)'
                }}
              >
                <ShieldCheck
                  size={18}
                  style={{ color: 'var(--rovela-gold)', flexShrink: 0, marginTop: '0.1rem' }}
                  aria-hidden="true"
                />
                <span>
                  All preliminary discussions and project briefs are treated with
                  strict professional discretion under our{' '}
                  <Link
                    to="/privacy-policy"
                    style={{ color: 'var(--rovela-ivory)', textDecoration: 'underline' }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </div>
            </aside>

            {/* Right Column: Validated Enquiry Form with Live Email Delivery */}
            <div className="contact-form-card">
              <span className="eyebrow eyebrow--on-ivory">Enquiry Form</span>
              <h2
                id="enquiry-section-heading"
                className="h1-title"
                style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}
              >
                Send us an enquiry
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--rovela-charcoal-muted)',
                  marginBottom: '1.75rem'
                }}
              >
                Complete the fields below to send your enquiry directly to{' '}
                <strong>{OFFICIAL_EMAIL}</strong>. Fields marked with an asterisk
                (*) are required.
              </p>

              {(submitState === 'sent' || submitState === 'fallback') && (
                <div
                  className="form-status-banner form-status-banner--success"
                  role="status"
                  aria-live="polite"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem'
                    }}
                  >
                    <CheckCircle2
                      size={22}
                      style={{
                        color: 'var(--rovela-teal)',
                        flexShrink: 0,
                        marginTop: '0.15rem'
                      }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        className="h3-title"
                        style={{ marginBottom: '0.35rem' }}
                      >
                        {submitState === 'sent'
                          ? 'Enquiry Sent Successfully'
                          : 'Enquiry Ready for Direct Email Dispatch'}
                      </h3>
                      <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Thank you, <strong>{values.name}</strong>. {deliveryNote}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.75rem'
                        }}
                      >
                        <a
                          href={buildMailtoHref()}
                          className="btn btn--primary btn--sm"
                        >
                          <Mail size={15} aria-hidden="true" />
                          <span>Send via Email Client</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="btn btn--outline-teal btn--sm"
                        >
                          <RotateCcw size={15} aria-hidden="true" />
                          <span>Send Another Enquiry</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="ROVELA Project and Partnership Enquiry Form"
              >
                <div className="form-grid">
                  {/* Name */}
                  <div className="form-field">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name or Organization *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Jordan Vance / Acme Technologies"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={submitState === 'sending'}
                      aria-required="true"
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={
                        touched.name && errors.name
                          ? 'contact-name-error'
                          : undefined
                      }
                      className={`form-input ${
                        touched.name && errors.name ? 'form-input--error' : ''
                      }`}
                    />
                    {touched.name && errors.name && (
                      <span
                        id="contact-name-error"
                        className="form-error-msg"
                        role="alert"
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label htmlFor="contact-email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@organization.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={submitState === 'sending'}
                      aria-required="true"
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={
                        touched.email && errors.email
                          ? 'contact-email-error'
                          : undefined
                      }
                      className={`form-input ${
                        touched.email && errors.email ? 'form-input--error' : ''
                      }`}
                    />
                    {touched.email && errors.email && (
                      <span
                        id="contact-email-error"
                        className="form-error-msg"
                        role="alert"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Service Area Interest */}
                  <div className="form-field">
                    <label htmlFor="contact-service" className="form-label">
                      Primary Area of Interest
                    </label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={values.serviceInterest}
                      onChange={handleChange}
                      disabled={submitState === 'sending'}
                      className="form-select"
                    >
                      <option value="">Select a capability (Optional)</option>
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.shortTitle}>
                          {s.index} : {s.title}
                        </option>
                      ))}
                      <option value="Multi-Disciplinary / Strategic Partnership">
                        Multi-Disciplinary / Strategic Partnership
                      </option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="form-field">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Brief topic of your enquiry"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={submitState === 'sending'}
                      aria-required="true"
                      aria-invalid={Boolean(touched.subject && errors.subject)}
                      aria-describedby={
                        touched.subject && errors.subject
                          ? 'contact-subject-error'
                          : undefined
                      }
                      className={`form-input ${
                        touched.subject && errors.subject
                          ? 'form-input--error'
                          : ''
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <span
                        id="contact-subject-error"
                        className="form-error-msg"
                        role="alert"
                      >
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-field form-field--full">
                    <label htmlFor="contact-message" className="form-label">
                      Message &amp; Project Context *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Describe your objectives, desired timeline, or the business challenge you would like to explore with ROVELA..."
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={submitState === 'sending'}
                      aria-required="true"
                      aria-invalid={Boolean(touched.message && errors.message)}
                      aria-describedby={
                        touched.message && errors.message
                          ? 'contact-message-error'
                          : undefined
                      }
                      className={`form-textarea ${
                        touched.message && errors.message
                          ? 'form-textarea--error'
                          : ''
                      }`}
                    />
                    {touched.message && errors.message && (
                      <span
                        id="contact-message-error"
                        className="form-error-msg"
                        role="alert"
                      >
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Error summary if user submitted with invalid fields */}
                {Object.keys(errors).length > 0 &&
                  Object.keys(touched).length >= 4 && (
                    <div
                      style={{
                        marginTop: '1.25rem',
                        padding: '0.9rem 1.15rem',
                        backgroundColor: '#fffbfa',
                        border: '1px solid #fecdca',
                        borderLeft: '4px solid #b42318',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        color: '#b42318',
                        fontSize: '0.875rem'
                      }}
                      role="alert"
                    >
                      <AlertCircle size={18} aria-hidden="true" />
                      <span>
                        Please review the highlighted fields above before
                        continuing.
                      </span>
                    </div>
                  )}

                <div
                  style={{
                    marginTop: '1.75rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--rovela-charcoal-muted)',
                      maxWidth: '46ch'
                    }}
                  >
                    Submitting this form dispatches your enquiry to{' '}
                    <strong>{OFFICIAL_EMAIL}</strong> in accordance with our{' '}
                    <Link
                      to="/privacy-policy"
                      style={{ color: 'var(--rovela-teal)', textDecoration: 'underline' }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={submitState === 'sending'}
                  >
                    {submitState === 'sending' ? (
                      <>
                        <Loader2
                          size={16}
                          aria-hidden="true"
                          style={{ animation: 'spin 1s linear infinite' }}
                        />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send size={16} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

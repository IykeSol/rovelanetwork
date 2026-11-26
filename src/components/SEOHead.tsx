import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

const BASE_URL = 'https://www.rovelanetwork.com';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath
}) => {
  const { pathname } = useLocation();
  const path = canonicalPath ?? pathname;
  const fullUrl = `${BASE_URL}${path === '/' ? '/' : path}`;
  const fullTitle = title.includes('ROVELA')
    ? title
    : `${title} | ROVELA | Connecting Potential. Creating Value.`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', fullUrl);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }
  }, [fullTitle, description, fullUrl]);

  return null;
};

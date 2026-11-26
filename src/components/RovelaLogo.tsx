import React from 'react';

export type LogoVariant = 'horizontal' | 'stacked' | 'symbol';
export type LogoTheme =
  | 'full-colour'
  | 'reversed'
  | 'on-sage'
  | 'monochrome-dark'
  | 'monochrome-light'
  | 'on-gold';

interface RovelaLogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const THEME_PALETTES: Record<
  LogoTheme,
  { primary: string; diamond: string; wordmark: string; tagline: string }
> = {
  'full-colour': {
    primary: '#163D3A',
    diamond: '#C7A56A',
    wordmark: '#163D3A',
    tagline: '#202B27'
  },
  reversed: {
    primary: '#F6F3EA',
    diamond: '#C7A56A',
    wordmark: '#F6F3EA',
    tagline: '#A8BDB5'
  },
  'on-sage': {
    primary: '#163D3A',
    diamond: '#F6F3EA',
    wordmark: '#163D3A',
    tagline: '#163D3A'
  },
  'monochrome-dark': {
    primary: '#202B27',
    diamond: '#202B27',
    wordmark: '#202B27',
    tagline: '#202B27'
  },
  'monochrome-light': {
    primary: '#F6F3EA',
    diamond: '#F6F3EA',
    wordmark: '#F6F3EA',
    tagline: '#F6F3EA'
  },
  'on-gold': {
    primary: '#163D3A',
    diamond: '#F6F3EA',
    wordmark: '#163D3A',
    tagline: '#163D3A'
  }
};

/**
 * Official ROVELA Symbol SVG Paths (376 x 186 coordinate grid)
 * Calibrated 1:1 against the official ROVELA Brand Identity Guidelines symbol plate.
 */
export const RovelaSymbolSvg: React.FC<{
  primaryColor?: string;
  diamondColor?: string;
  className?: string;
  ariaHidden?: boolean;
}> = ({
  primaryColor = '#163D3A',
  diamondColor = '#C7A56A',
  className = '',
  ariaHidden = true
}) => (
  <svg
    viewBox="0 0 376 186"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
    focusable="false"
  >
    {/* Inner left triangle peak */}
    <path
      d="M 68 184 L 103 136 Q 107 131 111 136 L 152 184 Z"
      fill={primaryColor}
    />
    {/* Left interlocking arch & lower partnership clasp */}
    <path
      d="M 3 184 L 63 95 C 81 67 128 67 148 95 L 207 160 Q 209 162 211 160 L 253 113 L 272 140 Q 273 142 271 145 L 238 181 C 234 184 228 184 222 184 L 192 184 C 186 184 181 184 177 180 L 116 115 C 110 109 100 109 94 116 L 46 184 Z"
      fill={primaryColor}
    />
    {/* Right ascending summit arch */}
    <path
      d="M 135 65 L 173 18 C 190 -2 221 -2 238 18 L 373 184 L 331 184 L 214 46 C 209 41 202 41 198 46 L 164 83 C 155 75 145 69 135 65 Z"
      fill={primaryColor}
    />
    {/* Central concave four-point diamond (Brass Gold spark of shared value) */}
    <path
      d="M 207 68 Q 212 94 234 99 Q 212 104 207 130 Q 202 104 180 99 Q 202 94 207 68 Z"
      fill={diamondColor}
    />
  </svg>
);

export const RovelaLogo: React.FC<RovelaLogoProps> = ({
  variant = 'horizontal',
  theme = 'full-colour',
  showTagline = false,
  className = '',
  size = 'md'
}) => {
  const palette = THEME_PALETTES[theme];

  if (variant === 'symbol') {
    const symbolSizes = {
      sm: 'rovela-logo-symbol--sm',
      md: 'rovela-logo-symbol--md',
      lg: 'rovela-logo-symbol--lg',
      xl: 'rovela-logo-symbol--xl'
    };
    return (
      <span
        className={`rovela-logo rovela-logo--symbol ${symbolSizes[size]} ${className}`}
        role="img"
        aria-label="ROVELA Symbol"
      >
        <RovelaSymbolSvg
          primaryColor={palette.primary}
          diamondColor={palette.diamond}
          className="rovela-logo__svg"
        />
      </span>
    );
  }

  if (variant === 'stacked') {
    return (
      <span
        className={`rovela-logo rovela-logo--stacked rovela-logo--${size} ${className}`}
        role="img"
        aria-label={
          showTagline
            ? 'ROVELA: Connecting Potential. Creating Value.'
            : 'ROVELA'
        }
      >
        <RovelaSymbolSvg
          primaryColor={palette.primary}
          diamondColor={palette.diamond}
          className="rovela-logo__stacked-symbol"
        />
        <span
          className="rovela-logo__wordmark"
          style={{ color: palette.wordmark }}
        >
          ROVELA
        </span>
        {showTagline && (
          <span
            className="rovela-logo__tagline"
            style={{ color: palette.tagline }}
          >
            Connecting Potential. Creating Value.
          </span>
        )}
      </span>
    );
  }

  return (
    <span
      className={`rovela-logo rovela-logo--horizontal rovela-logo--${size} ${className}`}
      role="img"
      aria-label={
        showTagline
          ? 'ROVELA: Connecting Potential. Creating Value.'
          : 'ROVELA'
      }
    >
      <RovelaSymbolSvg
        primaryColor={palette.primary}
        diamondColor={palette.diamond}
        className="rovela-logo__horizontal-symbol"
      />
      <span className="rovela-logo__text-group">
        <span
          className="rovela-logo__wordmark"
          style={{ color: palette.wordmark }}
        >
          ROVELA
        </span>
        {showTagline && (
          <span
            className="rovela-logo__tagline"
            style={{ color: palette.tagline }}
          >
            Connecting Potential. Creating Value.
          </span>
        )}
      </span>
    </span>
  );
};

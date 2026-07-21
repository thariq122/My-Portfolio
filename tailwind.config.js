/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Exact colors from Figma spec ──
        'bg-primary':    '#001924',   // page / section background
        'bg-secondary':  '#1D2733',   // navbar bg + techstack strip
        'bg-footer':     '#272031',   // footer background
        'bg-card':       '#110E1D',   // project cards
        'accent-cyan':   '#0CB0CD',   // SOFTWARE ENGINEER subtitle
        'accent-purple': '#6E68C4',   // project card titles
        'text-primary':  '#FFFFFF',
        'text-muted':    '#D8B7B7',   // experience/projects body text
        'text-nav':      '#D2C6C6',   // navbar + footer nav links
        'card-border':   '#5D5656',   // project card border
        // Alias used in older components
        'card-bg':       '#110E1D',
      },
      fontFamily: {
        // Exact font from Figma spec
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // ── Exact Figma type scale ──
        'figma-xs':   ['13.45px', { lineHeight: '14.53px', letterSpacing: '0.12em'  }],
        'figma-sm':   ['18.42px', { lineHeight: '19.89px', letterSpacing: '0.01em'  }],
        'figma-base': ['20px',    { lineHeight: '25.20px', letterSpacing: '0.01em'  }],
        'figma-md':   ['20.07px', { lineHeight: '21.68px', letterSpacing: '0.01em'  }],
        'figma-tech': ['21.94px', { lineHeight: '27.65px', letterSpacing: '0.01em'  }],
        'figma-nav':  ['28.29px', { lineHeight: '30.55px', letterSpacing: '0.01em'  }],
        'figma-date': ['30.24px', { lineHeight: '1.03'                              }],
        'figma-exp':  ['27.70px', { lineHeight: '29.91px', letterSpacing: '0.01em'  }],
        'figma-expt': ['24.93px', { lineHeight: '26.92px', letterSpacing: '0.01em'  }],
        'figma-proj': ['29.66px', { lineHeight: '32.03px', letterSpacing: '0.01em'  }],
        'figma-foot': ['26.04px', { lineHeight: '28.12px', letterSpacing: '0.01em'  }],
        'figma-role': ['40.73px', { lineHeight: '43.99px', letterSpacing: '0.01em'  }],
        'figma-hero': ['43.51px', { lineHeight: '46.99px', letterSpacing: '0.01em'  }],
      },
      screens: {
        'xs':  '390px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1440px',
      },
      maxWidth: {
        'content': '1440px',
      },
    },
  },
  plugins: [],
}

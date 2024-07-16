import en from './locale/en';
import loadBlocks from './blocks';
import loadCommands from './commands';
import { components } from './blocks/tailwind';
import colors from './colors';


const dark = {
  primary: {...colors.white , foreground: colors.gray },
  secondary: { ...colors.gray, foreground: colors.white },
  background: {
    ...colors.slate,
    DEFAULT: colors.slate[950]
  },
  foreground: colors.white
}

const light = {
  primary: {...colors.gray, 500: "black", DEFAULT: "black", foreground: colors.white },
  secondary: {...colors.white, foreground: colors.gray },
  background: {
    ...colors.white,
    DEFAULT: "white"
  },
  foreground: colors.gray
}


const base = {
  primary: { 
    ...colors.emerald,
    foreground: colors.white
  },
  secondary: {
    ... colors.white,
    foreground: colors.gray  
  },
  background: {
    ...colors.slate,
    DEFAULT: colors.slate[950]
  },
  foreground: colors.white
}

const lightbase = {
  primary: {
    ...colors.emerald,
    foreground: colors.gray[50]
  },
  secondary: { ...colors.gray,
    foreground: colors.white
  },
  background: {
    ...colors.white,
    DEFAULT: colors.white[950]
  },
  foreground: colors.gray
}

const bee = {
  primary: colors.yellow,
  secondary: colors.white,
  background: {
    ...colors.gray,
    DEFAULT: "black"
  },
  foreground: colors.white
}

const lightbee = {
  primary: {...colors.yellow , foreground: colors.white },
  secondary: {...colors.gray, foreground: colors.white },
  background: {
    ...colors.white,
    DEFAULT: "white"
  },
  foreground: colors.gray
}


const lightpastel = {
  primary: colors.fuchsia,
  secondary: colors.gray,
  background: {
    ...colors.sky,
    DEFAULT: colors.sky[950]
  },
  foreground: {
    ...colors.white,
    DEFAULT: colors.gray[50]
  }
}

const darkpastel = {
  primary: colors.fuchsia,
  secondary: colors.white,
  background: {
    ...colors.gray,
    DEFAULT: "black"
  },
  foreground: colors.gray
}

const themes = {
  "light": light,
  "dark": dark,
  "base": base,
  "lightBase": lightbase,
  "bee": bee,
  "lightBee": lightbee
}


export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
      tailwindPlayCdn: 'https://cdn.tailwindcss.com',
      plugins: [],
      config: {
        darkMode: ['selector', '[data-mode="dark"]'],
        theme: {
          screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
          fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
          extend: {
            spacing: {
              '128': '32rem',
              '144': '36rem',
            },
            colors: light,
            borderRadius: {
              '4xl': '2rem',
            }
          }
        }
      },
      cover: `.object-cover { filter: sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) !important; } * {
        cursor: url(https://e2bbdf25-7697-4747-b9cf-9badb086afbf.frederick-ai.com/assets/editor-cursor.png), default;
        *:hover {
          cursor: url(https://e2bbdf25-7697-4747-b9cf-9badb086afbf.frederick-ai.com/assets/editor-cursor.png), pointer;
        }
      }
      `,
      changeThemeText: 'Change Theme',
      openCategory: 'Blog',
    }, ...opts
  };

  // Add blocks
  loadBlocks(editor, options);
  // Add commands
  loadCommands(editor, options);
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n,
  });


  const spinnerContainer = document.createElement('div');
  spinnerContainer.id = 'spinner-container';
  spinnerContainer.id = 'spinner-container';
    spinnerContainer.style.position = 'fixed';
    spinnerContainer.style.top = '50%';
    spinnerContainer.style.left = '50%';
    spinnerContainer.style.transform = 'translate(-50%, -50%)';
    spinnerContainer.style.zIndex = '9999';
    spinnerContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="50" height="50">
        <radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
          <stop offset="0" stop-color="#F547E9"></stop>
          <stop offset=".3" stop-color="#F547E9" stop-opacity=".9"></stop>
          <stop offset=".6" stop-color="#F547E9" stop-opacity=".6"></stop>
          <stop offset=".8" stop-color="#F547E9" stop-opacity=".3"></stop>
          <stop offset="1" stop-color="#F547E9" stop-opacity="0"></stop>
        </radialGradient>
        <circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
          <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2s" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
        </circle>
        <circle transform-origin="center" fill="none" opacity=".2" stroke="#F547E9" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle>
      </svg>`;

  // document.body.appendChild(spinnerContainer);
  const appendTailwindCss = async (frame) => {
    const iframe = frame?.view?.getEl();

    if (!iframe) return;

    const { tailwindPlayCdn, plugins, config, cover } = options;
    const init = () => {
      // @ts-ignore
      iframe.contentWindow.tailwind.config = config;
    }

    const script = document.createElement('script');
    script.src = tailwindPlayCdn + (plugins.length ? `?plugins=${plugins.join()}` : '');
    script.onload = init;

    const cssStyle = document.createElement('style');
    cssStyle.innerHTML = cover;
    iframe.style.visibility = 'hidden';
    // checks iframe is ready before loading Tailwind CSS - issue with firefox
    const f = setInterval(() => {
      const doc = iframe.contentDocument;
      if (doc && doc.readyState && doc.readyState === 'complete') {
        doc.head.appendChild(script);
        doc.head.appendChild(cssStyle);
        // document.body.querySelector(`#spinner-container`).remove();
        setTimeout(() => {
          iframe.style.visibility = 'visible';
        }, 100);
        clearInterval(f);
      }
    }, 100);
  }

  editor.Canvas.getModel()['on']('change:frames', (m, frames) => {
    frames.forEach((frame) => frame.once('loaded', () => appendTailwindCss(frame)));
  });

};



export { components, colors, themes };

//import purify from './purifycss'
import { components, setTheme } from "./blocks/tailwind";
import colors from "./colors";
import themes from './themes';

const getAllComponents = (model, result = []) => {
    result.push(model)
    model.components().each((mod) => getAllComponents(mod, result))
    return result
}

export function generateGradient(primaryColor) {
    // Convert hex color to RGB
    function hexToRgb(hex) {
        hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Convert RGB to hex color
    function rgbToHex(rgb) {
        return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    }

    // Define the number of gradient steps
    const numSteps = 3;

    // Parse the primary color
    const rgbPrimary = hexToRgb(primaryColor);

    if (!rgbPrimary) {
        throw new Error('Invalid hex color');
    }

    // Calculate step sizes for RGB values
    const stepSize = {
        r: Math.floor(rgbPrimary.r / (numSteps + 1)),
        g: Math.floor(rgbPrimary.g / (numSteps + 1)),
        b: Math.floor(rgbPrimary.b / (numSteps + 1))
    };

    // Generate gradient colors
    const gradientColors = [];
    for (let i = 1; i <= numSteps; i++) {
        const newColor = {
            r: rgbPrimary.r - stepSize.r * i,
            g: rgbPrimary.g - stepSize.g * i,
            b: rgbPrimary.b - stepSize.b * i
        };
        gradientColors.push(rgbToHex(newColor));
    }

    // Return the gradient colors in the requested format
    return {
        stop1: primaryColor,
        stop2: gradientColors[0],
        stop3: gradientColors[1],
        stop4: gradientColors[2]
    };
}

export function changeSvgColors(svg, colors) {

    const parser = new DOMParser();
  
    // Parse the SVG string
    const doc = parser.parseFromString(svg, 'image/svg+xml');

    const colorsGradient = generateGradient(colors.stop1);
    const gradients = doc.querySelectorAll('linearGradient');
    gradients.forEach((gradient) => {
        // Get all stop elements within the gradient
        const stops = gradient.querySelectorAll('stop');
        stops.forEach((stop, index) => {
        const stopKey = `stop${index + 1}`;
        if (colorsGradient[stopKey]) {
            stop.setAttribute('stop-color', colorsGradient[stopKey]);
        }
        });
    });
    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
}




const updateThemeColor = (editor, colors) => {
    const wrapper = editor.DomComponents.getWrapper();
    const componentsAll = getAllComponents(wrapper, []);
    const iframe = editor.Canvas.getFrameEl();

    // const [ item ] = themeList.filter((item => item.name === color ))
    // config = {...iframe.contentWindow.tailwind.config }
    const config = {
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
            colors,
            borderRadius: {
              '4xl': '2rem',
            }
          }
        }
    }
    iframe.contentWindow.tailwind.config = config;
    componentsAll.forEach((c) => {
        const cl = c.getAttributes().class;
        if(cl === "logo") {
            const svg = c.toHTML();
            const newSvg = changeSvgColors(svg, { stop1: colors.primary[500] });
            c.replaceWith(newSvg);
        }
    });
}

export default (editor, opts = { color : colors.red }) => {
    const cm = editor.Commands;
    let defaultTheme = themes.dark;

    cm.add('update-theme', {
        run(_, sender, options = { colors :  defaultTheme  }) {
            setTheme(options.colors);
            updateThemeColor(editor, options.colors );
        },
    })

    cm.add('run-theme', {
        run(_, sender, options = { colors :  defaultTheme  }) {
            editor.Commands.run("update-theme", { colors: themes.lightBee })
        },
    })

    cm.add('open-update-theme', {
        run(_, sender) {
            try {
                console.log("editor js:", editor.getJs())
            } catch (error) {
                console.error("Error in open-update-theme command:", error);
            }
        },
    });




    cm.add('get-tailwindCss', {
        run(editor, sender, options = {}) {
            sender?.set && sender.set('active', 0);
            const {
                callback = twcss => console.log(twcss)
            } = options
            let twcss = opts.cover;
            const doc = editor.Canvas.getDocument();

            if (!doc) return;

            doc.head.querySelectorAll('style').forEach(el => {
                el.innerText.includes('tailwind') && (twcss += el.innerText);
            });
            callback(twcss);
        }
    })
}
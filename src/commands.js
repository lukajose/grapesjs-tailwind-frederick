//import purify from './purifycss'
import colors from "./colors";
import themes from './themes';


const colorRegex = new RegExp(
    /(bg|ring)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emarald|teal|cyan|sky|blue|primary|violet|purple|fuchsia|pink|rose)-(\d\d\d)/,
    "g"
);

// const getUpdateThemeModal = (editor) => {
//     const md = editor.Modal
//     const pfx = editor.getConfig().stylePrefix

//     const container = document.createElement('div')

//     const containerBody = document.createElement('div')
//     containerBody.style.padding = '40px 0px'
//     containerBody.style.display = 'flex'
//     containerBody.style.justifyContent = 'center'
//     containerBody.style.flexWrap = 'wrap'
    

//     let selectedTheme
//     themeList.forEach((theme) => {
//         const btnColor = document.createElement('button')
//         btnColor.className = 'change-theme-button'
//         btnColor.style.backgroundColor = theme.color[500]
//         btnColor.onclick = () => (selectedTheme = theme)
//         containerBody.appendChild(btnColor)
//     })

//     const containerFooter = document.createElement('div')

//     const btnEdit = document.createElement('button')
//     btnEdit.innerHTML = 'Update'
//     btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import' + ' btn bg-black'
//     btnEdit.style.float = 'right'
//     btnEdit.style.background = 'black'
//     btnEdit.onclick = () => {
//         updateThemeColor(editor, selectedTheme.name)
//         md.close()
//     }

//     // box-shadow: 0 0 0 2pt #c5c5c575
//     containerFooter.appendChild(btnEdit)

//     container.appendChild(containerBody)
//     container.appendChild(containerFooter)
//     return container
// }

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

    const colorsGradient = generateGradient(colors.stop1);
    // Regular expressions to match the stop colors
    const stop1Regex = /<stop stop-color="#[A-Fa-f0-9]{6}"/g;
    const stop2Regex = /<stop offset="0.73249" stop-color="#[A-Fa-f0-9]{6}"/g;
    const stop3Regex = /<stop offset="1" stop-color="#[A-Fa-f0-9]{6}"/g;
    const stop4Regex = /<stop offset="1" stop-color="#[A-Fa-f0-9]{6}"/g; // 'g' flag to match multiple occurrences

    // Replace the stop colors in the SVG
    let updatedSvg = svg.replace(stop1Regex, `<stop stop-color="${colorsGradient.stop1}"`);
    updatedSvg = updatedSvg.replace(stop2Regex, `<stop offset="0.73249" stop-color="${colorsGradient.stop2}"`);
    updatedSvg = updatedSvg.replace(stop3Regex, `<stop offset="1" stop-color="${colorsGradient.stop2}"`);
    updatedSvg = updatedSvg.replace(stop4Regex, `<stop offset="1" stop-color="${colorsGradient.stop2}"`);
    return updatedSvg;
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
    const defaultTheme = themes.base;

    cm.add('update-theme', {
        run(_, sender, options = { colors :  defaultTheme  }) {
            console.log("options:", options.colors)
            updateThemeColor(editor, options.colors )
        },
    })

    cm.add('open-update-theme', {
        run(_, sender) {
            // updateThemeColor(editor,colors.red)
            editor.runCommand('update-theme', { colors: themes.base });
        },
    })




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
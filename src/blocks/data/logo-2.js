
const themes = {
    frederickClip: {
        stop1: '#A87FFF',
        stop2: '#DC8AF9',
        stop3: '#000000',
        stop4: '#000000'
    },
    frederickBase: {
        stop1: '#1D976C',
        stop2: '#93F9B9',
        stop3: '#000000',
        stop4: '#f3f4f6'
    },
    frederickBest: { 
        stop1: '#000000',
        stop2: '#1e293b',
        stop3: '#d1d5db',
        stop4: '#f3f4f6'
    },
    frederickBestDark: {
        stop1: '#f3f4f6',
        stop2: '#d1d5db',
        stop3: '#d1d5db',
        stop4: '#f3f4f6'
    },
    frederickCan: {
        stop1: '#6E3EB4',
        stop2: '#6E3EB4',
        stop3: '#6E3EB4',
        stop4: '#6E3EB4'
    }
};
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

const svg = `<svg class="logo" width="973" height="964" viewBox="0 0 973 964" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_748_9)">
<path d="M600 174L942.08 766.5H257.92L600 174Z" fill="url(#paint0_linear_748_9)"/>
<path d="M395 174L737.08 766.5H52.92L395 174Z" fill="url(#paint1_linear_748_9)"/>
</g>
<defs>
<linearGradient id="paint0_linear_748_9" x1="995" y1="660.768" x2="205" y2="477.232" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="#666666"/>
</linearGradient>
<linearGradient id="paint1_linear_748_9" x1="790" y1="660.768" x2="4.8332e-05" y2="477.232" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="#666666"/>
</linearGradient>
<clipPath id="clip0_748_9">
<rect width="973" height="964" fill="white"/>
</clipPath>
</defs>
</svg>

`

export const source = changeSvgColors(svg, themes.frederickClip);



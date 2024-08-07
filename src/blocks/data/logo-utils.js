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
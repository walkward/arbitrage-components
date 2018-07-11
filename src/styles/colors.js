export function luminance(hex, luminosity = 0) {
  hex = hex.replace(/[^0-9a-f]/gi, '') // eslint-disable-line
  if (hex.length < 6) hex = hex.split('').map(letter => (letter + letter)).join(''); // eslint-disable-line

  // convert to decimal and change luminosity
  return Array(3).fill().reduce((rgb, cur, i) => {
    let color = parseInt(hex.substr(i * 2, 2), 16);
    color = Math.round(Math.min(Math.max(0, color + (color * luminosity)), 255)).toString(16);
    return rgb += (`00${color}`).substr(color.length); // eslint-disable-line
  }, '#');
}

export const primary = '#0576ff';
export const secondary = '#2a2f41';
export const success = '#5ece65';
export const warning = '#ffc233';
export const alert = '#cc4b37';
export const clear = 'transparent';

export const black = '#2a2f41';
export const white = '#fefefe';
export const lightGray = '#f0f3f6';
export const mediumGray = '#6a7086';

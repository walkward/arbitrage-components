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

export const primary = '#1779ba';
export const secondary = '#767676';
export const success = '#3adb76';
export const warning = '#ffae00';
export const alert = '#cc4b37';

export const black = '#222222';
export const white = '#fefefe';

import { black, white } from './colors';

export const fonts = {
  body: '\'Lato\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
  headers: '\'Poppins\', \'Helvetica Neue\', Helvetica, Arial, sans-serif',
};

export const colors = {
  header: black,
  headerAlt: white,
  body: black,
  bodyAlt: white,
};

export const weight = {
  normal: 400,
  bold: 600,
};

const generate = (fontSize, color, fontWeight, fontFamily, lineHeight = 1.4) => ({
  fontSize: `${fontSize}px`,
  colorAlt: white,
  margin: '0px',
  color,
  lineHeight,
  fontFamily,
  fontWeight,
});

export const body = generate(16, colors.body, weight.normal, fonts.body, 1.6);
export const h1 = generate(48, colors.header, weight.bold, fonts.headers);
export const h2 = generate(40, colors.header, weight.bold, fonts.headers);
export const h3 = generate(31, colors.header, weight.bold, fonts.headers);
export const h4 = generate(25, colors.header, weight.bold, fonts.headers);
export const h5 = generate(20, colors.header, weight.bold, fonts.headers);
export const h6 = generate(16, colors.header, weight.bold, fonts.headers);

import { injectGlobal } from 'styled-components';
import * as typography from './typography';
import { globalMargin, borderColor, globalPadding } from './theme';
import { lightGray, mediumGray } from './colors';

const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: ${typography.body.lineHeight};
    color: ${typography.body.color};
    font-weight: ${typography.weight.normal};
    font-family: ${typography.body.fontFamily};
    background-color: ${lightGray};
    box-sizing: border-box;
  }

  * {
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  img {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  textarea {
    height: auto;
    min-height: 50px;
  }

  select {
    box-sizing: border-box;
    width: 100%;
  }

  pre {
    overflow: auto;
  }

  p {
    margin: 0 0 ${globalMargin} 0;
    text-rendering: optimizeLegibility;
  }

  em,
  i {
    font-style: italic;
    line-height: inherit;
  }

  strong,
  b {
    font-weight: ${typography.weight.bold};
    line-height: inherit;
  }

  ${headers.map(header => `
    ${header} {
      font-size: ${typography[header].fontSize};
      line-height: ${typography[header].lineHeight};
      font-weight: ${typography[header].fontWeight};
      font-family: ${typography[header].fontFamily};
      color: ${typography[header].color};
    }
  `)}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-rendering: optimizeLegibility;
    margin: 0;

    small {
      line-height: 0;
      color: ${mediumGray};
    }
  }

  hr {
    clear: both;
    height: 0;
    margin: ${globalMargin} auto;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid ${borderColor};
    border-left: 0;
  }

  ul {
    list-style-type: disc;
  }

  ul,
  ol,
  dl {
    margin-bottom: ${globalMargin};
    list-style-position: outside;
    line-height: 1.6;

    ul,
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  dl {
    dt {
      margin-bottom: 0.3rem;
      font-weight: ${typography.weight.bold};
    }
  }

  blockquote {
    margin: 0 0 ${globalMargin};
    padding: 0.5625rem 1.25rem 0 1.1875rem;
    border-left: 1px solid ${borderColor};
    color: ${mediumGray};
  }

  cite {
    display: block;
    font-size: 0.8125rem;
    color: ${mediumGray};

    &:before {
      content: "— ";
    }
  }

  abbr,
  abbr[title] {
    border-bottom: 1px dotted ${borderColor};
    cursor: help;
    text-decoration: none;
  }

  figure {
    margin: 0;
  }

  code {
    padding: 0.125rem 0.3125rem 0.0625rem;
    font-family: Consolas, "Liberation Mono", Courier, monospace;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  abbr[title]:after {
    content: " (" attr(title) ")";
  }

  pre,
  blockquote {
    page-break-inside: avoid;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  fieldset {
    border-color: ${borderColor};
    border-width: 1px;
    border-style: solid;
    padding-left: ${globalPadding};
    padding-right: ${globalPadding};
  }

  .margin-0 {
    margin: 0 !important;
  }
`;

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';

storiesOf('Typography', module)
  .add('Defaults', () => (
    <Flex alignItems="center" flexDirection="column">
      <Box width={1024} p={3}>
        <h3>Headers</h3>
        <hr />

        <h1>Sample Header (h1)</h1>
        <h2>Sample Header (h2)</h2>
        <h3>Sample Header (h3)</h3>
        <h4>Sample Header (h4)</h4>
        <h5>Sample Header (h5)</h5>
        <h6>Sample Header (h6)</h6>

        <br />
        <h3>Paragraphs</h3>
        <hr />

        <p>
          This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you
          know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong> You can also use em to <em>italicize your words.</em>
        </p>

        <br />
        <h3>Links</h3>
        <hr />

        <p>Links are very standard, and the color is preset to the Foundation primary color. <a href="global.html">Learn more about Foundation's global colors.</a></p>

        <br />
        <h3>Small Text</h3>
        <hr />

        <h5>Header w/ <small>small text</small></h5>

        <br />
        <h3>Unordered List</h3>
        <hr />

        <ul>
          <li>List item with a much longer description or more content.</li>
          <li>
            List item
            <ul>
              <li>Nested list item</li>
              <li>Nested list item</li>
            </ul>
          </li>
          <li>List item</li>
        </ul>

        <br />
        <h3>Ordered List</h3>
        <hr />

        <ol>
          <li>Cheese (essential)</li>
          <li>
            Bacon
            <ol>
              <li>Normal bacon</li>
            </ol>
          </li>
          <li>Sausage</li>
        </ol>

        <br />
        <h3>Blockquotes</h3>
        <hr />

        <blockquote>Those people who think they know everything are a great annoyance to those of us who do.<cite>Isaac Asimov</cite></blockquote>

        <br />
        <h3>Code</h3>
        <hr />

        <p>Remember to escape angle brackets when printing HTML: <code>&lt;div&gt;</code></p>

      </Box>
    </Flex>
  ));

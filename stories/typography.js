import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Column } from '../src/components/Grid';
import Card from '../src/components/Card';

storiesOf('Typography', module)
  .add('Defaults', () => (
    <Row pt={3}>
      <Column>

        <Card>
          <h5>Headers</h5>
          <hr />
          <h1>Sample Header (h1)</h1>
          <h2>Sample Header (h2)</h2>
          <h3>Sample Header (h3)</h3>
          <h4>Sample Header (h4)</h4>
          <h5>Sample Header (h5)</h5>
          <h6>Sample Header (h6)</h6>
        </Card>

        <Card>
          <h5>Paragraphs</h5>
          <hr />
          <p>
          This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you
          know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong> You can also use em to <em>italicize your words.</em>
          </p>
        </Card>

        <Card>
          <h5>Links</h5>
          <hr />
          <p>Links are very standard, and the color is preset to the Foundation primary color. <a href="global.html">Learn more about Foundation's global colors.</a></p>
        </Card>

        <Card>
          <h5>Small Text</h5>
          <hr />
          <h5>Header w/ <small>small text</small></h5>
        </Card>

        <Card>
          <h5>Unordered List</h5>
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
        </Card>

        <Card>
          <h5>Ordered List</h5>
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
        </Card>

        <Card>
          <h5>Blockquotes</h5>
          <hr />
          <blockquote>Those people who think they know everything are a great annoyance to those of us who do.<cite>Isaac Asimov</cite></blockquote>
        </Card>

        <Card>
          <h5>Code</h5>
          <hr />
          <p>Remember to escape angle brackets when printing HTML: <code>&lt;div&gt;</code></p>
        </Card>

      </Column>
    </Row>
  ));

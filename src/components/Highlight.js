// @flow

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

type Props = {|
  code: string,
|};

const Highlight = ({ code }: Props) => (
  <div>
    <SyntaxHighlighter language="json" showLineNumbers useInlineStyles={false}>
      {code}
    </SyntaxHighlighter>

    <style jsx global>{`
      .hljs {
        display: block;
        overflow-x: auto;
        padding: 2em;
        font-size: 0.8em;
        color: #000;
        background: #f8f8ff;

        @media screen and (max-width: 820px) {
          padding: 1em;
          font-size: 0.7em;
          min-height: inherit;
          max-height: 600px;
        }

        code {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
        }

        .hljs-comment,
        .hljs-quote {
          color: #408080;
          font-style: italic;
        }

        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-literal,
        .hljs-subst {
          color: #954121;
        }

        .hljs-number {
          color: #40a070;
        }

        .hljs-string,
        .hljs-doctag {
          color: #219161;
        }

        .hljs-selector-id,
        .hljs-selector-class,
        .hljs-section,
        .hljs-type {
          color: #19469d;
        }

        .hljs-params {
          color: #00f;
        }

        .hljs-title {
          color: #458;
          font-weight: bold;
        }

        .hljs-tag,
        .hljs-name,
        .hljs-attribute {
          color: #000080;
          font-weight: normal;
        }

        .hljs-variable,
        .hljs-template-variable {
          color: #008080;
        }

        .hljs-regexp,
        .hljs-link {
          color: #b68;
        }

        .hljs-symbol,
        .hljs-bullet {
          color: #990073;
        }

        .hljs-built_in,
        .hljs-builtin-name {
          color: #0086b3;
        }

        .hljs-meta {
          color: #999;
          font-weight: bold;
        }

        .hljs-deletion {
          background: #fdd;
        }

        .hljs-addition {
          background: #dfd;
        }

        .hljs-emphasis {
          font-style: italic;
        }

        .hljs-strong {
          font-weight: bold;
        }
      }
    `}</style>
  </div>
);

export default Highlight;

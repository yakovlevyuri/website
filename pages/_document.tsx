import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';

interface Props {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogType: string;
  ogUrl: string;
  ogImage: string;
  ogDescription: string;
  viewport: string;
  faviconUrl: string;
}

const Meta = ({
  title,
  description,
  keywords,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
  ogDescription,
  viewport,
  faviconUrl,
}: Props) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content={viewport} />

    <meta property="og:title" content={ogTitle} />
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:description" content={ogDescription} />

    <link rel="shortcut icon" href={faviconUrl} />
  </Head>
);

class MyDocument extends Document {
  public render() {
    return (
      <html lang="en">
        <Meta
          title="Hi, my name is Yuri and I'm a Full Stack JavaScript Developer"
          description="Yuri is a JavaScript anarchist. He doesn't move tickets in Jira
            and make mistakes in Pull Requests on purpose just to test colleagues."
          keywords="Personal website, Javascript, React.js, Redux, Apollo Client, GraphQL, Node.js"
          ogTitle="Hi, my name is Yuri and I'm a Full Stack JavaScript Developer"
          ogType="website"
          ogUrl="https://mynameisyuri.com/"
          ogImage="https://mynameisyuri.com/static/images/meta.jpg"
          ogDescription="Yuri is a JavaScript anarchist. He doesn't move tickets in Jira
            and make mistakes in Pull Requests on purpose just to test colleagues."
          viewport="width=device-width, initial-scale=1, shrink-to-fit=no"
          faviconUrl="/static/images/favicon.ico"
        />
        <body>
          <Main />
          <NextScript />
        </body>

        <style jsx global>{`
          *,
          :after,
          :before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-smoothing: antialiased;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          html,
          body {
            font-size: 16px;
          }

          body {
            margin: 20px;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
          }

          @media screen and (max-width: 820px) {
            body {
              margin: 10px;
            }
          }

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #4290f7;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #4290f7, 0 0 5px #4290f7;
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}</style>
      </html>
    );
  }
}
export default MyDocument;

import Document, { Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

interface Props {
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

const Meta: FC<Props> = ({
  description,
  keywords,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
  ogDescription,
  viewport,
  faviconUrl,
}) => (
  <Head>
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
          description="Yuri is a JavaScript anarchist. He doesn't move tickets in Jira
            and make mistakes in Pull Requests on purpose just to test colleagues."
          keywords="Personal website, Javascript, React.js, Redux, Apollo Client, GraphQL, Node.js"
          ogTitle="Hi, my name is Yuri and I'm a Full Stack JavaScript Developer"
          ogType="website"
          ogUrl="https://mynameisyuri.com/"
          ogImage="https://mynameisyuri.com/images/meta.jpg"
          ogDescription="Yuri is a JavaScript anarchist. He doesn't move tickets in Jira
            and make mistakes in Pull Requests on purpose just to test colleagues."
          viewport="width=device-width, initial-scale=1, shrink-to-fit=no"
          faviconUrl="/images/favicon.ico"
        />
        <body>
          <Main />
          <NextScript />

          <script
            async
            defer
            src="https://cdn.simpleanalytics.io/hello.js"
          ></script>
          <noscript>
            <img src="https://api.simpleanalytics.io/hello.gif" alt="" />
          </noscript>
        </body>
      </html>
    );
  }
}
export default MyDocument;

// @flow

import React from 'react';
import Head from 'next/head';

type Props = {
  title: string,
  description: string,
  keywords: string,
  ogTitle: string,
  ogType: string,
  ogUrl: string,
  ogImage: string,
  ogDescription: string,
  viewport: string,
  faviconUrl: string,
};

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

export default Meta;

import React, { FC } from 'react';
import NextHead from 'next/head';
import { SiteSettings } from '../../graphql/types/types.generated';

const { GRAPHCDN_BASE_URL } = process.env;
const DIVIDER = '·';

interface HeadProps {
  siteSettings: SiteSettings;
  subpages?: string[];
}

const Head: FC<HeadProps> = (props) => {
  const { siteSettings, subpages } = props;
  const title = `${siteSettings?.siteTitle}${
    subpages ? ` ${DIVIDER} ${subpages.join(` ${DIVIDER} `)}` : ''
  }`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="twitter:title" content={title} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta
        name="twitter:description"
        content={siteSettings?.metaDescription}
      />
      <meta name="description" content={siteSettings?.metaDescription} />
      <link rel="dns-prefetch" href={GRAPHCDN_BASE_URL} />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪐</text></svg>"
      />
    </NextHead>
  );
};

export default Head;

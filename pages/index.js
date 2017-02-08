import React from 'react';
import Head from 'next/head';

import Accordion from '../components/accordion';

const data = [
  {
    open: true,
    title: "Open1",
    alternateTitle: "Close1",
    content: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt
              mollit anim id est laborum.`
  },
  {
    open: false,
    title: "Open2",
    alternateTitle: "Close2",
    content: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt
              mollit anim id est laborum.`
  }
];
export default () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="static/index.css" />
      </Head>
      <Accordion data={data} />
    </div>
  );
}

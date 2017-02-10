import React from 'react';
import Head from 'next/head';

import Accordion from '../components/accordion';

const data1 = {
  initialPanelState: true,
  title: 'Title'
};

const data2 = {
  title: 'Open',
  alternateTitle: 'Close',
  content: ` This is a content for second accordion
                  `
};

const Content = () => (
  <div className="container1">
    <h1>This is a content for first accordion</h1>
    <dl className="rs-definitionlist">
      <dt className="rs-definitionlist__term">
        PAYBACK Kartennummer für REWE eBon:
      </dt>
      <dd className="rs-definitionlist__item">paybackNumber</dd>
    </dl>
    <p>
      Einfach die PAYBACK Karte beim Kauf an der Kasse vorlegen.
                Wenige Minuten später kommt der digitalen Kassenbon per E-Mail an
                die im REWE Kundenkonto hinterlegte E-Mail-Adresse.
                Diese E-Mail-Adresse kann im Kundenkonto unter »Meine Daten« bearbeitet werden.
                Weitere Informationen unter Fragen und Antworten und Allgemeinen
                Geschäftsbedingungen/Datenschutz.
    </p>
  </div>
);

const Content2 = 'This is a content for second accordion';
export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="static/index.css" />
    </Head>
    <Accordion {...data1}>
      <Content />
    </Accordion>
    <style jsx>
      {`
        p {
          color: gold;
        }
      `}
    </style>
    <Accordion {...data2}>
      This is a content for second accordion
    </Accordion>
  </div>
);

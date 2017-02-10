# react-accordion
ReactJS based Opiniated Accordion component

## Usage:
```js
export const data =
  {
    initialPanelState: false,
    title: 'Open',
    alternateTitle: 'Close'
  };

export const Content = () => (
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
```

```jsx
import React from 'react';
import data from '../data';
import Content from '../Content';
import Accordion from '../components/accordion';

<Accordion {...data}>
  <Content />
</Accordion>
```

import React from 'react';
import PropTypes from 'prop-types'; // ES6

import classNames from 'classnames';

const Accordion = ({ alternateTitle, title, children, initialPanelState }) => {
  const [open, setOpen] = React.useState(initialPanelState);

  const renderTitle = () => {
    const titleToggleClass = classNames(
      'fa',
      open ? 'fa-angle-down fa-rotate-180' : 'fa-angle-down'
    );
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className="title" onClick={() => setOpen(!open)}>
        <div className="arrow-wrapper">
          <i className={titleToggleClass} />
        </div>
        <span className="title-text">
          {open && alternateTitle !== '' ? alternateTitle : title}
        </span>
      </div>
    );
  };

  const renderContent = () => {
    const contentParentClass = classNames(
      'content',
      open ? 'content-open' : null
    );
    const contentTextClass = classNames(
      'content-text',
      open ? 'content-text-open' : null
    );
    return (
      <div className={contentParentClass}>
        <div className={contentTextClass} >
          {children}
        </div>
      </div>
    );
  };


  return (
    <div className="accordion">
      {renderTitle()}
      {renderContent()}
    </div>
  );
};

Accordion.propTypes = {
  alternateTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  initialPanelState: PropTypes.bool
};

Accordion.defaultProps = { alternateTitle: '', initialPanelState: false };

export default Accordion;

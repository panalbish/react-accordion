import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { open: null };
    this.onAccordionClick = this.onAccordionClick.bind(this);
  }

  componentWillMount() {
    const { initialPanelState } = this.props;
    this.setState({ open: initialPanelState });
  }

  onAccordionClick() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  renderTitle() {
    const { open } = this.state;
    const { alternateTitle, title } = this.props;
    const titleToggleClass = classNames(
      'fa',
      open ? 'fa-angle-down fa-rotate-180' : 'fa-angle-down'
    );
    return (
      <div className="title" onClick={this.onAccordionClick}>
        <div className="arrow-wrapper">
          <i className={titleToggleClass} />
        </div>
        <span className="title-text">
          {open && alternateTitle !== '' ? alternateTitle : title}
        </span>
      </div>
    );
  }

  renderContent() {
    const { open } = this.state;
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
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="accordion">
        {this.renderTitle()}
        {this.renderContent()}
      </div>
    );
  }
}

Accordion.propTypes = {
  alternateTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  initialPanelState: PropTypes.bool
};

Accordion.defaultProps = { alternateTitle: '', initialPanelState: false };

export default Accordion;

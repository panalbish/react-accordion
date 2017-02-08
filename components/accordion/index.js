import React, { Component, PropTypes } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { accordionItems: [] };
    this.onAccordionClick = this.onAccordionClick.bind(this);
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({ accordionItems: data });
  }

  onAccordionClick(i) {
    const {accordionItems} = this.state;
    const newAccordion = accordionItems.slice();
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  }

  render() {
    const { accordionItems } = this.state;
    const sections = accordionItems.map(i => (
      <div key={accordionItems.indexOf(i)}>
        <div className="title" onClick={() => this.onAccordionClick(i)}>
          <div className="arrow-wrapper">
            <i
              className={
                i.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"
              }
            />
          </div>
          <span className="title-text">
            {i.open ? i.alternateTitle : i.title}
          </span>
        </div>
        <div className={i.open ? "content content-open" : "content"}>
          <div
            className={
              i.open ? "content-text content-text-open" : "content-text"
            }
          >
            {i.content}
          </div>
        </div>
      </div>
    ));

    return (
      <div className="accordion">
        {sections}
      </div>
    );
  }
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      alternateTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      open: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Accordion;

import './tabs.scss';
import React, {Component} from 'react';


class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      labels: []
    };
  }

  componentWillMount() {
    this.extractLabels();
  }

  extractLabels() {
    const labels = React.Children.map(this.props.children, child => {
      return {
        label: child.props.label,
        active: child.props.active
      };
    });

    this.setState({labels})
  }

  changeTab(index) {
    this.setState({active: index});
  }

  renderLabels() {
    const items = this.state.labels.map((item, index) => {
      return (
        <li key={index}
          onClick={this.changeTab.bind(this, index)}
          className="label-list-item">
          {item.label}
        </li>
      );
    });

    return (
      <ul className="tabs-label-list">
        {items}
      </ul>
    );
  }

  renderActiveTab() {
    const {active} = this.state;
    return this.props.children[active].props.children;
  }

  render() {
    return (
      <div className="tab-component">
        {this.renderLabels()}
        {this.renderActiveTab()}
      </div>
    );
  }

}

export default Tabs;

import React from 'react';
import confLogo from '../images/pexels.jpg';
import logo from '../images/foto.jpg';
import "../styles/Badge.css";

class Badge extends React.Component {
  render() {
    const firstName = "Rene";
    const lastName = "HS";

    return (<div className="Badge">
      <div className="Badge__header">
        <img src= {confLogo} alt={"conf logo"}/>
      </div>
      <div className="Badge__section-name">
        <img className="Badge__avatar" src={logo} alt={"Conf logo 2"}/>
        <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
      </div>
      <div className="Badge__section-info">
        <h3>{this.props.job}</h3>
        <div>{this.props.twitter}</div>
        <div className="Badge__footer">{this.props.footTitle}</div>
      </div>

    </div>)
  }
}
export default Badge;
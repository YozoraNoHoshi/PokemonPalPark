import React, { PureComponent } from 'react';
import { Link } from '@reach/router';
import MenuButton from '../../atoms/MenuButton';

class ChangeScreenButton extends PureComponent {
  render() {
    let { to, ...prop } = this.props;
    console.log(prop);
    return (
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: 'initial',
          margin: 0,
          padding: 0,
          width: 'inherit'
        }}
      >
        <MenuButton {...prop}>{this.props.children}</MenuButton>
      </Link>
    );
  }
}

ChangeScreenButton.defaultProps = { to: '', children: '' };

export default ChangeScreenButton;

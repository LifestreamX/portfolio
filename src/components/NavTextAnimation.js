import React, { Component } from 'react';
import Typical from 'react-typical';

class SidebarText extends React.Component {
  render() {
    return (
      <Typical
        steps={[' ', 2000, 'Welcome ', 2000, 'To My', 2000, 'Portfolio!', 2000]}
        loop={1}
        wrapper='h1'
      />
    );
  }
}

export default SidebarText;

import React, { Component } from 'react';
import Typical from 'react-typical';

class SidebarText extends React.Component {
  render() {
    return (
      <Typical
        steps={[' ', 1000, 'Welcome ', 2000, 'To My', 1000, 'Portfolio!', 1000]}
        loop={1}
        wrapper='h1'
      />
    );
  }
}

export default SidebarText;

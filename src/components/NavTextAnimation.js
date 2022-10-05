import React, { Component } from 'react';
import Typical from 'react-typical';

class SidebarText extends React.Component {
  render() {
    return (
      <Typical
        steps={[' ',  500, 'Welcome ', 1000, 'To My', 1000, 'Portfolio!', 500]}
        loop={1}
        wrapper='h5'
      />
    );
  }
}

export default SidebarText;

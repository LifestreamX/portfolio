import React, { Component } from 'react';
import Typical from 'react-typical';

class SidebarText extends React.Component {
  render() {
    return (
      <Typical
        steps={['Hello', 3000, "i'm", 3000, 'Tyler!', 3000]}
        loop={Infinity}
        wrapper='p'
      />
    );
  }
}

export default SidebarText;

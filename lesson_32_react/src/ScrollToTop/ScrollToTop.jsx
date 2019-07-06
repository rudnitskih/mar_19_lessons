import React from "react";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const initialScrollBehaviour = document.body.style.scrollBehaviour;

      document.body.style.scrollBehaviour = "auto";
      window.scrollTo(0, 0);

      document.body.style.scrollBehaviour = initialScrollBehaviour;
    }
  }

  render() {
    return this.props.children;
  }
}

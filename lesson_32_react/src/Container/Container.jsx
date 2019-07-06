import React from "react";
import "./Container.css";

export function Container(props) {
  return <div className="container">{props.children}</div>;
}

class ScrollToTop extends Component {
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

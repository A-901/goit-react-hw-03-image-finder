import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

class Button extends Component {
  static propTypes = {
    onLoadMore: PropTypes.func.isRequired,
  };

  render() {
    const loadMoreIMG = this.props.onLoadMore;
    return (
      <button type="button" className={styles.Button} onClick={loadMoreIMG}>
        Load more
      </button>
    );
  }
}

export default Button;
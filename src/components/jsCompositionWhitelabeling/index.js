import styles from './styles.less';

import React, { Component } from 'react';

export default class JsCompositionWhitelabeling extends Component {

  render() {
  	var isWhiteLabeled = true;
    return (
      <div className={ styles.root }>
      <span>Button: </span><div className={isWhiteLabeled ? 'ubsf_button ' + styles.button : styles.button} />
      <br />
      <span>Input: </span><input className={isWhiteLabeled ? styles.whiteLabeledInput : styles.input} />
        <p className={ styles.text }>Scoped Selectors</p>
      </div>
    );
  }

};

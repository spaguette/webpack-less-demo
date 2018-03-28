import React, { PropTypes } from 'react';

import { CssPreprocessors } from 'constants/CssPreprocessors';

import lessStyles from './styles.less';
import scssStyles from './styles.scss';

function JsCompositionWhitelabeling({ preprocessorToUse }) {
  	const isWhiteLabeled = true;

    const styles = preprocessorToUse === CssPreprocessors.SCSS ? scssStyles : lessStyles;

    return (
      <div className={ styles.root }>
      <span>Button: </span><div className={isWhiteLabeled ? 'ubsf_button ' + styles.button : styles.button} />
      <br />
      <span>Input: </span><input className={isWhiteLabeled ? styles.whiteLabeledInput : styles.input} />
        <p className={ styles.text }>Scoped Selectors</p>
      </div>
    );
}

JsCompositionWhitelabeling.propTypes = {
    preprocessorToUse: PropTypes.oneOf([CssPreprocessors.SCSS, CssPreprocessors.LESS])
};

JsCompositionWhitelabeling.defaultProps = {
    preprocessorToUse: CssPreprocessors.LESS
};

export default JsCompositionWhitelabeling;

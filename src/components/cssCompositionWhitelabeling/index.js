import React, { PropTypes } from 'react';

import { CssPreprocessors } from 'constants/CssPreprocessors';

import sharedStyles from 'sharedStyles/layout/styles.css';
import lessStyles from './styles.less';
import scssStyles from './styles.scss';

function CssCompositionWhitelabeling({ preprocessorToUse }) {
    const styles = preprocessorToUse === CssPreprocessors.SCSS ? scssStyles : lessStyles;

    return (
      <div className={ sharedStyles.demoBox }>
          <span>Whitelabeled Input: </span><input className={styles.whiteLabeledInput} />
          <br /><br />
       	  <span>Not Whitelabeled Input: </span><input className={styles.input} />
      </div>
    );
}

CssCompositionWhitelabeling.propTypes = {
    preprocessorToUse: PropTypes.oneOf([CssPreprocessors.SCSS, CssPreprocessors.LESS])
};

CssCompositionWhitelabeling.defaultProps = {
    preprocessorToUse: CssPreprocessors.LESS
};

export default CssCompositionWhitelabeling;

import React, {PropTypes} from 'react';

import {CssPreprocessors} from 'constants/CssPreprocessors';

import sharedStyles from 'sharedStyles/layout/styles.css';
import lessStyles from './styles.less';
import scssStyles from './styles.scss';

function JsCompositionWhitelabeling({preprocessorToUse}) {
    const styles = preprocessorToUse === CssPreprocessors.SCSS ? scssStyles : lessStyles;

    return (
        <div className={sharedStyles.demoBox}>
            <span>Whitelabeled Button: </span>
            <div className={`ubsf_button ${styles.button}`} />
            <br /><br />
            <span>Not Whitelabeled Button: </span>
            <div className={styles.button} />
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

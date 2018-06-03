import React from 'react';

import sharedStyles from 'sharedStyles/layout/styles.css';
import styles from './styles.less';

function CssCompositionWhitelabeling() {
    return (
        <div className={sharedStyles.demoBox}>{/*eslint-disable-line css-modules/no-undef-class*/}
            <span>Whitelabeled Input: </span><input className={styles.whiteLabeledInput} />
            <br /><br />
            <span>Not Whitelabeled Input: </span><input className={styles.input} />
        </div>
    );
}

export default CssCompositionWhitelabeling;

import React from 'react';

import sharedStyles from 'sharedStyles/layout/styles.css';
import styles from './styles.less';

function JsCompositionWhitelabeling() {
    return (
        <div className={sharedStyles.demoBox}>{/*eslint-disable-line css-modules/no-undef-class*/}
            <span>Whitelabeled Button: </span>
            <div className={`pref_button ${styles.button}`} />
            <br /><br />
            <span>Not Whitelabeled Button: </span>
            <div className={styles.button} />
        </div>
    );
}

export default JsCompositionWhitelabeling;

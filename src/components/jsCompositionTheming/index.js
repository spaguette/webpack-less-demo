import React from 'react';

import sharedStyles from 'sharedStyles/layout/styles.css';
import styles from './styles.less';

const JsCompositionTheming = () => (
    <div className={sharedStyles.demoBox}>{/*eslint-disable-line css-modules/no-undef-class*/}
        <span>Themed Button: </span>
        <div className={`pref_button ${styles.button}`}/>
        <br/><br/>
        <span>Not Themed Button: </span>
        <div className={styles.button}/>
    </div>
);

export default JsCompositionTheming;

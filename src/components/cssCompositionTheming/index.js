import React from 'react';

import sharedStyles from 'sharedStyles/layout/styles.css';
import styles from './styles.less';

const CssCompositionTheming = () => (
    <div className={sharedStyles.demoBox}>{/*eslint-disable-line css-modules/no-undef-class*/}
        <span>Themed Input: </span><input className={styles.themedInput}/>
        <br/><br/>
        <span>Not themed Input: </span><input className={styles.input}/>
    </div>
);

export default CssCompositionTheming;

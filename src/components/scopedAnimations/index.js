import React from 'react';

import styles from './styles.less';

function ScopedAnimations() {
    return (
        <div className={styles.root}>
            <div className={styles.ball} />
        </div>
    );
}

export default ScopedAnimations;
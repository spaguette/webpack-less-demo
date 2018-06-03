import React from 'react';

import CssCompositionWhitelabeling from './index';

import js from '!!raw-loader!./index.js';
import styles from '!!raw-loader!./styles.less';
import Snippet from 'components/shared/snippet/index.js';

function CssCompositionWhitelabelingDemo() {
    const files = [
        { name: 'index.js', source: js },
        { name: 'styles.less', source: styles }
    ];

    return (
        <Snippet files={files}>
            <CssCompositionWhitelabeling />
        </Snippet>
    );
}

export default CssCompositionWhitelabelingDemo;
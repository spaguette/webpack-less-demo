import React from 'react';

import JsCompositionWhitelabeling from './index';

import js from '!!raw-loader!./index.js';
import styles from '!!raw-loader!./styles.less';
import Snippet from 'components/shared/snippet/index.js';

function JsCompositionWhitelabelingDemo() {
    const files = [
        { name: 'index.js', source: js },
        { name: 'styles.less', source: styles }
    ];

    return (
        <Snippet files={files}>
            <JsCompositionWhitelabeling />
        </Snippet>
    );
}

export default JsCompositionWhitelabelingDemo;
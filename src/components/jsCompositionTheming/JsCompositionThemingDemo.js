import React from 'react';

import JsCompositionTheming from './index';

import js from '!!raw-loader!./index.js';
import styles from '!!raw-loader!./styles.less';
import Snippet from 'components/shared/snippet/index.js';

const files = [
    { name: 'index.js', source: js },
    { name: 'styles.less', source: styles }
];

const JsCompositionThemingDemo = () => (
    <Snippet files={files}>
        <JsCompositionTheming />
    </Snippet>
);

export default JsCompositionThemingDemo;
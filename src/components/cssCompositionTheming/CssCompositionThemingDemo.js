import React from 'react';

import CssCompositionTheming from './index';

import js from '!!raw-loader!./index.js';
import styles from '!!raw-loader!./styles.less';
import Snippet from 'components/shared/snippet/index.js';

const files = [
    { name: 'index.js', source: js },
    { name: 'styles.less', source: styles }
];

const CssCompositionThemingDemo = () => (
    <Snippet files={files}>
        <CssCompositionTheming />
    </Snippet>
);

export default CssCompositionThemingDemo;
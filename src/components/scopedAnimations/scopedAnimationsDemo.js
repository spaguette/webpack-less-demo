import React from 'react';

import ScopedAnimations from './index';
import Snippet from 'components/shared/snippet/index';
import js from '!!raw-loader!./index.js';
import less from '!!raw-loader!./styles.less';
import animationsCss from '!!raw-loader!sharedStyles/animation/styles.css';

const files = [
    { name: 'index.js', source: js },
    { name: 'styles.less', source: less },
    { name: 'shared/styles/animation/styles.css', source: animationsCss }
];

function ScopedAnimationsDemo() {
        return (
            <Snippet files={files}>
                <ScopedAnimations />
            </Snippet>
        );
}

export default ScopedAnimationsDemo;
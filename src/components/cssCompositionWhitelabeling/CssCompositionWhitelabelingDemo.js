import React, {PropTypes} from 'react';

import CssCompositionWhitelabeling from './index';
import {CssPreprocessors} from 'constants/CssPreprocessors';

import js from '!!raw!./index.js';
import less from '!!raw!./styles.less';
import scss from '!!raw!./styles.scss';
import Snippet from 'components/shared/snippet/index.js';

function CssCompositionWhitelabelingDemo({preprocessorToUse}) {
    const stylesSource = preprocessorToUse === CssPreprocessors.SCSS ? scss : less;

    const files = [
        { name: 'index.js', source: js },
        { name: `styles.${preprocessorToUse}`, source: stylesSource }
    ];

    return (
        <Snippet files={files}>
            <CssCompositionWhitelabeling preprocessorToUse={preprocessorToUse} />
        </Snippet>
    );
}

CssCompositionWhitelabelingDemo.propTypes = {
    preprocessorToUse: PropTypes.oneOf([CssPreprocessors.SCSS, CssPreprocessors.LESS])
};

CssCompositionWhitelabelingDemo.defaultProps = {
    preprocessorToUse: CssPreprocessors.LESS
};

export default CssCompositionWhitelabelingDemo;
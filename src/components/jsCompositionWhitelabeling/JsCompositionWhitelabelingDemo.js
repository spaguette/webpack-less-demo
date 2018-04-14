import React from 'react';
import PropTypes from 'prop-types';

import JsCompositionWhitelabeling from './index';
import {CssPreprocessors} from 'constants/CssPreprocessors';

import js from '!!raw-loader!./index.js';
import less from '!!raw-loader!./styles.less';
import scss from '!!raw-loader!./styles.scss';
import Snippet from 'components/shared/snippet/index.js';

function JsCompositionWhitelabelingDemo({ preprocessorToUse }) {
    const stylesSource = preprocessorToUse === CssPreprocessors.SCSS ? scss : less;

    const files = [
        { name: 'index.js', source: js },
        { name: `styles.${preprocessorToUse}`, source: stylesSource }
    ];

    return (
        <Snippet files={files}>
            <JsCompositionWhitelabeling preprocessorToUse={preprocessorToUse} />
        </Snippet>
    );
}

JsCompositionWhitelabelingDemo.propTypes = {
    preprocessorToUse: PropTypes.oneOf([CssPreprocessors.SCSS, CssPreprocessors.LESS])
};

JsCompositionWhitelabelingDemo.defaultProps = {
    preprocessorToUse: CssPreprocessors.LESS
};

export default JsCompositionWhitelabelingDemo;
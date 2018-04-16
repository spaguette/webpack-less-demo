import React from 'react';
import PropTypes from 'prop-types';

import styles from 'sharedStyles/whiteLabeling/index.less';

const ThemeKeys = {
    DEFAULT: 'default',
    OAO: 'oao',
    CUSTOM: 'custom',
    BLACK_AND_WHITE: 'blackAndWhite'
};

function applyTheme(themeKey, child) {
    return (
        <div className={styles[themeKey]}>
            {child}
        </div>
    );
}

applyTheme.propTypes = {
    themeKey: PropTypes.string,
    children: PropTypes.element
};

export {
    ThemeKeys
};

export default applyTheme;
import whiteLabelStyles from 'sharedStyles/whiteLabeling/index.less';

const WhitelabelStyleNames = {
    DEFAULT: 'default',
    OAO: 'oao',
    CUSTOM: 'custom'
};

const CustomColors = {
    BUTTON_BG: '#fef000',
    INPUT_TEXT: '#fff300'
};

const jssStyles = {
    'pref_button': {
        'background-color': CustomColors.BUTTON_BG
    },
    [whiteLabelStyles.input]: { //eslint-disable-line
        color: CustomColors.INPUT_TEXT
    }
};

export {
    WhitelabelStyleNames,
    jssStyles
};
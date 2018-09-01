import themeStyles from 'sharedStyles/themes/index.less';

const ThemeName = {
    DEFAULT: 'default',
    BLUE: 'blue',
    CUSTOM: 'custom'
};

const CustomColor = {
    BUTTON_BG: '#fef000',
    INPUT_TEXT: '#fff300'
};

const jssStyles = {
    'pref_button': {
        'background-color': CustomColor.BUTTON_BG
    },
    [themeStyles.input]: { //eslint-disable-line
        color: CustomColor.INPUT_TEXT
    }
};

export {
    ThemeName,
    jssStyles
};
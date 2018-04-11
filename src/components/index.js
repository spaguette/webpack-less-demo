import React, {Component} from 'react';
import jss from 'jss';
import { hot } from 'react-hot-loader';

import JsCompositionWhitelabelingDemo from './jsCompositionWhitelabeling/JsCompositionWhitelabelingDemo';
import CssCompositionWhitelabelingDemo from './cssCompositionWhitelabeling/CssCompositionWhitelabelingDemo';
import {CssPreprocessors} from 'constants/CssPreprocessors';
import ScopedAnimationsDemo from './scopedAnimations/scopedAnimationsDemo';

import whiteLabelLessStyles from 'sharedStyles/whiteLabeling/styles.less';
import whiteLabelScssStyles from 'sharedStyles/whiteLabeling/styles.scss';
import lessStyles from './styles.less';
import scssStyles from './styles.scss';
import './styles-old.less';

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
    ubsf_button: {
        'background-color': CustomColors.BUTTON_BG
    },
    [whiteLabelLessStyles.input]: {
        color: CustomColors.INPUT_TEXT
    }
};

class App extends Component {
    constructor() {
        super();

        jss.setup({createGenerateClassName: () => rule => rule.key}); //do this to disable jss classNames scoping
        this._jssSheet = jss.createStyleSheet(jssStyles);
    }

    state = {
        preprocessedStyles: CssPreprocessors.LESS,
        whiteLabelStylesName: WhitelabelStyleNames.DEFAULT,
        hasCustomWhitelabeling: false,
    }

    handleEnableOAOWhitelabeling = () => {
        this._jssSheet.detach();
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.OAO, hasCustomWhitelabeling: false });
    }

    handleEnableDefaultWhitelabeling = () => {
        this._jssSheet.detach();
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.DEFAULT, hasCustomWhitelabeling: false });
    }

    handleEnableCustomWhitelabeling = () => {
        this._jssSheet.attach();
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.CUSTOM, hasCustomWhitelabeling: true });
    }

    handleSwitchToLess = () => {
        this.setState({ preprocessedStyles: CssPreprocessors.LESS });
    }

    handleSwitchToScss = () => {
        this.setState({ preprocessedStyles: CssPreprocessors.SCSS });
    }

    render() {
        const { preprocessedStyles, whiteLabelStylesName, hasCustomWhitelabeling } = this.state;

        const styles = preprocessedStyles === CssPreprocessors.SCSS ? scssStyles : lessStyles;
        const rootStyles = preprocessedStyles === CssPreprocessors.SCSS ? whiteLabelScssStyles : whiteLabelLessStyles;
        const rootClass = hasCustomWhitelabeling ? styles.app : rootStyles[whiteLabelStylesName];

        return (
            <div className={rootClass}>
                <div className="ubsf_logo-old">This is a square with old less (global) styles</div>
                <br />
                <span>The current config is <strong><i>{preprocessedStyles}</i></strong> with <strong><i>{whiteLabelStylesName}</i></strong> white-labeling</span><br />
                <button onClick={this.handleEnableOAOWhitelabeling}>OAO whitelabeling</button>
                <button onClick={this.handleEnableCustomWhitelabeling}>Custom whitelabeling (jss)</button>
                <button onClick={this.handleEnableDefaultWhitelabeling}>Default whitelabeling</button>
                <br />
                <button onClick={this.handleSwitchToLess}>Switch to <i>less</i></button>
                <button onClick={this.handleSwitchToScss}>Switch to <i>scss</i></button>
                <div className={styles.button} />
                <h1>CSS Modules Less/Scss Webpack Demo</h1>
                <p>In CSS Modules, selectors are scoped by default.</p>

                <hr className={styles.hr} />

                <h2>JS Composition Whitelabeling</h2>
                <JsCompositionWhitelabelingDemo preprocessorToUse={preprocessedStyles} />

                <hr className={styles.hr} />

                <h2>CSS Composition Whitelabeling</h2>
                <CssCompositionWhitelabelingDemo preprocessorToUse={preprocessedStyles} />

                <hr className={styles.hr} />

                <h2>Scoped Animations</h2>
                <ScopedAnimationsDemo />
            </div>
        );
    }
}

export default hot(module)(App);

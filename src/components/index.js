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

function getStyles(preprocessor) {
    return preprocessor === CssPreprocessors.SCSS ? scssStyles : lessStyles;
}

function getWhitelabelStyles(preprocessor) {
    return preprocessor === CssPreprocessors.SCSS ? whiteLabelScssStyles : whiteLabelLessStyles;
}

function getJssStyles(preprocessor) {
    return {
        'ubsf_button': {
            'background-color': CustomColors.BUTTON_BG
        },
        [getWhitelabelStyles(preprocessor).input]: {
            color: CustomColors.INPUT_TEXT
        }
    };
}

class App extends Component {
    _lessJssSheet = jss.createStyleSheet(getJssStyles(CssPreprocessors.LESS))
    _scssJssSheet = jss.createStyleSheet(getJssStyles(CssPreprocessors.SCSS))

    state = {
        preprocessedStyles: CssPreprocessors.LESS,
        whiteLabelStylesName: WhitelabelStyleNames.DEFAULT
    }

    detachJssSheet = () => {
        if (this.state.whiteLabelStylesName === WhitelabelStyleNames.CUSTOM) {
            this.getJssSheet().detach();
        }
    }

    attachJssSheet = () => {
        if (this.state.whiteLabelStylesName === WhitelabelStyleNames.CUSTOM) {
            this.getJssSheet().attach();
        }
    }

    getJssSheet = () => {
        return this.state.preprocessedStyles === CssPreprocessors.SCSS ? this._scssJssSheet : this._lessJssSheet;
    }

    handleEnableOAOWhitelabeling = () => {
        this.detachJssSheet();
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.OAO });
    }

    handleEnableDefaultWhitelabeling = () => {
        this.detachJssSheet();
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.DEFAULT });
    }

    handleEnableCustomWhitelabeling = () => {
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.CUSTOM }, () => {this.attachJssSheet();});
    }

    handleSwitchToLess = () => {
        this.detachJssSheet();
        this.setState({ preprocessedStyles: CssPreprocessors.LESS }, () => {this.attachJssSheet();});
    }

    handleSwitchToScss = () => {
        this.detachJssSheet();
        this.setState({ preprocessedStyles: CssPreprocessors.SCSS }, () => {this.attachJssSheet();});
    }

    render() {
        const { preprocessedStyles, whiteLabelStylesName } = this.state;

        const styles = getStyles(preprocessedStyles);
        const rootStyles = getWhitelabelStyles(preprocessedStyles);

        return (
            <div className={rootStyles[whiteLabelStylesName]}>
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

export default hot(module)(App); //eslint-disable-line

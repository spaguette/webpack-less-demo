import React, { Component } from 'react';
import jss from 'jss';
import { hot } from 'react-hot-loader';

import JsCompositionWhitelabelingDemo from './jsCompositionWhitelabeling/JsCompositionWhitelabelingDemo';
import CssCompositionWhitelabelingDemo from './cssCompositionWhitelabeling/CssCompositionWhitelabelingDemo';
import ScopedAnimationsDemo from './scopedAnimations/scopedAnimationsDemo';
import { jssStyles, WhitelabelStyleNames } from 'constants';

import whiteLabelStyles from 'sharedStyles/whiteLabeling/index.less';
import './styles-old.less';

class App extends Component {
    _jssSheet = jss.createStyleSheet(jssStyles)

    state = {
        whiteLabelStylesName: WhitelabelStyleNames.DEFAULT
    }

    detachJssSheet = () => {
        if (this.state.whiteLabelStylesName === WhitelabelStyleNames.CUSTOM) {
            this._jssSheet.detach();
        }
    }

    attachJssSheet = () => {
        if (this.state.whiteLabelStylesName === WhitelabelStyleNames.CUSTOM) {
            this._jssSheet.attach();
        }
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

    render() {
        const { whiteLabelStylesName } = this.state;

        return (
            <div className={whiteLabelStyles[whiteLabelStylesName]}>
                <div className="pref_logo-old">This is a square with old less (global) styles</div>
                <br />
                <span>The current config is <strong><i>{whiteLabelStylesName}</i></strong> white-labeling</span><br />
                <button onClick={this.handleEnableOAOWhitelabeling}>OAO whitelabeling</button>
                <button onClick={this.handleEnableCustomWhitelabeling}>Custom whitelabeling (jss)</button>
                <button onClick={this.handleEnableDefaultWhitelabeling}>Default whitelabeling</button>
                <br />
                <h1>CSS Modules Less/Scss Webpack Demo</h1>
                <p>In CSS Modules, selectors are scoped by default.</p>
                <JsCompositionWhitelabelingDemo title="JS Composition Whitelabeling" />
                <CssCompositionWhitelabelingDemo title="CSS Composition Whitelabeling" />
                <ScopedAnimationsDemo title="Scoped Animations" />
            </div>
        );
    }
}

export default hot(module)(App);

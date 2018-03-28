import React, { Component } from 'react';

import JsCompositionWhitelabelingDemo from './jsCompositionWhitelabeling/JsCompositionWhitelabelingDemo.js';

import lessStyles from './styles.less';
import scssStyles from './styles.scss';
import './styles-old.less';

const WhitelabelStyleNames = {
    DEFAULT: 'default',
    OAO: 'oao'
}

const INITIAL_STATE =  { 
    preprocessoredStyles: 'less',
    whiteLabelStylesName: WhitelabelStyleNames.DEFAULT 
};

export default class App extends Component {
    constructor() {
        super();

        this.state = INITIAL_STATE;
    }

    handleEnableOAOWhitelabeling = () => {
        this.setState({ whiteLabelStylesName: WhitelabelStyleNames.OAO });
    }

    handleEnableDefaultWhitelabeling = () => {
         this.setState({ whiteLabelStylesName: WhitelabelStyleNames.DEFAULT });
    }

    handleSwitchToLess = () => {
        this.setState({ preprocessoredStyles: 'less' });
    }

    handleSwitchToScss = () => {
        this.setState({ preprocessoredStyles: 'scss' });
    }

    render() {
        const { preprocessoredStyles, whiteLabelStylesName } = this.state;

        const styles = preprocessoredStyles === 'scss' ? scssStyles : lessStyles;

        return (
          <div className={styles[whiteLabelStylesName]}>
            <div className="ubsf_logo-old">This is a square with old less (global) styles</div>
            <br />
            <span>The current config is <strong><i>{preprocessoredStyles}</i></strong> with <strong><i>{whiteLabelStylesName}</i></strong> white-labeling</span><br />
            <button onClick={this.handleEnableOAOWhitelabeling}>OAO whitelabeling</button>
            <button onClick={this.handleEnableDefaultWhitelabeling}>Default whitelabeling</button>
            <br />
            <button onClick={this.handleSwitchToLess}>Switch to <i>less</i></button>
            <button onClick={this.handleSwitchToScss}>Switch to <i>scss</i></button>
            <div className={styles.button} />
            <h1>CSS Modules Less/Scss Webpack Demo</h1>
            <p>In CSS Modules, selectors are scoped by default.</p>

            <hr className={styles.hr} />

            <h2>Js Composition Whitelabeling</h2>
            <JsCompositionWhitelabelingDemo />

            <hr className={styles.hr} />
          </div>
        );
    }
};

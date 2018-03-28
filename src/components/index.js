import React, { Component } from 'react';

import JsCompositionWhitelabelingDemo from './jsCompositionWhitelabeling/JsCompositionWhitelabelingDemo.js';

import styles from './styles.less';
import './styles-old.less';

const INITIAL_WHITELABEL_STYLES = styles.oao;

export default class App extends Component {
    constructor() {
        super();

        this.state = { whiteLabelStyles: INITIAL_WHITELABEL_STYLES };
    }

    handleDeleteWhitelabeling = () => {
        this.setState({ whiteLabelStyles: styles.default });
    }

    handleRestoreWhitelabeling = () => {
        this.setState({ whiteLabelStyles: INITIAL_WHITELABEL_STYLES });
    }

    render() {
        return (
          <div className={this.state.whiteLabelStyles}>
            <div className="ubsf_logo-old">This is a square with old less (global) styles</div>
            <button onClick={this.handleDeleteWhitelabeling}>Delete whitelabeling</button>
            <button onClick={this.handleRestoreWhitelabeling}>Restore whitelabeling</button>
            <div className={styles.button} />
            <h1>CSS Modules Webpack Demo</h1>

            <hr className={styles.hr} />

            <h2>Js Composition Whitelabeling</h2>
            <p>In CSS Modules, selectors are scoped by default.</p>
            <p>The following component uses two classes, <strong>.root</strong> and <strong>.text</strong>, both of which would typically be too vague in a larger project.</p>
            <p>CSS Module semantics ensure that these <strong>classes are locally scoped</strong> to the component and don't collide with other classes in the global scope.</p>
            <JsCompositionWhitelabelingDemo />

            <hr className={styles.hr} />
          </div>
        );
    }
};

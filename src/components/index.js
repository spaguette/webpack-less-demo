import React, { Component } from 'react';
import jss from 'jss';
import autobind from 'autobind-decorator';
import { hot } from 'react-hot-loader';

import JsCompositionThemingDemo from './jsCompositionTheming/JsCompositionThemingDemo';
import CssCompositionThemingDemo from './cssCompositionTheming/CssCompositionThemingDemo';
import ScopedAnimationsDemo from './scopedAnimations/scopedAnimationsDemo';
import { jssStyles, ThemeName } from 'constants';

import themeStyles from 'sharedStyles/themes/index.less';
import './styles-old.less';

@hot(module)
class App extends Component {
    _jssSheet = jss.createStyleSheet(jssStyles)

    state = { stylesName: ThemeName.DEFAULT }

    get isCustomThemed() {
        return this.state.stylesName === ThemeName.CUSTOM;
    }

    detachJssSheet() {
        this.isCustomThemed && this._jssSheet.detach();
    }

    attachJssSheet() {
        this.isCustomThemed && this._jssSheet.attach();
    }

    @autobind
    handleBlueThemeClick() {
        this.detachJssSheet();
        this.setState({ stylesName: ThemeName.BLUE });
    }

    @autobind
    handleDefaultThemeClick() {
        this.detachJssSheet();
        this.setState({ stylesName: ThemeName.DEFAULT });
    }

    @autobind
    handleCustomThemeClick() {
        this.setState({ stylesName: ThemeName.CUSTOM }, this.attachJssSheet);
    }

    render() {
        const { stylesName } = this.state;

        return (
            <div className={themeStyles[stylesName]}>
                <div className="pref_logo-old">This is a square with old less (global) styles</div>
                <br />
                <span>The current config is <strong><i>{stylesName}</i></strong> theme</span><br />
                <button onClick={this.handleBlueThemeClick}>Blue theme</button>
                <button onClick={this.handleDefaultThemeClick}>Custom theme (jss)</button>
                <button onClick={this.handleCustomThemeClick}>Default theme</button>
                <br />
                <h1>CSS Modules Less/Scss Webpack Demo</h1>
                <p>In CSS Modules, selectors are scoped by default.</p>
                <JsCompositionThemingDemo title="JS Composition Theming" />
                <CssCompositionThemingDemo title="CSS Composition Theming" />
                <ScopedAnimationsDemo title="Scoped Animations" />
            </div>
        );
    }
}

export default App;

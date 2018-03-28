import JsCompositionWhitelabeling from './index';

import React, { Component } from 'react';

import js from '!!raw!./index.js';
import css from '!!raw!./styles.less';
import Snippet from 'components/shared/snippet/index.js';

export default class JsCompositionWhitelabelingDemo extends Component {

  render() {
    const files = [
      { name: 'index.js', source: js },
      { name: 'styles.less', source: css }
    ];

    return (
      <Snippet files={files}>
        <JsCompositionWhitelabeling />
      </Snippet>
    );
  }

};

import React from 'react';
import {shallow} from 'enzyme';

import JsCompositionWhitelabeling from '../';

describe('<JsCompositionWhitelabeling /> tests', () => {
    let component = shallow(<JsCompositionWhitelabeling />);

    it('component is defined', () => {
        expect(component).toBeDefined();
    });
});
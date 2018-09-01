import React from 'react';
import {shallow} from 'enzyme';

import JsCompositionTheming from '../';

describe('<JsCompositionTheming /> tests', () => {
    let component = shallow(<JsCompositionTheming />);

    it('component is defined', () => {
        expect(component).toBeDefined();
    });
});
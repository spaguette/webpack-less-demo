import React from 'react';
import {shallow} from 'enzyme';

import ScopedAnimations from '../';

describe('<ScopedAnimations /> tests', () => {
    let component = shallow(<ScopedAnimations />);

    it('component is defined', () => {
        expect(component).toBeDefined();
    });
});
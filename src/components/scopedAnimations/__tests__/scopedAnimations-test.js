import React from 'react';
import { shallow } from 'enzyme';

import ScopedAnimations from '../';
import styles from '../styles.less';

describe('<ScopedAnimations /> tests', () => {
    let component = shallow(<ScopedAnimations />);

    it('component is defined', () => {
        expect(component).toBeDefined();
    });

    it('renders a root div', () => {
        expect(component.first().props().className).toBe(styles.root);
    });

    it('renders a ball', () => {
        expect(component.first().children().props().className).toBe(styles.ball);
    });

    it('renders only one ball', () => {
        expect(component.find(`.${styles.ball}`).length).toBe(1);
    });
});
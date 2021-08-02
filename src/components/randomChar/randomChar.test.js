import React from 'react';
import RandomChar from './randomChar';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Testing <RandomChar/>', () => {
    it('RandomChar rendered correctly', () => {
        const char = shallow(<RandomChar />);
        expect(toJSON(char)).toMatchSnapshot();
    });

    // it('RandomChar state "char" is empty object', () => {
    //     const char = shallow(<RandomChar />);
    //     expect(char.state().char).toBeObject();
    // });
});

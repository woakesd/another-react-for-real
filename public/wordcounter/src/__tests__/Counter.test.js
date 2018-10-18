import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

describe('a counter', () => {
    it('describes the count and label', () => {
        const counter = renderer.create(<Counter legend="Count" count={34} />);
        expect(counter.toJSON()).toMatchSnapshot();
    });
});
import React from 'react';
import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Counter from '../Counter';
import Editor from '../Editor';
import ProgressBar from '../ProgressBar';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('When I type some words', () => {
    const target = 10;
    const inputString = 'one two three four';
    const wordCounter = mount(<WordCounter targetWordCount={target} />);
    const textArea = wordCounter.find('textarea');
    textArea.simulate('change', { target: { value: inputString }});

    it('Displays the correct word count as a number', () => {
        const counter = wordCounter.find(Counter);
        expect(counter.prop('count')).toBe(countWords(inputString));
    });

    it('Displays the correct progress', () => {
        const progressBar = wordCounter.find(ProgressBar);
        expect(progressBar.prop('completion')).toBe(
            countWords(inputString)/target
        );
    })
})
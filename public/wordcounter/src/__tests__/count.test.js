import countWords from '../countWords';

it('counts the correct number of words', () => {
    expect(countWords('one two three')).toBe(3);
});

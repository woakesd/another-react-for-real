function countWords(text) {
    if (!text) {
        return 0;
    }
    
    const matches = text.match(/\w+/g);
    if (!matches) {
        return 0;
    }

    return matches.length;
}

export default countWords;

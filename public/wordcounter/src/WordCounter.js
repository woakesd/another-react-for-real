class WordCounter extends React.Component {
    constructor() {
        super();
        this.state = { text: '' };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    render() {
        const { targetWordCount } = this.props;
        const { text } = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;

        return (
            <form className="measure pa4 sans-serif">
                <Editor 
                    onTextChange={this.handleTextChange}
                    text={text} />
                <div className="flex mt3">
                    <Counter count={wordCount} />
                    <ProgressBar completion={progress} />
                </div>
                <SaveManager saveFunction={makeFakeRequest} data={this.state} />
            </form>
        );
    }

    handleTextChange(currentText) {
        this.setState(() => ({text: currentText}));
    }
}

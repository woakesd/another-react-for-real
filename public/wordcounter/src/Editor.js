function Editor({
    text,
    onTextChange
}) {
    function handleChange(event) {
        onTextChange(event.target.value);
    }

    return (
        <div className="flex flex-column mv2">
            <label htmlFor="editor" className="mv2">
                Enter your name
            </label>
            <textarea
                value={text}
                onChange={handleChange}
                id="editor" />
        </div>
    );
}

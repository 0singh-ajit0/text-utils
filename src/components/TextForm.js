import React, { useState } from 'react';

export default function TextForm(props) {
	const [text, setText] = useState("");

	const handleClear = () => {
		setText("");
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		props.showAlert("success", "Copied", "Text copied to clipboard");
	};

	const handleUppercaseClick = () => {
		let modText = text.toUpperCase();
		setText(modText);
	};

	const handleLowercaseClick = () => {
		let modText = text.toLowerCase();
		setText(modText);
	};

	const handleTextChanged = (event) => {
		setText(event.target.value);
	};

	const handleRemoveExtraSpaces = () => {
		const splittedText = text.split(/[ ]+/);
		let trimmedText = "";
		splittedText.forEach(element => {
			if (element !== "") {
				trimmedText += element + " ";
			}
		});
		if (trimmedText[trimmedText.length - 1] === " ") {
			trimmedText = trimmedText.slice(0, trimmedText.length - 1);
		}
		setText(trimmedText.toString());
	};

	const handleRemoveStartingSpaces = () => {
		setText(text.trimStart());
	};

	const handleRemoveTrailingSpaces = () => {
		setText(text.trimEnd());
	};

	return (
		<>
			<div>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea className="form-control" data-bs-theme={`${props.mode}`} id="myBox" value={text} onChange={handleTextChanged} rows="8" placeholder="Enter text here"></textarea>
				</div>

				<div className="container-sm px-0 my-3">
					<button disabled={text.length === 0} className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
					<button disabled={text.length === 0} className="btn btn-success mx-2" onClick={handleCopy}>Copy</button>
				</div>

				<div className="container-sm px-0 my-3">
					<button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveStartingSpaces}>Remove Starting Spaces</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveTrailingSpaces}>Remove Trailing Spaces</button>
				</div>
			</div>

			<div className="container my-3">
				<h2>Your text summary</h2>
				<p>{String(text).split(/\s+/).filter((word) => { return word.length !== 0; }).length} words, {text.length} characters</p>
				<p>{0.008 * String(text).split(" ").filter((word) => { return (word.length !== 0); }).length} minutes read</p>
			</div>
		</>
	);
};

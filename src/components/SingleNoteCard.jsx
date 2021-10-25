import React from "react";

export default function SingleNoteCard(props) {
	const { note } = props;
	return (
		<article
			className="single-note">
			<h2>{note.title}</h2>
			<p>{note.summary}</p>
		</article>
	);
};
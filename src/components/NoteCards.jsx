import React from "react";
import SingleNoteCard from "./SingleNoteCard";


export default function NoteCards(props) {
	const { notes } = props;

	return (
		
		<div className="sidebar">
			{notes.map((note) => (
				<SingleNoteCard
					note={note}
				/>
			))}
		</div>
	);
};

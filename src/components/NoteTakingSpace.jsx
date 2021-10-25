import React from "react";


export default function NoteTakingSpace(props) {
	return (
		<section className="note">
			<textarea className="noteTitle"> Title Here </textarea> 
			<br></br>
			<textarea className="noteSummary"> Summary Here</textarea>
		</section>
	);
};
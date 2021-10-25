import React from "react";


export default function NoteTakingSpace(props) {
	return (
		<section className="note">
			<textarea className="noteTitle"> Redux Architecture </textarea> 
			<br></br>
			<textarea className="noteSummary"> The store, action, and reducer are the main building blocks of the Redux architecture. There is a single store for the global state of the app. Actions can only change the states. To specify how a state gets updated in response to an action, we need to write pure reducer functions that calculate a new state based on the old state and the action.

</textarea>
		</section>
	);
};
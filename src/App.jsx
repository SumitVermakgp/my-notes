import { useEffect, useState } from "react";
import Header from "./components/Header"
import NoteCards from "./components/NoteCards";
import NoteTakingSpace from "./components/NoteTakingSpace";
import "./App.css";
import axios from "axios";

export default function App() {

	const [notes, setNotes] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const noteResponse = await axios.get("/api/notes");
        console.log(noteResponse)
				setNotes(noteResponse.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
    <>
    <Header />
		<div className="app">
			<main className="app">
				<NoteCards
					notes={notes}
				/>
				<NoteTakingSpace/>
			</main>
		</div>
    </>
	);
};

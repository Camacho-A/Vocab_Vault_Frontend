import React from "react"
import { Form } from "react-router-dom"

function Create() {
	return (
	
		<>
			<div style={{ textAlign: "center" }}>
				<h2>Create a Todo</h2>
				<Form action="/create" method="post">
					<input type="text" name="word" placeholder="subject" />
					<input type="text" name="definition" placeholder="subject" />
					<input type="text" name="partOfSpeech" placeholder="subject" />
					<input type="text" name="pronunciation" placeholder="subject" />
					<input type="text" name="context" placeholder="subject" />
					<button>Add a New Word</button>
				</Form>
			</div>

	
		</>
	)
}


export default Create

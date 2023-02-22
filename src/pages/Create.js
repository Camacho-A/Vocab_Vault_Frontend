import React from "react"
import { Form, Link } from "react-router-dom"

function Create() {
	return (
		<>
			<div className="main_container">
				<h2 className="create_title">Add Words to Vault</h2>
				<Form className="form" action="/create" method="post">
					<input className="input" type="text" name="word" placeholder="Word" />
					<input
						className="input"
						type="text"
						name="definition"
						placeholder="Definition"
					/>
					<input
						className="input"
						type="text"
						name="partOfSpeech"
						placeholder="Part of Speech"
					/>
					<input
						className="input"
						type="text"
						name="pronunciation"
						placeholder="Pronunciation"
					/>
					<input
						className="input"
						type="text"
						name="context"
						placeholder="Contest"
					/>
					<button className="btn-main_input">Add a New Word</button>
					<Link to="/">
						<button className="btn-main_input">Go Back</button>
					</Link>
				</Form>
			</div>
		</>
	)
}


export default Create

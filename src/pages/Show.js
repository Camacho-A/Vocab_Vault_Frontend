import { Link, useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
	const post = useLoaderData()



	return (
		<div className="show_container">
			<div className="show_list">
				<h1>
					<u>Word</u>: {post.word}
				</h1>
				<h2>
					<u>Pronunciation</u>: {post.pronunciation}
				</h2>
				<h3>
					<u>Part of Speech</u>: {post.partOfSpeech}
				</h3>
				<h4>
					<u>Definition</u>: {post.definition}
				</h4>
				<h5>
					<u>Content</u>: {post.context}
				</h5>
				<Form action={`/delete/${post.id}`} method="post">
					<button className="delete">Delete</button>
				</Form>
			</div>
			<div className="show">
				<h2>Update this Word</h2>
				<Form action={`/update/${post.id}`} method="post">
					<input
						className="show__input"
						type="input"
						name="word"
						placeholder="Word"
						defaultValue={post.word}
						required
					/>
					<br></br>
					<input
						className="show__input"
						type="input"
						name="pronunciation"
						placeholder="Pronunciation"
						defaultValue={post.pronunciation}
					/>
					<br></br>
					<input
						className="show__input"
						type="input"
						name="partOfSpeech"
						placeholder="Part Of Speech"
						defaultValue={post.partOfSpeech}
					/>
					<br></br>
					<input
						className="show__input"
						type="input"
						name="definition"
						placeholder="Definition"
						defaultValue={post.definition}
					/>
					<br></br>
					<input
						required
						className="show__input"
						type="input"
						name="context"
						placeholder="Context"
						defaultValue={post.context}
					/>
					<br></br>
					<button className="update">Update</button>
				</Form>
			</div>
			<div>
				<Link to="/">
					<button className="back">Go Back</button>
				</Link>
			</div>
		</div>
	)
}

export default Show

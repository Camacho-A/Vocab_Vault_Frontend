import { Link, useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
	const post = useLoaderData()

	//styles
	const div = {
		textAlign: "center",
		border: "3px solid green",
		width: "80%",
		margin: "30px auto",
	}

	return (
		<div style={div}>
			<h1>{post.word}</h1>
			<h2>{post.pronunciation}</h2>
			<h3>{post.partOfSpeech}</h3>
			<h4>{post.definition}</h4>
			<h5>{post.context}</h5>
			<div>
				<h2>Update this Todo</h2>
				<Form action={`/update/${post.id}`} method="post">
					<input
						className="show__input"
						type="input"
						name="word"
						placeholder="Word"
						defaultValue={post.word}
						required
					/>
					<input
						className="show__input"
						type="input"
						name="pronunciation"
						placeholder="Pronunciation"
						defaultValue={post.pronunciation}
					/>
					<input
						className="show__input"
						type="input"
						name="partOfSpeech"
						placeholder="Part Of Speech"
						defaultValue={post.partOfSpeech}
					/>
					<input
						className="show__input"
						type="input"
						name="definition"
						placeholder="Definition"
						defaultValue={post.definition}
					/>
					<input
						required
						className="show__input"
						type="input"
						name="context"
						placeholder="Context"
						defaultValue={post.context}
					/>
					<button>Update Todo</button>
				</Form>
			</div>
			<div>
				<Link to="/">
					<button>Go Back</button>
				</Link>
	
			</div>
			<Form action={`/delete/${post.id}`} method="post">
				<button>Delete Todo</button>
			</Form>
		</div>
	)
}

export default Show

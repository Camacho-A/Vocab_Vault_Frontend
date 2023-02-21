import { Link } from "react-router-dom"

const Post = (props) => {
	const post = props.post

	// style
	const div = {
		textAlign: "center",
		border: "3px solid",
		margin: "10px auto",
		width: "80%",
	}

	return (
		<div style={div}>
			<Link to={`/post/${post.id}`}>
				<h1>{post.word}</h1>
			</Link>
			<h2>{post.pronunciation}</h2>
			<h3>{post.partOfSpeech}</h3>
			<h4>{post.definition}</h4>
			<h5>{post.context}</h5>
		</div>
	)
}

export default Post

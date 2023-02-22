import { Link } from "react-router-dom"
import { useState } from "react"

const Post = (props) => {
	const post = props.post
	const [flip, setFlip] = useState(false)

	return (
		<div>
			<div>
				<div className="words">
					<h1 onClick={() => setFlip(!flip)}>
						{flip ? post.definition : post.word}

						{/* <br></br>
							<br></br>
							Pronunciation:<br></br> {post.pronunciation} */}
					</h1>

					{/* <div className="overlay">
						<p className="text">
							Part of Speech: <br></br>
							{post.partOfSpeech}
						</p>

						<p>
							Definition: <br></br>
							{post.definition}
						</p>
						<p>
							Content: <br></br>
							{post.context}
						</p>
					</div> */}
					<div className="link">
						<Link to={`/post/${post.id}`}> View More Info</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post

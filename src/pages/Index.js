import { useLoaderData } from "react-router-dom"
import Post from "../components/Post"
import "../css/app.css"


const Index = (props) => {
	const words = useLoaderData()
	

	return (
		<>
			<h1 className="about">
				Click on each card to learn new words.
			</h1>

			<div className="main">
				{words.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</>
	)
}

export default Index

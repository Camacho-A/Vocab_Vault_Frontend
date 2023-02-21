import { useLoaderData, Link } from "react-router-dom"
import Post from "../components/Post"

const Index = (props) => {
	const words = useLoaderData()

	return (
		<>
				<Link to="create">
					<button className="header__add--btn">Add Words</button>
				</Link>
			

			{words.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</>
	)
}

export default Index

import { Link } from "react-router-dom"

function Header(props) {
	return (
		<div className="header">
			<Link to="/">
				<div class="header__name two">
					<div class="title">
						<h3>Vocab Vault</h3>
					</div>
				</div>
			</Link>

			<div>
				<Link to="create">
					<button className="header__add--btn">Add Words</button>
				</Link>
			</div>
		</div>
	)
}

export default Header

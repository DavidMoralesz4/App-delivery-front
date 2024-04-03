import { Link } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"

function Header() {


	return (
		<div className="flex">
			<div className="">
				<Link to="/" className="">
					Eatsquality
				</Link> 				
			</div>


			<div className="">

			</div>

			<div className="">

			</div>
		</div>
	)
}

export default Header

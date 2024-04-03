import { Link } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"
import Search from "./Search";

function Header() {
	const {userData} = useUserContext();


	return (
		<div className="flex">
			<div className="">
				<Link to="/" className="">
					Eatsquality
				</Link> 				
			</div>

			{
				userData.userActualRole === "v" || userData.userActualRole === "c"
					?	<Search handleSubmit={() => console.log("Search Submit")} />
					: 	null
			}

			<div className="">
				
			</div>

			<div className="">

			</div>
		</div>
	)
}

export default Header

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { useUserContext } from '../../context/UserContext';

function UserProfile() {
	const {userData} = useUserContext();


	return (
		<>
			<div className="">
				<p>{userData.userName}</p>

				<div>
					<ArrowRightIcon />
				</div>
			</div>


			<div className="">

			</div>

		</>
	)
}

export default UserProfile

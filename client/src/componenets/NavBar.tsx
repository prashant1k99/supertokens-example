import { redirectToAuth } from 'supertokens-auth-react'
import { signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

const NavBar = () => {
	const logOut = async () => {
		await signOut()
		redirectToAuth()
	}
	return (
		<div className="md:flex md:items-center md:justify-between py-4 px-4 bg-gray-800">
			<div className="min-w-0 flex-1">
				<h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
					SuperTokens Demo
				</h2>
			</div>
			<div className="mt-4 flex md:ml-4 md:mt-0">
				<button
					type="button"
					onClick={logOut}
					className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					LogOut
				</button>
			</div>
		</div>
	)
}

export default NavBar

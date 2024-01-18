import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui'
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui'
import * as reactRouterDom from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AuthWrapper from './util/AuthWrapper'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/*This renders the login UI on the /auth route*/}
				{getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
					ThirdPartyEmailPasswordPreBuiltUI,
				])}
				<Route
					path="/"
					element={
						<AuthWrapper>
							<Dashboard />
						</AuthWrapper>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App

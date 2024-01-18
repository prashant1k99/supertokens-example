import SuperTokens from 'supertokens-auth-react'
import ThirdPartyEmailPassword, {
	Github,
	Google,
	Facebook,
	Apple,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import Session from 'supertokens-auth-react/recipe/session'

SuperTokens.init({
	appInfo: {
		appName: 'SuperToken Demo',
		apiDomain: 'http://localhost:3000',
		websiteDomain: 'http://localhost:5173',
		apiBasePath: '/auth',
		websiteBasePath: '/auth',
	},
	recipeList: [
		ThirdPartyEmailPassword.init({
			signInAndUpFeature: {
				providers: [
					Github.init(),
					Google.init(),
					Facebook.init(),
					Apple.init(),
				],
			},
		}),
		Session.init(),
	],
})

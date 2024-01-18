require('dotenv/config')
import Supertokens from 'supertokens-node'
import Session from 'supertokens-node/recipe/session'
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

Supertokens.init({
	framework: 'express',
	supertokens: {
		// https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
		connectionURI: 'https://try.supertokens.com',
		// apiKey: <API_KEY(if configured)>,
	},
	appInfo: {
		appName: 'SuperToken Demo',
		apiDomain: 'http://localhost:3000',
		websiteDomain: 'http://localhost:5173',
		apiBasePath: '/auth',
		websiteBasePath: '/auth',
	},
	recipeList: [
		ThirdPartyEmailPassword.init({
			providers: [
				{
					config: {
						thirdPartyId: 'google',
						clients: [
							{
								clientId: GOOGLE_CLIENT_ID!,
								clientSecret: GOOGLE_CLIENT_SECRET!,
							},
						],
					},
				},
			],
		}),
		Session.init(),
	],
})

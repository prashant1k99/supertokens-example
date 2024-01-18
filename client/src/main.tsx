import React from 'react'
import ReactDOM from 'react-dom/client'
import { SuperTokensWrapper } from 'supertokens-auth-react'

import './lib/SuperTokens.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<SuperTokensWrapper>
			<App />
		</SuperTokensWrapper>
	</React.StrictMode>
)

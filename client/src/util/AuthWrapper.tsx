import { SessionAuth } from 'supertokens-auth-react/recipe/session'

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
	return <SessionAuth>{children}</SessionAuth>
}

export default AuthWrapper

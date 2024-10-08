export interface SelectOptions {
	label: string
	value: string
}

export interface UserProps {
	name: string
	email: string
}

export interface AuthStoreProps {
	isAuthenticated: boolean
	user: UserProps
	token: string
}

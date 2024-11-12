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

export interface BlogType {
	title: string
	description: string
	authorName: string
	imageUrl: string
	documentId: string
	content: string
	category: string
}

export interface CaseStudyType {
	title: string
	description: string
	authorName: string
	imageUrl: string
	documentId: string
	content: string
	category: string
}

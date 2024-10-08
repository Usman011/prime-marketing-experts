'use client'

import { UserProps } from '@/types'
import { LoaderCircle } from 'lucide-react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import API from '@/api'

interface TAuthContext {
	user: UserProps | null
	setUser: (user: UserProps | null) => void
}

export const AuthContext = createContext<TAuthContext>({
	user: null,
	setUser: () => {},
})

export function AuthWrapper({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<UserProps | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		API.user
			.getProfile()
			.then((data) => {
				setUser(data.user)
			})
			.catch((err) => {
				setUser(null)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return (
			<div className="h-screen w-screen flex justify-center items-center">
				<LoaderCircle size={40} className=" animate-spin" />
			</div>
		)
	}

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
	return useContext(AuthContext)
}

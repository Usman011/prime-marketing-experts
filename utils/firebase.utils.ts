import {
	collection,
	getDocs,
	setDoc,
	doc,
	getDoc,
	updateDoc,
	where,
	query,
	deleteDoc,
} from 'firebase/firestore'
import { db, auth } from '../config/firebase.config'
import {
	// createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	// GoogleAuthProvider,
	// signInWithPopup,
	// reauthenticateWithCredential,
	// reauthenticateWithPopup,
	// EmailAuthProvider,
	// deleteUser,
} from 'firebase/auth'

const firebaseService = {
	signIn: async (email: string, password: string) => {
		try {
			return await signInWithEmailAndPassword(auth, email, password)
		} catch (err) {
			console.log(err)
			let { message } = err as Error
			if (
				message == 'Firebase: Error (auth/user-not-found).' ||
				message == 'Firebase: Error (auth/wrong-password).' ||
				message == 'Firebase: Error (auth/invalid-credential).'
			) {
				message = 'Invalid Email or Password'
			} else {
				message = 'Something went wrong. Try again!.'
			}
			throw new Error(message)
		}
	},

	logout: async () => {
		try {
			return await signOut(auth)
		} catch (err: any) {
			throw new Error(err.message)
		}
	},
	getDocumentById: async (collectionName: string, id: string) => {
		const response = await getDoc(doc(db, collectionName, id))
		return response.data()
	},
	getDocuments: async (collectionName: string) => {
		try {
			const response = await getDocs(collection(db, collectionName))
			const data = response.docs.map((doc: any) => doc.data())
			return data
		} catch (err: any) {
			throw new Error(err.message)
		}
	},
	addDocument: async (collectionName: string, data: any) => {
		try {
			const colRef = collection(db, collectionName)
			const docRef = doc(colRef)
			const newData = { ...data, documentId: docRef.id }
			return await setDoc(docRef, newData)
		} catch (err: any) {
			console.log(err)
			throw new Error(err.message)
		}
	},
	// addDocumentWithCustomId: async (collectionName, customId, data) => {
	// 	try {
	// 		return await setDoc(doc(db, collectionName, customId), data)
	// 	} catch (err) {
	// 		throw new Error(err.message)
	// 	}
	// },
	updateDocument: async (collectionName: string, id: string, data: any) => {
		try {
			return await updateDoc(doc(db, collectionName, id), data)
		} catch (err: any) {
			throw new Error(err.message)
		}
	},
	deleteDocument: async (collectionName: string, id: string) => {
		try {
			return await deleteDoc(doc(db, collectionName, id))
		} catch (error) {
			console.log(error)
		}
	},
	// deleteAccount: async (user, data) => {
	// 	try {
	// 		const credential = EmailAuthProvider.credential(user.email, data.password)
	// 		await reauthenticateWithCredential(user, credential).then(() => {
	// 			// User re-authenticated.
	// 			// Code...
	// 			return deleteUser(user)
	// 		})
	// 	} catch (error) {
	// 		console.log(error.message)
	// 		throw new Error(error.message)
	// 	}
	// },
	// deleteGoogleAccount: async (user) => {
	// 	try {
	// 		const credential = GoogleAuthProvider.credentialFromResult(user)
	// 		await reauthenticateWithPopup(user, credential).then(() => {
	// 			return deleteUser(user)
	// 		})
	// 		// User re-authenticated with Google credential.
	// 		// Code...
	// 	} catch (error) {
	// 		console.log(error.message)
	// 		throw new Error(error.message)
	// 	}
	// },

	// queryDocs: async (collectionName, key, operator, value) => {
	// 	try {
	// 		const colRef = collection(db, collectionName)
	// 		const q = query(colRef, where(key, operator, value))
	// 		// execute query
	// 		const response = await getDocs(q)
	// 		const data = response.docs.map((doc) => doc.data())
	// 		return data
	// 	} catch (err) {
	// 		console.log(err)
	// 		throw new Error(err.message)
	// 	}
	// },

	// queryDocuments: async (collectionName, key, operator, value) => {
	// 	try {
	// 		const colRef = collection(db, collectionName)
	// 		const q = query(colRef, where(key, '==', operator))
	// 		// execute query
	// 		const response = await getDocs(q)
	// 		const data = response.docs.map((doc) => doc.data())
	// 		return data
	// 	} catch (err) {
	// 		console.log(err)
	// 		throw new Error(err.message)
	// 	}
	// },
	// queryDocumentInArray: async (collectionName, key, operator, value) => {
	// 	try {
	// 		const colRef = collection(db, collectionName)
	// 		const q = query(colRef, where(key, 'array-contains', operator))
	// 		// execute query
	// 		console.log('q', q)
	// 		const response = await getDocs(q)
	// 		console.log('response', response)
	// 		const data = response.docs.map((doc) => doc.data())
	// 		console.log('data', data)
	// 		return data
	// 	} catch (err) {
	// 		console.log(err)
	// 		throw new Error(err.message)
	// 	}
	// },
	// addDocumentWithNestedCollection: async (collectionName, subCollectionName, userID, eventData) => {
	// 	try {
	// 		const calAppColRef = collection(db, collectionName, userID, subCollectionName)
	// 		const calAppRef = doc(calAppColRef)
	// 		return await setDoc(calAppRef, eventData)
	// 	} catch (err) {
	// 		console.log(err.message)
	// 		throw new Error(err.message)
	// 	}
	// },
	// getdocumentsWithNestedCollection: async (collectionName, userId, subCollectionName) => {
	// 	try {
	// 		const response = await getDocs(collection(db, collectionName, userId, subCollectionName))
	// 		const data = response.docs.map((doc) => doc.data())
	// 		return data
	// 	} catch (err) {
	// 		throw new Error(err.message)
	// 	}
	// },
}

export default firebaseService

import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
	apiKey: 'AIzaSyCxWh9ecmy9x_0TinskwzicZ2-AhJ7N4gI',
	authDomain: 'uzum-market-2c422.firebaseapp.com',
	projectId: 'uzum-market-2c422',
	storageBucket: 'uzum-market-2c422.appspot.com',
	messagingSenderId: '263046423783',
	appId: '1:263046423783:web:2309df8e72dd9609c52e42',
	measurementId: 'G-3DR8XSDS7J',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage }

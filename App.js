import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { StatusBar  } from 'expo-status-bar';
import initDataBase from './src/utils/db.js';
import { useEffect } from 'react';

export default function App() {
	useEffect(()=> {
		initDataBase()
	}, [])

	return(
		<>
			<StatusBar style='light'/>
			<NativeRouter>
				<Main />
			</NativeRouter>
		</>
	) 
}

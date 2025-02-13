import './App.css'

import './styles/left-side.css'
import './styles/right-side.css'

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

const Groups = React.lazy(() => import('./components/Group'));
const Menubar = React.lazy(() => import('./components/Menubar'));
const MiniMusicPlayer = React.lazy(() => import('./components/Mini-Music-Player'));
const SearchBar = React.lazy(() => import('./components/Search-bar'));
const ThreeDot = React.lazy(() => import('./components/three-dot'));

const FeaturedTrack = React.lazy(() => import('./components/Featured-track'));
const FeaturedArtist = React.lazy(() => import('./components/Featured-artist'));
const Recommendation = React.lazy(() => import('./components/Recommendation'));
const AddAudio = React.lazy(() => import('./components/Add-audio'));

import store from './lib/ReduxStore';
import Loader from './components/Loader';

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Provider store={store}>
				<img className='bg' src={'./1080439.webp'} alt='Background' />
				<AddAudio />
				<div className="app">
					<LeftSide />
					<RightSide />
				</div>
			</Provider>
		</Suspense>
	)
}

function LeftSide() {
	return (
		<div className='left-side'>
			<Menus />
			<MiniMusicPlayer />
		</div>
	)
}

function RightSide() {
	return (
		<div className='right-side'>
			<FeaturedTrack />
			<FeaturedArtist />
			<Recommendation />
		</div>
	)
}

function Menus() {
	return (
		<div className='menus'>
			<ThreeDot />
			<SearchBar />
			<Menubar />
			<Groups />
		</div>
	)
}

export default App
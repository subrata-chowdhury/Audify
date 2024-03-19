import './App.css'

import thumbnail from "./Assets/FRESHERBRINE.jpeg"
import bg from "./Assets/1080439.png"

import './Style/left-side.css'
import './Style/right-side.css'

import Groups from './components/Group'
import Menubar from './components/Menubar'
import MiniMusicPlayer from './components/Mini-Music-Player'
import SearchBar from './components/Search-bar'
import ThreeDot from './components/three-dot'

import FeaturedTrack from './components/Featured-track'
import FeaturedArtist from './components/Featured-artist'
import Recommendation from './components/Recommendation'
import AddAudio from './components/Add-audio'

import { createStore } from 'redux';
import AudioReducer from './components/AudioReducer';
import React from 'react';
import { Provider } from 'react-redux';

const store = createStore(AudioReducer);

function App() {
	return (
		<Provider store={store}>
			<img className='bg' src={bg} alt='Background' />
			<AddAudio />
			<div className="app">
				<div className='left-side'>
					<ThreeDot />
					<SearchBar />
					<Menubar />
					<Groups />
					<MiniMusicPlayer thumbnail={thumbnail} trackName={"Way Back Home"} trackAuthor={"Unknown"} />
				</div>
				<div className='right-side'>
					<FeaturedTrack thumbnail={thumbnail} trackName={"Way Back Home"} />
					<FeaturedArtist />
					<Recommendation />
				</div>
			</div>
		</Provider>
	)
}

export default App
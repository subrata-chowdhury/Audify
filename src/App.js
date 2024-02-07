import './App.css'
import bg from "./Assets/1080439.png"
import './Style/left-side.css'
import './Style/right-side.css'
import Groups from './components/Group'
import Menubar from './components/Menubar'
import MiniMusicPlayer from './components/Mini-Music-Player'
import { SearchBar } from './components/Search-bar'
import ThreeDot from './components/three-dot'

function App() {
	return (
		<>
			<img className='bg' src={bg} alt='Background' />
			<div className="app">
				<div className='left-side'>
					<ThreeDot />
					<SearchBar />
					<Menubar />
					<Groups/>
					<MiniMusicPlayer />
				</div>
				<div className='right-side'>

				</div>
			</div>
		</>
	)
}

export default App
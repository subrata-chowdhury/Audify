import './App.css'
import bg from "./Assets/1080439.png"
import './Style/left-side.css'
import './Style/right-side.css'
import ThreeDot from './components/three-dot'

function App() {
	return (
		<>
			<img className='bg' src={bg} alt='Background'/>
			<div className="app">
				<div className='left-side'>
					<ThreeDot/>
				</div>
				<div className='right-side'>
					
				</div>
			</div>
		</>
	)
}

export default App
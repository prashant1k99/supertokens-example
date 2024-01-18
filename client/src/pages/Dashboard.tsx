import ToDo from '../componenets/ToDo'
import NavBar from '../componenets/navbar'

const Dashboard = () => {
	return (
		<div className="h-full">
			<NavBar />
			<div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
				<ToDo />
			</div>
		</div>
	)
}

export default Dashboard

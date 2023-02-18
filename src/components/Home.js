import ItemsIndex from './items/ItemsIndex'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>See All Items</h2>
			<ItemsIndex msgAlert={props.msgAlert} />
		</>
	)
}

export default Home

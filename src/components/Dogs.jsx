import { useEffect, useState } from "react";
import '../styles/dogs.css';

const Dogs = () => {
	const loadDogs = () => {
		setLoading(true);
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((data) => {
				setDog(data.message)
				setLoading(false)
			});
	}

	const [dog, setDog] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {loadDogs()}, []);

	if (loading){
		return <h1>Getting dog...</h1>
	}

	return (
		<div>
			<div className="dog-app-container">
				<h2>Get Random Dog Images</h2>
				<div classname="image-container">
					<img src={dog} alt="Dog" />
				</div>
				<button onClick={loadDogs}>Fetch!</button>
			</div>
		</div>
	);
}

export default Dogs;
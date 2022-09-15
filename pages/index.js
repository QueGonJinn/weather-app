import Head from 'next/head';
import SearchBox from '../components/SearchBox';
import FamousPlaces from '../components/FamousPlaces';

export default function Home() {
	return (
		<div>
	  		<Head>
				<title>Weather App</title>
			</Head>

			<div className="home">
				<div className="container">
				<SearchBox placeholder='Search for another city...' />	
				<FamousPlaces  />
				</div>
			</div>
		</div>
  	)
}

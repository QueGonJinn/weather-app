import React from 'react';
import cities  from '../lib/city.list.json';
import Link from 'next/link';

export default function SearchBox() {
	const [query, setQuery] = React.useState('');
	const [result, setResult] = React.useState([]);

	const onChange = (elem) => {
		const {value} = elem.target;
		setQuery(value);

		let matchingCities = [];		
		if (value.length > 3) {
			for (let city of cities) {
				if (matchingCities.length >= 5) {
					break;
				}

				const match = city.name.toLowerCase().startsWith(value.toLowerCase());

				if (match) {
					const cityData = {
						...city, 
						slug: `${city.name.toLowerCase().replace(/ /g, '-')}- ${city.id}`
					}
					matchingCities.push(cityData);
				}
			}
		}
		return setResult(matchingCities);
	};

	return (
		<div className="search">
			<h1 className='search__title'>Enter the name of the city</h1>
			<input type="text" value={query} onChange={onChange}/>

			{query.length > 3 && (
				<ul>
					{result.length > 0 ? (
						result.map((city) => (
							<li key={city.slug}>
								<Link href={`/location/${city.slug}`}>
									<a>
										{city.name}
										{city.useState ? `, ${city.state}` : ''}
										<span>{city.country}</span>
									</a>
								</Link>
							</li>
						)) 
					) : (
						<li className="search__no-results">No results found</li>
					)}
				</ul>
			)}
		</div>
  	)
};

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SlonimImage from '../public/images/slonim.jpg';
import MinskImage from '../public/images/Minsk.jpg';
import GrodnoImage from '../public/images/grodno-rejting.jpg';
import BrestImage from '../public/images/brest.jpg';

const places = [
	{
		name: 'Slonim',
		image: SlonimImage,
		url: '/location/slonim-%20621754',
	},
	{
		name: 'Minsk',
		image: MinskImage,
		url: '/location/minsk-%20625144',
	},
	{
		name: 'Grodno',
		image: GrodnoImage,
		url: '/location/grodno-oblast-%20628035',
	},
	{
		name: 'Brest',
		image: BrestImage,
		url: '/location/brest-%20629634',
	}
]

export default function FamousPlaces() {
  return (
	<div className='places'>
	  <div className="places__row">
		{places.length > 0 && 
			places.map( (place, index) => (
				<div className="places__box" key={index}>
					<Link href={place.url}>
						<a>
							<div className="places__image-wrapper">
								<Image 
									src={place.image}
									alt={`${place.name} Image`}
									layout='fill'
									objectFit='cover'
								/>								
							</div>
							<span>{place.name}</span>
						</a>
					</Link>
					
				</div>
			) )
		}
	  </div>
	</div>
  )
}

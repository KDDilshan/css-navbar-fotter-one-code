// import React from 'react'
// import './pageBottom.css'
// import RatingCard from './RatingCard'
// import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'

// export default function PageBottom() {
//   const [houses, setHouses] = useState([]);

//   useEffect (("http://localhost:4000/ownerForm/product/:id")=> {
//     const house = fetch();
//     house
//       .then ((res)=> res.json())
//       .then ((data)=>setHouses(data))
//       .catch((error)=>console.log(error))
//   },[])
//   const param = useParams()

//   console.log(param)

//   return (
//     <div className='bottomContainer'>
//       <h1>owner one {param.housedetailId}</h1>
//         {
//           houses.map((house)=>
//           <p>{house.description}</p>)
//         }
//       <div className="ratingCards">
//       <RatingCard/>
//       <RatingCard/>
//       <RatingCard/>
//       <RatingCard/>
//       <RatingCard/>
//       </div>
      
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import './pageBottom.css';
import RatingCard from './RatingCard';
import { useParams } from 'react-router-dom';
import TopLeft from '../PageTop/TopLeft.js';


export default function PageBottom() {
  const [house, setHouse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await fetch(`http://localhost:4000/ownerForm/product/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Data:', data);
          setHouse(data);
        } else {
          console.error('Failed to fetch house details');
        }
      } catch (error) {
        console.error('Error fetching house details:', error);
      }
    };

    fetchHouse();
  }, [id]);

// Assuming you have the photoURL in the house object
return (
  <div className="bottomContainer">
    {house ? (
      <>
        <TopLeft photoURL={house.photoURL} />
        <h1>{`Owner ${id}`}</h1>
        <p style={{ whiteSpace: 'pre-line' }}>{house.product.description}</p>
        
      </>
    ) : (     
      <p>Loading...</p>
    )}
    <div className="ratingCards">
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>
  </div>
  );

}

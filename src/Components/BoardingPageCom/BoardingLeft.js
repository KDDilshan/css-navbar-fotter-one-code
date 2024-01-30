import React from 'react'
import './boardingLeft.css'
import {useState , useEffect} from 'react'

export default function BoardingLeft() {
    const [ownerNames, setOwnerNames] = useState([]);
    const [useridArray, setUseridArray] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:4000/owner/api/ownerData')
        .then((response) => response.json())
        .then((data) => {
          setOwnerNames(data.usernamesArray || []);
          setUseridArray(data.useridArray || []);
        })
        .catch((error) => {
          console.error('Error fetching owner names:', error);
        });
    }, []);
  return (
    <div className='leftPaneContainer'>
      <div className="boardingBox">
        <div className="uniDetails">
          <div className="uniBox">
            <span className="uniName">NSBM</span>
            <img src="./images/nsbm.jpg" alt="NSBM Logo" className="uniImg" />
          </div>
        </div>
        <div className="boardinDetails">
          {ownerNames.length > 0 ? (
            ownerNames.map((ownerName, index) => (
              <a key={index} href={`/HouseDetails/${useridArray[index]}`} className="ownerDetails">
                {ownerName}
              </a>
            ))
          ) : (
            <p>No owner names found.</p>
          )}
        </div>
      </div>
    </div>
  )
  

          }
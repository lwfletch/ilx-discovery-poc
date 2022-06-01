import React, { useState, useEffect } from "react";

export default function HomeContent() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await fetch('https://swapi.dev/api/people');
          // convert the data to json
          const json = await data.json();      
          // set state with the result
          setPeople(json.results);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])
      console.log('PEOPLE', people)
    return (
        <div className="grid grid-cols-4 gap-5">
            {people.map((person) => (
                <div key={person.url}>{person.name}</div>
            ))}
        </div>
    )
}
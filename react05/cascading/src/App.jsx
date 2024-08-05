import {  useState } from "react";

export default function App() {
  const data = {
    countries: {
      india: {
        states: {
          andhraPradesh: {
            cities: ["Hyderabad", "Visakhapatnam", "Vijayawada"]
          },
          karnataka: {
            cities: ["Bengaluru", "Mysuru", "Mangalore"]
          },
          tamilNadu: {
            cities: ["Chennai", "Madurai", "Coimbatore"]
          }
        }
      },
      usa: {
        states: {
          california: {
            cities: ["Los Angeles", "San Francisco", "San Diego"]
          },
          newYork: {
            cities: ["New York City", "Buffalo", "Rochester"]
          },
          texas: {
            cities: ["Houston", "Dallas", "Austin"]
          }
        }
      },
      canada: {
        states: { // Provinces in Canada
          ontario: {
            cities: ["Toronto", "Ottawa", "Hamilton"]
          },
          quebec: {
            cities: ["Montreal", "Quebec City", "Laval"]
          },
          britishColumbia: {
            cities: ["Vancouver", "Victoria", "Burnaby"]
          }
        }
      }
    }
  };
  const [selectedcountry,setselectedcountry]=useState("")
  const [selectedstate,setselectedstate]=useState("")
 
    const handlecontrychange=(e)=>{
      setselectedcountry(e.target.value)
      setselectedstate("")
    }
    const handlestatechange=(e)=>{
      setselectedstate(e.target.value)
    }  
    console.log(selectedcountry + selectedstate)
 
  return (
    <div className="App">
      <select  onChange={handlecontrychange} >
        <option  >select COuntry</option>
        { Object.keys(data.countries).map(countries=>(
          <option key={countries} value={countries} >{countries}</option>
        ))  }
      </select>
    
        {selectedcountry && (
          <select  onChange={handlestatechange}>
            <option>Select State</option>
            {Object.keys(data.countries[selectedcountry].states).map(states=>(
              <option key={states} >{states}</option>
            ))}
          </select>
        )}

            {  selectedstate &&  (
              <select>
                <option>Select city</option>
                {Object.values(data.countries[selectedcountry].states[selectedstate].cities).map(cities=>(
                  <option key={cities} >{cities}</option>
                ))}
              </select>
            )}
           


    </div>
  );
}


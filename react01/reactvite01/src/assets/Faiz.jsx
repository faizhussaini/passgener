import { useState } from "react"

const Faiz = () => {
  const [addedvalue, setaddedvalue] = useState(0)

  function adderfunction() {
    setaddedvalue(addedvalue + 1)
  }
function subvalue() {
  setaddedvalue(addedvalue-1)
}
  return (
    <>
    <div>Faiz Components</div>
    <h1>{addedvalue}</h1>
    <button onClick={adderfunction}>Adder</button>
    <button onClick={subvalue}>Subtracter</button>
    </>
  )
}

export default Faiz
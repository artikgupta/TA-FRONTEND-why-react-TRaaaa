import React from "react"
import Button  from "./Button"

function App(){
    
return(
  <Button label="abc" onClickHandler={() => alert('clicked')} size="large" type="primary"/>
)
}

export default App
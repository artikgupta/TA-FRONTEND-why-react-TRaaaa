import data from "./colors.json";


function App(){
    const colors = Object.keys(data)
    console.log(colors)
    return(
        <>
        {colors.map((color) => {
            return (
                <div>
                    <h2>{color}</h2>
                    <div className="flex">
                        {data[color].map((hex) => (
                            <div  className="m-2">
                                    <div style = {{backgroundColor:hex,width:'200px',height:'80px'}}></div>
                                    <h4>{hex}</h4>
                                </div>
                        ))}
                    </div>
                </div>
            )
        })}
        </>

        
    )
}

export default App
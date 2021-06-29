function handleClick(){
    alert("Hello React Event")
}

function clickEvent(){
alert(` To learn React use https://reactjs.org`)
alert("React and ReactDOM works together")
alert("Babel helps in writing JSX")
}


function nameButton(event){
    console.log(event)

}


    let fruits = [
        { id: 'apple', value: '🍎 apple' },
        { id: 'orange', value: '🍊 orange' },
        { id: 'grape', value: '🍇 grape' },
        { id: 'pear', value: '🍐 pear' },
      ];


function App(){
    return (
        <>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={clickEvent}>How can I help you?</button>
        <button onClick={(event)=>nameButton(event)}>Arya</button>
        <button onClick={(event)=>nameButton(event)}>John</button>
        <button onClick={(event)=>nameButton(event)}>Bran</button>

        {
            fruits.map((v)=>{
                <button>{v.value}</button>
            })
        }
       
        </>
    )
}

export default App
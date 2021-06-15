let input = document.querySelector(`input[type="text"]`)

let rootElm = document.querySelector(".movie_lists")


let allMovies =[]





input.addEventListener("keyup", (event)=>{

    if(event.keyCode===13){
        console.log(event.target.value)
        allMovies.push({
            name:event.target.value,
            watched:false
        })

    }

    createMovieUI()

})


function deleteMovie(event  ){
let id = event.target.dataset.id;
allMovies.splice(id,1)
createMovieUI()
}


function handleChange(event){
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched
    createMovieUI()
    }

function createMovieUI(){
    rootElm.innerHTML =""
    allMovies.forEach((ele,i)=>{
        let li = document.createElement("li")
        let text = document.createElement("span")
        text.innerText = ele.name
        let input = document.createElement("input")
        input.type= "checkbox";
        input.checked= ele.watched
        input.id=i
        input.addEventListener("change",handleChange)
        let span = document.createElement("span")
        span.innerText="X"
        span.setAttribute("data-id", i)
    
        span.addEventListener("click",deleteMovie)

        li.append(input,text,span)
        rootElm.append(li)
    
    })
   
}
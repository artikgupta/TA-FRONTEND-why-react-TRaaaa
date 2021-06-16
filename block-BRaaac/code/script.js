let input = document.querySelector(`input[type="text"]`)

let rootElm = document.querySelector(".movie_lists")


let allMovies =[]

function elm(type, attr ={},  ...children){

    let element = document.createElement(type)

    for (let key in attr){
        if(key.startsWith("data-")){
            element.setAttribute(key,attr[key])
        }else{
            element[key] = attr[key]
        }
    }

    children.forEach((child)=>{
    if(typeof child ==="object"){
        element.append(child)
    }

    if(typeof child === "string"){
        let node = document.createTextNode(child);
        element.append(node)
    }
})

    return element;

}



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
        let btn =  elm("button",{id:i},ele.watched ? "Watched" : "To Watch")
        btn.addEventListener("change",handleChange)
        let li = elm("li", null, elm("label",{for:i}, ele.name),btn)

        // let text = elm("span")
        // text.innerText = 
        // let button = elm("button")
        // button.id = i
        // button.innerText = 
        // let span = document.createElement("span")
        // span.innerText="X"
        // span.setAttribute("data-id", i)
        // span.addEventListener("click",deleteMovie)
        // li.append(button,text,span)

        rootElm.append(li)
    
    })
   
}
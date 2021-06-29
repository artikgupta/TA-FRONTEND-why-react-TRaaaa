 import PropTypes from "prop-types"
import data from "./data.json"

function Articles(){
    return(<div>
    {data.map((article,i)=>{
        return <div key={i}>
            {article.title}
            <img src ={article.urlToImage} width="40%"/>
        </div>
    })}
    </div>
    )
}

Articles.propTypes ={
    title :PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
}

export default Articles
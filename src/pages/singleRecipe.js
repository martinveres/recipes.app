import React, { Component } from 'react'
import {recipeData} from '../data/tempDetails'
import {Link} from 'react-router-dom'
import { findAllInRenderedTree } from 'react-dom/test-utils'
export default class singleRecipe extends Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id
        this.state = {
            recipe: recipeData,
            id,
            loading:false 
        }  
    }
    render() {
        const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe
        if(this.state.loading) {
            return(<div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h2 className="text-orange text-uppercase">Loading recipe...</h2>
                    </div>
                </div>
            </div>)
        }
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize"> Back to Recipes </Link>
                        <img className="d-block w-100" style= { {maxHeight:"30rem"}} src={image_url} alt="recipe"></img>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase">
                            {title}
                        </h6>
                        <h6 className="text-warning text-capitalize text-slanted">
                            provided by: {publisher}
                        </h6>
                        <a href={publisher_url} target="_blank" rel = "noopener noreferrer"
                         className="btn btn-danger text-uppercase mt-3 "> publisher webpage</a>
                         <a href={source_url} target="_blank" rel = "noopener noreferrer"
                          className="btn btn-success text-uppercase mt-3 mx-3 "> recipe url</a>
                         <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-2">
                                Ingredients:
                                {ingredients.map((item, index)=> {return (<li key={index} className="list-group-item text-slanted"> {item} </li>)})}
                            </h2>
                         </ul>
                    </div>
                </div>
            </div>
        )
    }
}
 
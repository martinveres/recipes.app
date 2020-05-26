import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Recipe extends Component {
    render() {
        const{image_url, title, source_url, publisher, recipe_id} = this.props.recipe;
        return (
           <div className = "col-10 mx-auto col-md-6 col-lg-4 my-3"> 
               <div className="card" style={{height:'100%'}}>
                <img className="img-card-top" src={image_url} style={{height:'14rem'}} alt="recipe image"></img>
                <div className="card-body text-capitalize">
                    <h4>{title}</h4>
                    <h4 className="text-warning text-slanted">Provided by: {publisher}</h4>
                </div>
                <div className="card-footer">
                    <Link to={`/recipes/${recipe_id}`} className="btn btn-primary text-capitalize "> details</Link>
                    <a href={source_url} target="_blank" rel = "noopener norefe"
                    className="btn btn-success mx-2 text-capitalize"> recipe url</a>
                </div>
               </div>
           </div>
        )
    }
}

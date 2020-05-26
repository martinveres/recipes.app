import React, { Component } from 'react'

export default class search extends Component {
    
    render() {
        const {handleChange, handleSubmit, search} =this.props
        return (
            <div className="container">
               <div className="row">
                   <div className= "col-10 mx-auto col-md-8 mt-5 text-center">
                    <h1 className="text-slanted text-capitalize">
                            Search Recipes with <strong className="text-orange">Food2Fork </strong>
                        </h1>
                        <form className="mt-4">
                            <label htmlFor="search" className="text-capitalize"> 
                                Type recipes separated by comma
                            </label>
                            <div className="input-group">
                                <input type="text"
                                 name= "Search"
                                 className="form-control"
                                 placeholder="onion, carrot, beef"
                                 value={search} 
                                 onChange = {handleChange}>
                                 </input>
                                 <div className= "input-group-append">
                                    <button type="submit" className="input-group-text bg-primary text-white" onClick={handleSubmit}>
                                        <i className= "fas fa-search"></i>
                                    </button>
                                 </div>
                            </div>
                        </form>
                   </div>
               </div>
            </div>
        )
    }
}

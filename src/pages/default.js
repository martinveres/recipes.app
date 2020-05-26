import React, { Component } from 'react'
import Header from '../components/Header';
import {Link} from 'react-router-dom';
export default class extends Component {
    render() {
        return (
           <Header title="404" styleClass="default-hero">
               <h2 className="text-light text-uppercase">This page doesn't exist!</h2>
               <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
                   return home
               </Link>
           </Header>
        )
    }
}

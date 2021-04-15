import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Navegation extends Component {

    render(){
        return (
            <Navbar bg="dark" className="opacityNav" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="logo-meraki-black.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink className="nav-link active" aria-current="page" to='/' >Inicio</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to='/Mens' >Hombres</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to='/Womens' >Mujeres</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to='/Kids' >Niños</NavLink>
                    <NavLink className="nav-link active" aria-current="page" to='/Accesories' >Accesorios</NavLink>
                </Nav>
            </Navbar>
        )
    }
}
import React, { Component } from 'react'
import Home from './components/Home'
import Mens from './components/Mens'
import Womens from './components/Womens'
import Accesories from './components/Accesories'
import Kids from './components/Kids'
import Navegation from './components/Navigator'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'


export default class App extends Component {

	Home = () => {
		return <Home />
	}

	Mens = () => {
		return <Mens />
	}

	Womens = () => {
		return <Womens />
	}
	
	Kids = () => {
		return <Kids />
	}

	Accesories = () => {
		return <Accesories />
	}
	render(){
		return (
			<BrowserRouter >
			  <Navegation  />
			  <Route path='/' exact render={this.Home} />
			  <Route path='/Mens' exact render={this.Mens} />
			  <Route path='/Womens' exact render={this.Womens} />
			  <Route path='/Kids' exact render={this.Kids} />
			  <Route path='/Accesories' exact render={this.Accesories} />
			  <Footer />
			</BrowserRouter>	

		)
	}
}

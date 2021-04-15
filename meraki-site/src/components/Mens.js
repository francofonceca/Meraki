import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import Buscador from './Buscador'

const content = [
	{
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rbwPMSiG2zmOw1zq4bur_SdmkigbK0arl90x2Rn9RjKNMwdEk3UmxzdROz0OcHeXMDA&usqp=CAU',
    user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://intimodaperu.com/media/pt/slider/slide/slider-agua-doc.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'',
		button: 'Buy now',
		image: 'https://intimodaperu.com/media/pt/slider/slide/slide-5.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

export default class Mens extends Component{
    render(){
        return(
            <div>
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <img src="logo-meraki-black.png" alt="Logo Meraki" width="70" height="70" />
                                <h1>H   O   M   B   R   E   S</h1>
                                <p>{item.description}</p>
                                <button className="btn-home-ver-mas2">Ver más</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="container py-4"> 
                    <Buscador
                        datosBusqueda="Playa"
                    />
                </div>
               
            </div>
        )
    }
}
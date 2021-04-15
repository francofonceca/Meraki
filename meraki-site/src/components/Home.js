import React from 'react';
import Slider from 'react-animated-slider';
import '../css/horizontal.css';
import 'normalize.css/normalize.css';
import '../css/slider-animations.css';
import '../css/style.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import { NavLink } from 'react-router-dom'

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
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://intimodaperu.com/media/pt/slider/slide/slide-5.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const Home = () => (
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
						<h1>M   E   R   A   K   I</h1>
						<h1>I   N   D   U   M   E   N   T   A   R   I   A</h1>
						<p>{item.description}</p>
						<button className="btn-home-ver-mas2">Ver más</button>
					</div>
				</div>
			))}
		</Slider>
		<CardGroup className="p-3"> 
			<Card className="position-relative filtro-card-opacity border-none">
				<NavLink className="nav-link active" aria-current="page" to='/Womens' >
					<Card.Img className="filtro-imagen-opacity" variant="top" height="250" width="250" src="https://livedemo00.template-help.com/prestashop_53967/modules/themeconfigurator/img/9e959d3bc8dd96fbecacb283bb7083ae13e8c4d4_banner-1.jpg" />
					<div className="position-absolute text-type-section">
						<h2> Mujeres</h2>
						<h4> Nuevos Ingresos</h4>
					</div>
				</NavLink>
			</Card>
			<Card className="px-1 filtro-card-opacity border-none">
				<NavLink className="nav-link active" aria-current="page" to='/Mens' >
					<Card.Img  variant="top" height="250" width="250" src="https://livedemo00.template-help.com/prestashop_53967/modules/themeconfigurator/img/72459bc787a9ef9116819e40b34d6b4668d12e10_banner-2.jpg" />
					<div className="position-absolute text-type-section">
						<h2> Hombres</h2>
						<h4> Nuevos Ingresos</h4>
					</div>
				</NavLink>
			</Card>
			<Card className="filtro-card-opacity border-none">
				<NavLink className="nav-link active" aria-current="page" to='/Kids' >
					<Card.Img   variant="top" height="250" width="250" src="niña.jpg" />
					<div className="position-absolute text-type-section">
						<h2> Niños</h2>
						<h4> Nuevos Ingresos</h4>
					</div>
				</NavLink>
			</Card>
		</CardGroup>
		<Card className="filtro-card-opacity p-3 border-none" >
				<NavLink className="nav-link active" aria-current="page" to='/Accesories' >
					<Card.Img   variant="top" height="300" src="https://intimodaperu.com/media/pt/slider/slide/slider-agua-doc.jpg" />
					<div className="position-absolute text-type-section">
						<h2> Accesorios</h2>
						<h4> Ingresá para más información</h4>
					</div>
				</NavLink>
		</Card>
		
		{/* ----------- PRODUCTOS DESTACADOS ------------------- */}
		
		<Card className="text-center texto-home py-3 border-none">
			<h1>PRODUCTOS DESTACADOS</h1>
		</Card>
			
		<CardGroup className="text-center texto-home py-3 border-none">
			<CardDeck className="p-3 border-none">
				<Card>
					<Card.Img variant="top" height="457" src="https://www.moha.com.ar/producto/1-16-55-10/md/MOH_3153.jpg" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<button  className="btn-home-ver-mas mb-2">Ver más</button>
					<br />
				</Card>
				<Card>
					<Card.Img variant="top" height="457" src="https://www.moha.com.ar/producto/1-16-55-10/md/MOH_3153.jpg" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text >
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
					<button className="btn-home-ver-mas mb-2">Ver más</button>
					<br />
				</Card>
				<Card>
					<Card.Img variant="top" height="457" src="https://www.moha.com.ar/producto/1-16-55-10/md/MOH_3153.jpg" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional
							content.{' '}
						</Card.Text>
					</Card.Body>
					<button  className="btn-home-ver-mas mb-2">Ver más</button>
					<br />
				</Card>
				<Card>
					<Card.Img variant="top" height="457" src="https://www.moha.com.ar/producto/1-16-55-10/md/MOH_3153.jpg" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
						</Card.Text>
					</Card.Body>
					<button  className="btn-home-ver-mas mb-2">Ver más</button>
					<br />
				</Card>
			</CardDeck>
		</CardGroup>
		{/* ----------- FIN PRODUCTOS DESTACADOS ----------------- */}

		
	</div>
);

export default Home;

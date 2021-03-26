import React from 'react';
import Slider from 'react-animated-slider';
import './css/horizontal.css';
import 'normalize.css/normalize.css';
import './css/slider-animations.css';
import './css/style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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

const App = () => (
	<div>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">For Mens</Nav.Link>
            <Nav.Link href="#pricing">For Womens</Nav.Link>
            <Nav.Link href="#pricing">For Kids</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
        </Nav>
    </Navbar>
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
						<button>Ver más</button>
					</div>
				</div>
			))}
		</Slider>
	</div>
);

export default App;

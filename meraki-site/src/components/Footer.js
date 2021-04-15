import React, { Component } from 'react'


export default class Footer extends Component{
    render(){
        return(
		    <footer className="page-footer font-small blue pt-4 text-white ">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mt-md-0 mt-3" >
                            <h5 className="text-uppercase">Meraki Indumentaria</h5>
                            <p>Hacer algo propio con amor y creatividad</p>
                            <p>Poniendo el cuerpo y alma en ello <i className="bi bi-flower3"></i></p>
                            
                        </div>
                        {/* <hr className="clearfix w-100 d-md-none pb-3" /> */}
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Categorias</h5>
                            <ul className="list-unstyled">
                                <li className="p-1"> 
                                    <a href="#!" className="text-dec-none">REMERAS</a>	
                                </li>
                                <li className="p-1">
                                    <a href="#" className="text-dec-none">CAMISAS</a>
                                </li>
                                <li className="p-1">
                                    <a href="#" className="text-dec-none">CAMPERAS</a>
                                </li>
                                <li className="p-1">
                                    <a href="#" className="text-dec-none">JEANS</a>
                                </li>
                                <li className="p-1">
                                    <a href="#" className="text-dec-none">TOPS</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Contactanos</h5>
                            <ul className="list-unstyled">
                                <li className="p-1">
                                    <a href="#!" className="text-dec-none"><i className="bi bi-whatsapp"></i> 1141444498</a>	
                                </li>
                                <li className="p-1">
                                    <a href="#" className="text-dec-none"><i className="bi bi-telephone"></i> 1141444498</a>
                                </li>
                                <li className="p-1">
                                    <a href="#" className="text-dec-none"><i className="bi bi-geo-alt"></i> SUCURSALES</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Seguinos en</h5>
                            <ul className="list-unstyled">
                                <li className="p-1 py-2">
                                    <a href="#" className="text-dec-none"><i className="bi bi-facebook"></i> merakiindumentaria</a>
                                </li>
                                <li className="p-1 py-3">
                                    <a href="#" className="text-dec-none"><i className="bi bi-instagram"></i> merakinatacha</a>
                                </li>
                                <li className="p-1 py-2">
                                    <a href="#" className="text-dec-none"><i className="bi bi-twitter"></i> merakinatacha</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright: Toda la información dentro de este sitio web es parte de Meraki inc y asociados.
                </div>
            </footer>
        )
    }
}
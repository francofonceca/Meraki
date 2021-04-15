import React, {Component} from 'react';

class Buscador extends Component{
    //nos va a devolver lo que se busco en el input con esta buysquedaref
    busquedaRef = React.createRef();
    state = {
        filtros: false
    }
//funcion para recibir los datos de un onSubmit del form
    obtenerDatos = (e) =>{
        e.preventDefault();
        //agarramos el valor del input
        //lo mandamos al componente principal
        // this.props.datosBusqueda(this.busquedaRef.current.value);
        console.log(this.busquedaRef.current.value);
    
    }
    filterView = () =>{
        this.setState({filtros : !this.state.filtros })
    }
    render(){
        return( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-9">
                        <input ref={this.busquedaRef} type="text" className=" form-search" placeholder=" Busca tu Producto, Ejemplo: Remera Corta Roja"/>
                    </div>
                    <div className="form-group col-md-1">
                        <i onClick={this.filterView} class="bi bi-filter filter-icon-size"></i>
                    </div>
                    <div className="form-group col-md-2">
                                <button type="submit" className="btn-home-ver-mas2">Buscar</button>
                    </div>
                    {
                        this.state.filtros 
                        ?
                            (
                                <div className="col-md-12">
                                    Mostrando filtros
                                </div>
                            )
                        : ''
                    }
                    
                </div>
            </form>
        );
    }
}
export default Buscador;
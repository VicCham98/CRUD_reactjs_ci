import React, {Component} from "react";
import axios from 'axios';
import {APIHost as host} from "../../App.json";
import {Container, Form, Button} from 'react-bootstrap';

class ArticulosActualizar extends Component{

	state = {
		nombre : '',
		descripcion : '',
		marca : ''
	};

	componentDidMount() {
		this.getArticulo();
	}

	getArticulo(){
		let id = this.props.match.params.id;
		axios.get(host+'api/item/articulos/'+id)
			.then(response => {
				//if (response.data.exito)
				this.setState({
					nombre: response.data.nombre,
					descripcion: response.data.descripcion,
					marca: response.data.marca
				});
				console.log(response.data)
			});
	}

	actualizarArticulo(){
		let id = this.props.match.params.id;
		axios.put(host+'api/item/actualizar/'+id, this.state)
			.then(response => {
				//if (response.data.exito)
				console.log(response.data)
			}).catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			console.log(error.config);
		});
	}

	render() {
		return (
			<Container>
				<Form>
					<Form.Group>
						<Form.Label>Nombre articulo</Form.Label>
						<Form.Control type="text" placeholder="Nombre articulo"
									  onChange={e => this.setState({nombre: e.target.value})} value={this.state.nombre}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Descripcion</Form.Label>
						<Form.Control type="text" placeholder="Descripcion"
									  onChange={e => this.setState({descripcion: e.target.value})} value={this.state.descripcion}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Marca articulo</Form.Label>
						<Form.Control type="text" placeholder="Marca articulo"
									  onChange={e => this.setState({marca: e.target.value})} value={this.state.marca}/>
					</Form.Group>
					<Button onClick={() => this.actualizarArticulo()}>
						Actualizar articulo
					</Button>
				</Form>
			</Container>
		);
	}
}

export default ArticulosActualizar;

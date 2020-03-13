import React, {Component} from "react";
import axios from 'axios';
import {APIHost as host} from "../../App.json";
import {Container, Form, Button} from 'react-bootstrap';

class ArticulosGuardar extends Component{

	state = {
		nombre : '',
		descripcion : '',
		marca : ''
	};

	guardarArticulo(){
		let data = JSON.stringify({
			nombre: this.state.nombre,
			descripcion: this.state.descripcion,
			marca: this.state.marca
		});
		axios.post(host+'api/item/guardar/', this.state)
			.then(response => {
				//if (response.data.exito)
				console.log(response.data)
			});
		/*axios.post(host+'api/Item/guardar/', data, {headers:{"Content-Type" : "application/json"}})
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
		});*/
		/*fetch(host+'api/Item/guardar', {
			method: 'POST',
			body: JSON.stringify({
				nombre: this.state.nombre,
				descripcion: this.state.descripcion,
				marca: this.state.marca
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			if(response.status === 200) {
				alert("New website saved successfully");
			}
		});*/
	}

	render() {
		return (
			<Container>
				<Form>
					<Form.Group>
						<Form.Label>Nombre articulo</Form.Label>
						<Form.Control type="text" placeholder="Nombre articulo"
									  onChange={e => this.setState({nombre: e.target.value})}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Descripcion</Form.Label>
						<Form.Control type="text" placeholder="Descripcion"
									  onChange={e => this.setState({descripcion: e.target.value})}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Marca articulo</Form.Label>
						<Form.Control type="text" placeholder="Marca articulo"
									  onChange={e => this.setState({marca: e.target.value})}/>
					</Form.Group>
					<Button onClick={() => this.guardarArticulo()}>
						Guardar articulo
					</Button>
				</Form>
			</Container>
		);
	}
}

export default ArticulosGuardar;

import React, {Component} from "react";
import axios from 'axios';
import {APIHost as host} from "../../App.json";
import {Table, Button} from 'react-bootstrap'

class Articulos extends Component {

	state = {
		articulos : []
	};

	componentDidMount() {
		this.getArticulos();
	}

	getArticulos(){
		axios.get(host+'api/item/articulos')
			.then(response => {
				this.setState({
					articulos : response.data
				});
				console.log(response.data);
			}, (error) => {
				console.log(error)
			});
	}

	showEditar($id){
		this.props.history.push('/articulos/actualizar/'+$id);
	}

	render() {
		return (
			<Table striped bordered hover>
				<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Descripcion</th>
					<th>Marca</th>
				</tr>
				</thead>
				<tbody>
				{
					this.state.articulos.map((articulo, i ) => {
						return (
							<tr key={i}>
								<td>{articulo.idMarca}</td>
								<td>{articulo.nombre}</td>
								<td>{articulo.descripcion}</td>
								<td>{articulo.marca}</td>
								<td><Button onClick={() => this.showEditar(articulo.idMarca)}>Editar</Button></td>
							</tr>
						)
					})
				}
				</tbody>
			</Table>
		);
	}
}

export default Articulos;

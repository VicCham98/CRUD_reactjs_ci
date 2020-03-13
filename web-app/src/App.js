import React from 'react';
import Articulos from "./components/articulos/Articulos";
import ArticulosGuardar from "./components/articulos/ArticulosGuardar";
import ArticulosActualizar from "./components/articulos/ArticulosActualizar";

import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/articulos">Ver articulos</Link>
						</li>
						<li>
							<Link to="/articulos/crear">Crear articulo</Link>
						</li>
					</ul>
					<hr/>
					<Route exact path="/articulos" component={Articulos} />
					<Route exact path="/articulos/crear" component={ArticulosGuardar}/>
					<Route exact path="/articulos/actualizar/:id" component={ArticulosActualizar}/>
				</div>
			</Router>
			{/*<Articulos/>*/}
			{/*<ArticulosGuardar/>*/}
		</div>
	);
}

export default App;

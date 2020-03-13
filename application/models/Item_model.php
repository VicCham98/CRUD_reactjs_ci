<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Item_model extends CI_Model {

	public function getProductos(){
		$this->db->select("p.*,c.nombre as categoria");
		$this->db->from("productos p");
		$this->db->join("categorias c", "p.categoria_id = c.id");
		$this->db->where("p.estado","1");
		$resultados = $this->db->get();
		return $resultados->result();
	}

	public function index_get($id){
		if(!empty($id)){
			$this->db->where('idMarca', $id);
			$resultado = $this->db->get("articulos");
			return $resultado->row();
		}else{
			$resultado = $this->db->get("articulos");
			return $resultado->result();
		}
	}

	public function guardar_post($input){
		return $this->db->insert('articulos',$input);
	}

	public function update_put($id,$data){
		$this->db->where('idMarca',$id);
		return $this->db->update('articulos', $data);
	}

	public function index_delete($id){
		$this->db->where('idMarca',$id);
		return $this->db->delete('articulos');
	}

}

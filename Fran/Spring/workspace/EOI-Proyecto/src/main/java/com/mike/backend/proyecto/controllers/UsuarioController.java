package com.mike.backend.proyecto.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.mike.backend.proyecto.models.entity.Usuario;
import com.mike.backend.proyecto.models.services.IUsuarioService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/api")

public class UsuarioController {

	@Autowired
	private IUsuarioService usuarioService;
	
	
	// <------  Metodos Get ---->
	@GetMapping("/usuarios")
	@Transactional
	public List<Usuario> index() {
		return usuarioService.findAll();
	}
	
	@GetMapping("/usuarios/{id}")
	@Transactional
	public ResponseEntity<?> index(@PathVariable Long id) {
		Usuario usuario = null;
		Map<String,Object> response = new HashMap();

		try {
			usuario = usuarioService.findById(id);
		} catch (DataAccessException e) {	// Base de datos innacesible
			response.put("mensaje", "Error al acceder a la base de datos");
			response.put("error",e.getMessage()
					.concat(": ")
					.concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if(usuario==null) {   // El id no existe
			response.put("mensaje", "El cliente con ID: "
					.concat(id.toString()
					.concat( " no existe")));
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		// El id existe
		return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
	}
	
	// <----- Metodos Post ------->
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario create(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
		return usuario;
	}
	
	
	// <----- Metodos Delete  ------->
	@DeleteMapping("/usuarios/{id}")
	@Transactional
	public void deleteById(@PathVariable Integer id) {
		usuarioService.deleteById(id);
	}
}

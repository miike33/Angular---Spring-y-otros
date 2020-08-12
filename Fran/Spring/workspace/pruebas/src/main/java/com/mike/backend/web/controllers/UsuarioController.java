package com.mike.backend.web.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.mike.backend.web.models.entity.Usuario;
import com.mike.backend.web.models.services.IUsuarioService;

@CrossOrigin(origins = { "http://localhost:8100" })
@RestController
@RequestMapping("/api")

public class UsuarioController {

	@Autowired
	private IUsuarioService usuarioService;

	// <--- Metodos Get --->
	@GetMapping("/usuarios")
	public List<Usuario> index() {
		return usuarioService.findAll();
	}

	@GetMapping("/usuarios/{id}")
	@Transactional
	public ResponseEntity<?> index(@PathVariable Long id) {

		Usuario usuario = null;
		Map<String, Object> response = new HashMap();

		try {
			usuario = usuarioService.findById(id);
		} catch (DataAccessException e) { // No se puede acceder a la base de datos
			response.put("Error: ", "No se ha podido acceder a la  base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (usuario == null) { // El id no existe
			response.put("Error: ", "El usuario con ID: ".concat(id.toString().concat(" no existe")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		// Devuelve el usuario si existe
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}

	// <----- Metodos Post ------->
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@Validated @RequestBody Usuario usuario, BindingResult result) {

		Usuario newUsuario = null;
		Map<String, Object> response = new HashMap();

		if (result.hasErrors()) {
			List<String> errores = result.getFieldErrors().stream()
					.map(err -> "El campo: " + err.getField() + " " + err.getDefaultMessage())
					.collect(Collectors.toList());
			response.put("errores", errores);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}

		try {
			newUsuario = usuarioService.save(usuario);
		} catch (DataAccessException e) {
			response.put("Error: ", "no se ha podido acceder a la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		response.put("Correcto!", "El cliente ha sido añadido");
		response.put("usuario", newUsuario);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	

	// Update usuario
	@PutMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario update(@RequestBody Usuario usuario, @PathVariable Long id) {
		Usuario currentUsuario = this.usuarioService.findById(id);
		currentUsuario.setNombre(usuario.getNombre());
		currentUsuario.setEmail(usuario.getEmail());
		currentUsuario.setPassword(usuario.getPassword());
		this.usuarioService.save(currentUsuario);
		return currentUsuario;
	}

	// <----- Metodos Delete ------->
	@DeleteMapping("/usuarios/{id}")
	@Transactional
	public void deleteById(@PathVariable Long id) {
		usuarioService.deleteById(id);
	}
}

package com.mike.backend.web.controllers;

import java.util.Date;
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
import com.mike.backend.web.models.entity.Noticia;
import com.mike.backend.web.models.entity.Usuario;
import com.mike.backend.web.models.services.INoticiaService;

@CrossOrigin(origins = { "http://localhost:8100" })
@RestController
@RequestMapping("/api")

public class NoticiaController {

	@Autowired
	private INoticiaService noticiaService;

	// <-------- Metodos GET ------->
	// Request GET de todas las noticias
	@GetMapping("/noticias")
	public List<Noticia> index2() {
		return noticiaService.findAll();
	}

	// Request GET de la noticia a partir de su id
	@GetMapping("/noticias/{id}")
	@Transactional
	public ResponseEntity<?> index(@PathVariable Long id) {

		Noticia noticia = null;
		Map<String, Object> response = new HashMap();

		try {
			noticia = noticiaService.findById(id);
		} catch (DataAccessException e) { // No se puede acceder a la base de datos
			response.put("Error: ", "No se ha podido acceder a la  base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (noticia == null) { // El id no existe
			response.put("Error: ", "La noticia con ID: ".concat(id.toString().concat(" no existe")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		// Devuelve la noticia si existe
		return new ResponseEntity<Noticia>(noticia, HttpStatus.OK);
	}

	// <----- Metodos Post ------->
	// Crea una nueva noticia
	@PostMapping("/noticias")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@Validated @RequestBody Noticia noticia, BindingResult result) {

		Noticia newNoticia= null;
		Map<String, Object> response = new HashMap();

		if (result.hasErrors()) {
			List<String> errores = result.getFieldErrors().stream()
					.map(err -> "El campo: " + err.getField() + " " + err.getDefaultMessage())
					.collect(Collectors.toList());
			response.put("errores", errores);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}

		try {
			noticia.setDateAt(new Date());
			newNoticia = noticiaService.save(noticia);
		} catch (DataAccessException e) {
			response.put("Error,", "no se ha podido acceder a la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		response.put("mensaje", "El cliente se insertó correctamente!");
		response.put("noticia", newNoticia);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	
	
	// Update noticia
	@PutMapping("/noticias/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Noticia update(@RequestBody Noticia noticia, @PathVariable Long id) {
		Noticia currentNoticia = this.noticiaService.findById(id);
		currentNoticia.setCategoria(noticia.getCategoria());
		currentNoticia.setContenido(noticia.getContenido());
		currentNoticia.setTitulo(noticia.getTitulo());
		noticia.setDateAt(new Date());
		currentNoticia.setDateAt(noticia.getDateAt());
		currentNoticia.setImagen(noticia.getImagen());
		this.noticiaService.save(currentNoticia);
		return currentNoticia;
	}

	// <----- Metodos Delete ------->
	// Borra noticia a partir de su id
	@DeleteMapping("/noticias/{id}")
	@Transactional
	public void deleteById(@PathVariable Long id) {
		noticiaService.deleteById(id);
	}
}

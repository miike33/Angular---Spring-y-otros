package com.mike.backend.proyecto.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mike.backend.proyecto.models.entity.Noticia;
import com.mike.backend.proyecto.models.services.INoticiaService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")

public class NoticiaController {
	@Autowired
	private INoticiaService noticiaService;

	// <------ Metodos Get ---->
	@GetMapping("/noticias")
	@Transactional
	public List<Noticia> index() {
		return noticiaService.findAll();
	}

	@GetMapping("/noticias/{id}")
	@Transactional
	public Noticia index(@PathVariable Integer id) {
		return noticiaService.findById(id);
	}

	// <----- Metodos Post ------->
	@PostMapping("/noticias")
	@ResponseStatus(HttpStatus.CREATED)
	public Noticia create(@RequestBody Noticia noticia) {
		noticiaService.save(noticia);
		return noticia;
	}

	// <----- Metodos Delete ------->
	@DeleteMapping("/noticias/{id}")
	@Transactional
	public void deleteById(@PathVariable Integer id) {
		noticiaService.deleteById(id);
	}
}

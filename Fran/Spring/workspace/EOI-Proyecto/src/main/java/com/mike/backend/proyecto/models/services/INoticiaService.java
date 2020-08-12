package com.mike.backend.proyecto.models.services;

import java.util.List;

import com.mike.backend.proyecto.models.entity.Noticia;

public interface INoticiaService {
	
	public List<Noticia> findAll();
	public void save(Noticia noticia);
	public Noticia findById(Integer id);
	public void deleteById(Integer id);
}

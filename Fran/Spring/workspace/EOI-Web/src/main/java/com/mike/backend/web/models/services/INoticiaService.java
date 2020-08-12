package com.mike.backend.web.models.services;

import java.util.List;
import com.mike.backend.web.models.entity.Noticia;

public interface INoticiaService {

	public List<Noticia> findAll();
	public Noticia save(Noticia noticia);
	public Noticia findById(Long id);
	public void deleteById(Long id);
}

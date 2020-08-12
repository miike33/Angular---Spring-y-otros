package com.mike.backend.web.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.mike.backend.web.models.entity.Noticia;

public interface InoticiaDAO extends CrudRepository<Noticia, Long>{
	
}

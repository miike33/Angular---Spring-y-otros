package com.mike.backend.proyecto.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.mike.backend.proyecto.models.entity.Noticia;

public interface InoticiaDAO extends CrudRepository<Noticia, Integer>{

}

package com.fran.springboot.backend.eventos.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.fran.springboot.backend.eventos.entidades.Evento;

@RepositoryRestResource(path = "eventos", collectionResourceRel = "eventos")
public interface IEvento extends JpaRepository<Evento, Integer>{
	
}

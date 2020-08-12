package com.mike.backend.proyecto.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.mike.backend.proyecto.models.entity.Usuario;

public interface IusuarioDAO extends CrudRepository<Usuario, Integer> {

}

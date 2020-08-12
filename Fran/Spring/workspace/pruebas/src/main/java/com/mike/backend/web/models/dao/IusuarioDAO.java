package com.mike.backend.web.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.mike.backend.web.models.entity.Usuario;

public interface IusuarioDAO extends CrudRepository<Usuario, Long> {


}

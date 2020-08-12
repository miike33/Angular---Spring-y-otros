package com.mike.spring.mvc.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.mike.spring.mvc.models.entity.Cliente;

public interface IclienteDAO extends CrudRepository<Cliente,Long> {

}

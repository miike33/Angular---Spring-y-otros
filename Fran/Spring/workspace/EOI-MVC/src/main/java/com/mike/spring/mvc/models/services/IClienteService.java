package com.mike.spring.mvc.models.services;

import java.util.List;
import com.mike.spring.mvc.models.entity.Cliente;

public interface IClienteService {

	public List<Cliente> findAll();
	
}

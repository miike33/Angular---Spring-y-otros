package com.mike.backend.proyecto.models.services;

import java.util.List;
import com.mike.backend.proyecto.models.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
	public void save(Usuario usuario);
	public Usuario findById(Long id);
	public void deleteById(Integer id);
	
}

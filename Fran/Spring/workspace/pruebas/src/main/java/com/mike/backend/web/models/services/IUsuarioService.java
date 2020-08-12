package com.mike.backend.web.models.services;

import java.util.List;
import com.mike.backend.web.models.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
	public Usuario save(Usuario usuario);
	public Usuario findById(Long id);
	public void deleteById(Long id);
	
}

package com.mike.backend.proyecto.models.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mike.backend.proyecto.models.dao.IusuarioDAO;
import com.mike.backend.proyecto.models.entity.Usuario;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

	@Autowired
	private IusuarioDAO usuarioDao;
	
	@Override
	@Transactional
	public List<Usuario> findAll() {
		return (List<Usuario>) usuarioDao.findAll();
	}

	@Override
	@Transactional
	public void save(Usuario usuario) {
		usuarioDao.save(usuario);
	}

	@Override
	public Usuario findById(Integer id) {
		return usuarioDao.findById(id).orElse(null);
	}

	@Override
	public void deleteById(Integer id) {
		usuarioDao.deleteById(id);
	}
	
}

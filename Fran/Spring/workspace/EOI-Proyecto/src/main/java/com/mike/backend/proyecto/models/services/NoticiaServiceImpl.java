package com.mike.backend.proyecto.models.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mike.backend.proyecto.models.dao.InoticiaDAO;
import com.mike.backend.proyecto.models.entity.Noticia;

@Service
public class NoticiaServiceImpl implements INoticiaService {
	
	@Autowired
	private InoticiaDAO noticiaDao;

	@Override
	@Transactional
	public List<Noticia> findAll() {
		return (List<Noticia>) noticiaDao.findAll();
	}

	@Override
	@Transactional
	public void save(Noticia noticia) {
		noticiaDao.save(noticia);
	}

	@Override
	public Noticia findById(Integer id) {
		return noticiaDao.findById(id).orElse(null);
	}

	@Override
	public void deleteById(Integer id) {
		noticiaDao.deleteById(id);
	}
}

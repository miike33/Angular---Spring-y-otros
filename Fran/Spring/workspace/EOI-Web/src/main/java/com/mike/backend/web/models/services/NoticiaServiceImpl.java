package com.mike.backend.web.models.services;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mike.backend.web.models.dao.InoticiaDAO;
import com.mike.backend.web.models.entity.Noticia;

@Service
public class NoticiaServiceImpl implements INoticiaService {

	@Autowired
	private InoticiaDAO noticiaDao;
	@Override
	public List<Noticia> findAll() {
		return (List<Noticia>) noticiaDao.findAll();
	}
	
	@Override
	@Transactional
	public Noticia save(Noticia noticia) {
		return noticiaDao.save(noticia);
	}

	@Override
	public Noticia findById(Long id) {
		return noticiaDao.findById(id).orElse(null);
	}

	@Override
	public void deleteById(Long id) {
		noticiaDao.deleteById(id);
	}
}

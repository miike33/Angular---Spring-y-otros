package com.fran.springboot.backend.eventos.entidades.proyecciones;

import java.util.Set;

import org.springframework.data.rest.core.config.Projection;

import com.fran.springboot.backend.eventos.entidades.Evento;
import com.fran.springboot.backend.eventos.entidades.Usuario;

@Projection(name = "conEventos", types = {Usuario.class})
public interface UsuariosConEventos {
	
	public String getUsuario();
	public Set<Evento> getEventos();

}

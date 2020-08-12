package com.fran.springboot.backend.eventos.entidades.proyecciones;

import org.springframework.data.rest.core.config.Projection;

import com.fran.springboot.backend.eventos.entidades.DatosUsuario;
import com.fran.springboot.backend.eventos.entidades.Usuario;

@Projection(name = "conDatos", types = {Usuario.class})
public interface ConDatosUsuario {

	public String getUsuario();
	public DatosUsuario getDatosUsuario();
}

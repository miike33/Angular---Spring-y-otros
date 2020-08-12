package com.mike.backend.web.entidades.dto;

import java.util.Date;

import com.mike.backend.web.models.entity.Noticia;

public class NoticiasDto {

	private Long idNoticia;
	private String categoria;
	private String titulo;
	private String contenido;
	private String imagen;
	private Date dateAt;
	private String autor;
	
	
	public Long getIdNoticia() {
		return idNoticia;
	}
	
	public void setIdNoticia(Long idNoticia) {
		this.idNoticia = idNoticia;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getContenido() {
		return contenido;
	}
	public void setContenido(String contenido) {
		this.contenido = contenido;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public Date getDateAt() {
		return dateAt;
	}
	public void setDateAt(Date dateAt) {
		this.dateAt = dateAt;
	}
	public String getAutor() {
		return autor;
	}
	public void setAutor(String string) {
		this.autor = string;
	}
	
	public static NoticiasDto fromEntity(Noticia noticia) {
		NoticiasDto dto = new NoticiasDto();
		dto.setTitulo(noticia.getTitulo());
		dto.setCategoria(noticia.getCategoria());
		dto.setContenido(noticia.getContenido());
		dto.setIdNoticia(noticia.getIdNoticia());
		dto.setDateAt(noticia.getDateAt());
		dto.setImagen(noticia.getImagen());
		dto.setAutor(noticia.getUsuarios().getNombre());
		
		return dto;
	}
	
}

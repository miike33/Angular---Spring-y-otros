package com.mike.backend.proyecto.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "noticias")
public class Noticia implements java.io.Serializable {


	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id")
	private Usuario usuarios;
	@Column(name = "titulo", length = 60)
	private String titulo;
	@Column(name = "categoria", length = 15)
	private String categoria;
	@Column(name = "contenido", length = 50000)
	private String contenido;
	@Column(name = "fecha", length = 11)
	private String fecha;
	@Column(name = "imagen", length = 200)
	private String imagen;

	public Noticia() {
	}

	public Noticia(Integer id) {
		this.id = id;
	}

	public Noticia(Integer id, Usuario usuarios, String titulo, String categoria, String contenido, String fecha,
			String imagen) {
		this.id = id;
		this.usuarios = usuarios;
		this.titulo = titulo;
		this.categoria = categoria;
		this.contenido = contenido;
		this.fecha = fecha;
		this.imagen = imagen;
	}


	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public Usuario getUsuarios() {
		return this.usuarios;
	}

	public void setUsuarios(Usuario usuarios) {
		this.usuarios = usuarios;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getCategoria() {
		return this.categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getContenido() {
		return this.contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public String getFecha() {
		return this.fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getImagen() {
		return this.imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

}

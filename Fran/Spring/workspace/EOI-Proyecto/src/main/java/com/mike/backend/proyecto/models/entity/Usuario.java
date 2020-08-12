package com.mike.backend.proyecto.models.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "usuarios")
public class Usuario implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;
	@Column(name = "nombre")
	private String nombre;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "usuarios")
	private Set<Noticia> noticiases = new HashSet<Noticia>(0);

	public Usuario() {
	}

	public Usuario(Integer id) {
		this.id = id;
	}

	public Usuario(Integer id, String nombre, String email, String password, Set<Noticia> noticiases) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.password = password;
		this.noticiases = noticiases;
	}


	public Integer getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Noticia> getNoticiases() {
		return this.noticiases;
	}

	public void setNoticiases(Set<Noticia> noticiases) {
		this.noticiases = noticiases;
	}

}

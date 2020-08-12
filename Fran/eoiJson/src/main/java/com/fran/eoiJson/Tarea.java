package com.fran.eoiJson;

public class Tarea {

	private long usuario;
	private long id;
	private String titulo;
	private boolean completado;
	
	public Tarea() {
		
	}

	public Tarea(long usuario, long id, String titulo, boolean completado) {
		this.usuario = usuario;
		this.id = id;
		this.titulo = titulo;
		this.completado = completado;
	}

	public long getUsuario() {
		return usuario;
	}

	public void setUsuario(long usuario) {
		this.usuario = usuario;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public boolean isCompletado() {
		return completado;
	}

	public void setCompletado(boolean completado) {
		this.completado = completado;
	}

	@Override
	public String toString() {
		return "Tarea [usuario=" + usuario + ", id=" + id + ", titulo=" + titulo + ", completado=" + completado + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tarea other = (Tarea) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
}

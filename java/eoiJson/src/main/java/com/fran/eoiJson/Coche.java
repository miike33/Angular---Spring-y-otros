package com.fran.eoiJson;

public class Coche {
	
	private String marca;
	private String modelo;
	private long cilindrada;
	
	public Coche() {
		
	}
	
	public Coche(String marca, String modelo, long cilindrada) {
		this.marca = marca;
		this.modelo = modelo;
		this.cilindrada = cilindrada;
	}
	
	public Coche(Coche c) {
		this.marca = c.marca;
		this.modelo = c.modelo;
		this.cilindrada = c.cilindrada;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public long getCilindrada() {
		return cilindrada;
	}

	public void setCilindrada(long cilindrada) {
		this.cilindrada = cilindrada;
	}

	@Override
	public String toString() {
		return "Coche [marca=" + marca + ", modelo=" + modelo + ", cilindrada=" + cilindrada + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (cilindrada ^ (cilindrada >>> 32));
		result = prime * result + ((marca == null) ? 0 : marca.hashCode());
		result = prime * result + ((modelo == null) ? 0 : modelo.hashCode());
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
		Coche other = (Coche) obj;
		if (cilindrada != other.cilindrada)
			return false;
		if (marca == null) {
			if (other.marca != null)
				return false;
		} else if (!marca.equals(other.marca))
			return false;
		if (modelo == null) {
			if (other.modelo != null)
				return false;
		} else if (!modelo.equals(other.modelo))
			return false;
		return true;
	}
	
	
	

}

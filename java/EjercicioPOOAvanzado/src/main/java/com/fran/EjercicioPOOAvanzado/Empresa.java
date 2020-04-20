package com.fran.EjercicioPOOAvanzado;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Empresa {
	
	private String cif;
	private String nombre;
	private List<Persona> listaTrabajadores;

	private static int totalTrabajadores;
	
	public Empresa() {
		this.listaTrabajadores = new ArrayList<Persona>();
	}

	public Empresa(String cif, String nombre, List<Persona> listaTrabajadores) {
		this.cif = cif;
		this.nombre = nombre;
		this.listaTrabajadores = listaTrabajadores;
		Empresa.totalTrabajadores=Empresa.totalTrabajadores+listaTrabajadores.size();
	}

	public String getCif() {
		return cif;
	}

	public void setCif(String cif) {
		this.cif = cif;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Persona> getListaTrabajadores() {
		return listaTrabajadores;
	}

	public void setListaTrabajadores(List<Persona> listaTrabajadores) {
		Empresa.totalTrabajadores=Empresa.totalTrabajadores-this.listaTrabajadores.size()+listaTrabajadores.size();
		this.listaTrabajadores = listaTrabajadores;
	}

	public static int getTotalTrabajadores() {
		return totalTrabajadores;
	}

	@Override
	public String toString() {
		return "Empresa [cif=" + cif + ", nombre=" + nombre + ", listaTrabajadores=" + listaTrabajadores + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cif == null) ? 0 : cif.hashCode());
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
		Empresa other = (Empresa) obj;
		if (cif == null) {
			if (other.cif != null)
				return false;
		} else if (!cif.equals(other.cif))
			return false;
		return true;
	}
	
	/**
	 * Método que añade una lista de personas a la lista de trabajadores de la empresa
	 * devolverá el número de las personas que no existían y ha podido añadir
	 * @param listaAnyadir
	 * @return
	 */
	public int darAltaTrabajadores(List<Persona> listaAnyadir) {
		int contador = 0;
		for(Persona persona : listaAnyadir) {
			if(darAltaTrabajadores(persona)) {
				contador++;
			}
		}
		return contador;
	}
	
	/*
	public int darAltaTrabajadores(List<Persona> listaAnyadir) {
		int longitudinicial = listaTrabajadores.size();
		for(Persona persona : listaAnyadir) {
			darAltaTrabajadores(persona);
		}
		return listaTrabajadores.size()-longitudinicial;
	}*/
	
	/**
	 * Añado los elementos de la lista pasada a la lista de trabajadores
	 * siempre que no estén
	 * @param listaAnyadir
	 */
	public void darAltaTrabajadoresVoid(List<Persona> listaAnyadir) {
		listaAnyadir.stream().forEach(e->darAltaTrabajadores(e));
	}
	
	/**
	 * Método que añade una nueva persona a la lista
	 * devuelve true si la añade, false si está repetida
	 * @param personaAnyadir
	 * @return
	 */
	public boolean darAltaTrabajadores(Persona personaAnyadir) {
		if (!listaTrabajadores.contains(personaAnyadir)) {
			listaTrabajadores.add(personaAnyadir);
			Empresa.totalTrabajadores++;
			return true;
		}
		else {
			return false;
		}
	}
	
	public boolean darBajaTrabajadores(Persona personaBaja) {
		if (listaTrabajadores.contains(personaBaja)) {
			listaTrabajadores.remove(personaBaja);
			Empresa.totalTrabajadores--;
			return true;
		}
		else {
			return false;
		}
	}
	
	public int darBajaTrabajadores(List<Persona> listaSuprimir) {
		int contador = 0;
		for(Persona persona : listaSuprimir) {
			if(darBajaTrabajadores(persona)) {
				contador++;
			}
		}
		return contador;
	}
	
	public List<Persona> buscarTrabajadores(int edad){

		return listaTrabajadores.stream()
		.filter(e->Period.between(e.getFecha_nacimiento(), LocalDate.now()).getYears()>=edad)
		.collect(Collectors.toList());
	}
	
	public List<Persona> buscarTrabajadores(Character sexo){
		return listaTrabajadores.stream()
				.filter(e->e.getSexo()==Character.toUpperCase(sexo))
				.collect(Collectors.toList());
	}
	
	public List<Persona> buscarTrabajadores(double salario){
		return listaTrabajadores.stream()
				.filter(e->e.getSalario()>salario)
				.collect(Collectors.toList());
		
	}
	
	
	
	
	
		
}

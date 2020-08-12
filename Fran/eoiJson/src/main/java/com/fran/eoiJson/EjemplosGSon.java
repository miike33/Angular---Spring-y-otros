package com.fran.eoiJson;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.stream.Collectors;

import com.google.gson.Gson;



public class EjemplosGSon {
	
	 private static ArrayList<People> listaPersonas;
	
	//private static People[] listaPersonas = ;
	
	public static String readUrl2(String web) {
		try {
			URL url = new URL(web);
			URLConnection uc = url.openConnection();			
			uc.setRequestProperty("User-Agent", "PostmanRuntime/7.20.1");			
			uc.connect();
			String lines = new BufferedReader(
					new InputStreamReader(uc.getInputStream(), 
							StandardCharsets.UTF_8))
					.lines()
					.collect(Collectors.joining());
			//System.out.println(lines);
			return lines;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	
	// Leer un personaje
	public static void leerPeople(String personaje) {
		try {
			String cadena = "[" + readUrl2("https://swapi.co/api/people/" + personaje + "/?format=json") + "]";
			Gson gson = new Gson();
			People[] listaPersonas = gson.fromJson(cadena, People[].class);		
			for(People p: listaPersonas)
					System.out.println(p);
		}  catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public static void leerPeople(int inicio, int fin) {
		try {
			// Unir todas las lecturas de Internet en una única cadena
			String cadena = "[";
			for(int i=inicio; i<fin;i++) {
				cadena = cadena + readUrl2("https://swapi.co/api/people/" + i + "/?format=json");
				cadena = cadena + ",";
			}
			cadena = cadena + readUrl2("https://swapi.co/api/people/" + fin + "/?format=json") + "]";
			// Crear GSon
			Gson gson = new Gson();
			// Pasar todos los elementos de golpe a un array
			People[] ArraylistaPersonas = gson.fromJson(cadena, People[].class);			
			// Pasamos de un array estático a un arrayList
			for(People p: ArraylistaPersonas)
					listaPersonas.add(p);
		}  catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		listaPersonas = new ArrayList<People>();
		leerPeople(1,9);
		leerPeople(10,15);
		listaPersonas.stream()
		.forEach(e->System.out.println(e));
		
		// Crear nosotros un Json a partir de una lista (Writer del JSON)
		String json = new Gson().toJson(listaPersonas);
		System.out.println(json);

	}

}

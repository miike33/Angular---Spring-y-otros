package com.fran.eoiJson;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Hello world!
 *
 */
public class App {
	
	private static List<Coche> listaCoches;
	private static List<Tarea> listaTareas;
	private static List<People> listaPersonas;
	
	public static void apiModelos() {

		Object obj;
		try {
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(new FileReader("profesor.json"));
			// casteando obj a JSONObject
			JSONObject jo = (JSONObject) obj;
			// cogiendo el nombre y el apellido
			String nombre = (String) jo.get("nombre");
			String apellido = (String) jo.get("apellido");
			System.out.println(nombre);
			System.out.println(apellido);
			// cogiendo la edad como long
			long edad = (long) jo.get("edad");
			System.out.println(edad);
			// cogiendo direccion
			Map domicilio = ((Map) jo.get("domicilio"));
			// iterando direccion Map
			Iterator<Map.Entry> itr1 = domicilio.entrySet().iterator();
			while (itr1.hasNext()) {
				Map.Entry pareja = itr1.next();
				System.out.println(pareja.getKey() + " : " + pareja.getValue());
			}
			// cogiendo números de teléfonos
			JSONArray ja = (JSONArray) jo.get("numerosTelefonos");
			// iterando números de teléfonos
			Iterator itr2 = ja.iterator();
			while (itr2.hasNext()) {
				itr1 = ((Map) itr2.next()).entrySet().iterator();
				while (itr1.hasNext()) {
					Map.Entry pareja = itr1.next();
					System.out.println(pareja.getKey() + " : " + pareja.getValue());
				}
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void leerCoches(String marca) {
		Object obj;
		try {
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(new FileReader("coches.json"));
			// casteando obj a JSONObject
			JSONObject jo = (JSONObject) obj;
			JSONObject cars = (JSONObject) jo.get("coches");
			JSONArray car = (JSONArray) cars.get("coche");

			Iterator itr1 = car.iterator();
			while (itr1.hasNext()) {
				JSONObject c = (JSONObject) itr1.next();
				/* Como buscar por marca */
				if(((String) c.get("marca")).equalsIgnoreCase(marca))
					System.out.println(c.get("marca") + " " + c.get("modelo") + " " + c.get("cilindrada"));
			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
	
	public static void guardarCoches() {
		Object obj;
		try {
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(new FileReader("coches.json"));
			// casteando obj a JSONObject
			JSONObject jo = (JSONObject) obj;
			JSONObject cars = (JSONObject) jo.get("coches");
			JSONArray car = (JSONArray) cars.get("coche");

			Iterator itr1 = car.iterator();
			while (itr1.hasNext()) {
				JSONObject c = (JSONObject) itr1.next();
				Coche coche = new Coche((String) c.get("marca"),(String) c.get("modelo"),(long) c.get("cilindrada"));
				
				/* Las siguientes 4 líneas hacen lo mismo que la de arriba
				Coche coche2 = new Coche();
				coche2.setMarca((String) c.get("marca"));
				coche2.setModelo((String) c.get("modelo"));
				coche2.setCilindrada((long) c.get("cilindrada"));*/
				
				listaCoches.add(coche);

			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
	
	/**
	 * Este método recibe la url que contiene el Json y devuelve un String con el contenido de la url
	 * @param urlString
	 * @return
	 * @throws Exception
	 */
	public static String readUrl(String urlString) throws Exception {
	    BufferedReader reader = null;
	    try {
	        URL url = new URL(urlString);
	        reader = new BufferedReader(new InputStreamReader(url.openStream()));
	        StringBuffer buffer = new StringBuffer();
	        int read;
	        char[] chars = new char[1024];
	        while ((read = reader.read(chars)) != -1)
	            buffer.append(chars, 0, read); 

	        return buffer.toString();
	    } finally {
	        if (reader != null)
	            reader.close();
	    }
	}
	
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
	
	
	public static void leerInternet() {
		Object obj;
		try {
			String cadena = readUrl2("https://jsonplaceholder.typicode.com/todos");
			//System.out.println(cadena);
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(cadena);
			// casteando obj a JSONArray, tengo en jo el array completo
			JSONArray jo = (JSONArray) obj; 
			// Recorremos el Array
			Iterator itr1 = jo.iterator();
			while (itr1.hasNext()) {
				JSONObject c = (JSONObject) itr1.next();
				Tarea tarea = new Tarea((long) c.get("userId"),(long) c.get("id"),(String) c.get("title"),(boolean) c.get("completed"));				
				listaTareas.add(tarea);
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	

	public static String leerNombrePlaneta(String url) {
		Object obj;
		People person;
		JSONObject jo = null;
		try {
			String cadena = readUrl2(url + "?format=json");
			//System.out.println(cadena);
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(cadena);
			jo = (JSONObject) obj;
						
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			System.out.println("Fallo al castear en Planeta");
			e.printStackTrace();
		} catch(Exception e) {
			e.printStackTrace();
		}
		return jo.get("name").toString();
	}
	
	public static String leerNombrePelicula(String url) {
		Object obj;
		People person;
		JSONObject jo = null;
		try {
			String cadena = readUrl2(url + "?format=json");
			//System.out.println(cadena);
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(cadena);
			jo = (JSONObject) obj;
						
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			System.out.println("Fallo al castear en película");
			e.printStackTrace();
		} catch(Exception e) {
			e.printStackTrace();
		}
		return jo.get("title").toString();
	}
	
	public static void leerPeople(String personaje) {
		Object obj;
		try {
			String cadena = readUrl2("https://swapi.co/api/people/" + personaje + "/?format=json");
			//System.out.println(cadena);
			// parseado el fichero "profesor.json"
			obj = new JSONParser().parse(cadena);
			JSONObject jo = (JSONObject) obj;
			
			String nombrePlaneta = "";
			// Leer el nombre del planeta
			if(jo.get("homeworld").toString().length()>5)
				nombrePlaneta = leerNombrePlaneta(jo.get("homeworld").toString());
			
			// leer Nombre Películas
			ArrayList<String> nombrePeliculas = new ArrayList<String>();
			JSONArray peliculas = (JSONArray)jo.get("films");
			for(int i=0; i < peliculas.size(); i++) {
				String nombrePelicula = leerNombrePelicula(peliculas.get(i).toString());
				nombrePeliculas.add(nombrePelicula);
			}
			
			listaPersonas.add(new People(
					jo.get("name").toString(),
					jo.get("height").toString(),
					jo.get("mass").toString(),
					jo.get("hair_color").toString(),
					jo.get("skin_color").toString(),
					jo.get("eye_color").toString(),
					jo.get("birth_year").toString(),
					jo.get("gender").toString(),
					nombrePlaneta,
					nombrePeliculas,
					new ArrayList<String>((JSONArray)jo.get("species")),
					new ArrayList<String>((JSONArray)jo.get("vehicles")),
					new ArrayList<String>((JSONArray)jo.get("starships")),
					jo.get("created").toString(),
					jo.get("edited").toString(),
					jo.get("url").toString()
					));
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			System.out.println("Fallo al castear");
			e.printStackTrace();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public static void main(String[] args) {
		
		listaCoches = new ArrayList();
		listaTareas = new ArrayList();
		listaPersonas = new ArrayList();
		
		//apiModelos();
		//leerCoches("Seat");
		/*guardarCoches();
		listaCoches.stream()
		.filter(e->e.getMarca().equals("Seat"))
		.forEach(e->System.out.println(e));*/
		
		/*leerInternet();
		listaTareas.stream()
		.filter(e->e.isCompletado()==true)
		.forEach(e->System.out.println(e));*/
		
		//leerPeople("2");
		//leerPeople("3");
		
		for(int i=1;i<10;i++) {
			// Lo siguiente para el programa durante un segundo.
			/*try {
				Thread.sleep(1000); // 1000 milisegungos = 1 segundo
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}*/
			leerPeople(i+"");
		}
		
		// Listaría todos los personajes
		/*for(People p: listaPersonas) {
			System.out.println(p);
		}*/
		
		// Personajes que miden más de un metro
		/*listaPersonas.stream()
		.filter(e->Integer.parseInt(e.getHeight())>100)
		.forEach(e->System.out.println(e));*/
			
		// Falta guardar en BBDD
	}
}

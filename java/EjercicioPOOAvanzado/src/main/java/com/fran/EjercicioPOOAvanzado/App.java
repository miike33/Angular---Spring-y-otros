package com.fran.EjercicioPOOAvanzado;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	List<Persona> trabajadoresMercadona = new ArrayList<Persona>();

    	trabajadoresMercadona.add(new Persona("1"));
    	trabajadoresMercadona.add(new Persona("2"));
    	trabajadoresMercadona.add(new Persona("3"));
    	trabajadoresMercadona.add(new Persona("4"));
    	trabajadoresMercadona.add(new Persona("5"));
    	
    	
        Empresa mercadona = new Empresa();
        //mercadona.setListaTrabajadores(trabajadoresMercadona);
        mercadona.darAltaTrabajadoresVoid(trabajadoresMercadona);
        //mercadona.darBajaTrabajadores(new Persona("4"));
        
        List<Persona> darDeBaja = new ArrayList<Persona>();
        darDeBaja.add(new Persona("2"));
    	darDeBaja.add(new Persona("4"));
    	mercadona.darBajaTrabajadores(darDeBaja);
        
        System.out.println(mercadona.getListaTrabajadores().size());
        
        // Pruebo la parte de las edades
        mercadona.setListaTrabajadores(new ArrayList<Persona>());
        System.out.println(mercadona.getListaTrabajadores().size());
        
        trabajadoresMercadona.clear();
        trabajadoresMercadona.add(new Persona("1",LocalDate.of(1990, 1, 1)));
        trabajadoresMercadona.add(new Persona("2",LocalDate.of(1995, 1, 1)));
        trabajadoresMercadona.add(new Persona("3",LocalDate.of(2000, 1, 1)));
        trabajadoresMercadona.add(new Persona("4",LocalDate.of(2005, 1, 1)));
        trabajadoresMercadona.add(new Persona("5",LocalDate.of(2010, 1, 1)));
        mercadona.darAltaTrabajadoresVoid(trabajadoresMercadona);
        List<Persona> mayor20 = mercadona.buscarTrabajadores(20);
        System.out.println(mayor20.size());
     
    }
}

package com.fran.ejemplo1.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fran.ejemplo1.models.Usuario;

@Controller
@RequestMapping("/app")
public class IndexController {
	
	@Value("${texto.indexcontroller.index.titulo}")
	private String textoIndex;
	
	@Value("${texto.indexcontroller.perfil.titulo}")
	private String textoPerfil;
	
	@Value("${texto.indexcontroller.listar.titulo}")
	private String textoListar;

	// Las lineas siguientes son equivalentes, también está PostMapping...
	// @RequestMapping(value = "/index", method = RequestMethod.GET)
	// @RequestMapping(value = "/index") por defecto si no se dice nada es GET
	// @GetMapping (value = "/index") si no se pone nada el parámetro es value
	@GetMapping({ "/index", "/", "", "/home" })
	public String index(Model model) {
		// @GetMapping ({"/index", "/" , "/home"}) podemos mapear un metodo a más de una
		// ruta
		// index(Model model) o index(ModelMap model) o index(Map<String,Object> map)
		model.addAttribute("titulo", textoIndex); // Para Model o ModelMap
		// map.put("titulo", "Programa de prueba");
		return "index";
	}

	@RequestMapping(value = "/perfil")
	public String perfil(Model model) {
		// En la práctica real, este usuario lo cargaríamos desde Hibernate o JPA por
		// ejemplo
		Usuario usuario = new Usuario();
		usuario.setNombre("Fran");
		usuario.setApellido("García");
		model.addAttribute("usuario", usuario);
		model.addAttribute("titulo", textoPerfil.concat(usuario.getNombre()));
		// Si hiciéramos una estructura de carpetas en templates se indicaría asi:
		// "carpeta/perfil"
		return "perfil";
	}

	@RequestMapping(value = "/listar")
	public String listar(Model model) {
		//List<Usuario> usuarios = new ArrayList();
		//usuarios.add(new Usuario("Fran","García","fran@fran.com"));
		//usuarios.add(new Usuario("Dani","García","dani@dani.com"));
		//usuarios.add(new Usuario("Consuelo","López","consu@consu.com"));
		// Otra forma de rellenar la lista
		/*List<Usuario> usuarios = Arrays.asList(new Usuario("Fran","García","fran@fran.com"),
				new Usuario("Dani","García","dani@dani.com"),
				new Usuario("Consuelo","López","consu@consu.com"),
				new Usuario("Otro","usuario","otro@otro.com"));*/
		//model.addAttribute("usuarios", usuarios);
		model.addAttribute("titulo", textoListar);
		return "listar";	
		
	}
	
	@ModelAttribute("usuarios")
	public List<Usuario> poblarUsuarios(){
		List<Usuario> usuarios = new ArrayList();
		usuarios.add(new Usuario("Fran","García","fran@fran.com"));
		usuarios.add(new Usuario("Dani","García","dani@dani.com"));
		usuarios.add(new Usuario("Consuelo","López","consu@consu.com"));		
		return usuarios;
	}

}

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

-- Started on 2020-05-15 19:28:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16747)
-- Name: datos_usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datos_usuario (
    id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    direccion character varying(150) NOT NULL,
    telefono character varying(15) NOT NULL
);


ALTER TABLE public.datos_usuario OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16750)
-- Name: evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento (
    id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    descripcion character varying(2000) NOT NULL,
    precio numeric(8,2) NOT NULL,
    fecha date NOT NULL
);


ALTER TABLE public.evento OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16756)
-- Name: evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.evento_id_seq OWNER TO postgres;

--
-- TOC entry 2852 (class 0 OID 0)
-- Dependencies: 204
-- Name: evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_id_seq OWNED BY public.evento.id;


--
-- TOC entry 205 (class 1259 OID 16758)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    usuario character varying(100) NOT NULL,
    password character varying(100) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16761)
-- Name: usuario_asiste_evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario_asiste_evento (
    usuario integer NOT NULL,
    evento integer NOT NULL
);


ALTER TABLE public.usuario_asiste_evento OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16764)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_seq OWNER TO postgres;

--
-- TOC entry 2853 (class 0 OID 0)
-- Dependencies: 207
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 2702 (class 2604 OID 16766)
-- Name: evento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento ALTER COLUMN id SET DEFAULT nextval('public.evento_id_seq'::regclass);


--
-- TOC entry 2703 (class 2604 OID 16767)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 2841 (class 0 OID 16747)
-- Dependencies: 202
-- Data for Name: datos_usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.datos_usuario (id, nombre, direccion, telefono) VALUES (1, 'Fran Garcia', 'Casa Fran', '666666666');
INSERT INTO public.datos_usuario (id, nombre, direccion, telefono) VALUES (2, 'Dani Garcia', 'Casa Dani', '666666667');
INSERT INTO public.datos_usuario (id, nombre, direccion, telefono) VALUES (3, 'Consu López', 'Casa Consu', '666666668');
INSERT INTO public.datos_usuario (id, nombre, direccion, telefono) VALUES (4, 'Paco Garcia', 'Casa Paco', '666666669');


--
-- TOC entry 2842 (class 0 OID 16750)
-- Dependencies: 203
-- Data for Name: evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.evento (id, nombre, descripcion, precio, fecha) VALUES (1, 'Evento1', 'Evento de prueba', 10.00, '2019-11-27');
INSERT INTO public.evento (id, nombre, descripcion, precio, fecha) VALUES (2, 'Evento2', 'Evento de prueba 2', 15.00, '2019-11-27');
INSERT INTO public.evento (id, nombre, descripcion, precio, fecha) VALUES (3, 'evento 1', 'Evento EOI', 10.00, '2020-02-07');
INSERT INTO public.evento (id, nombre, descripcion, precio, fecha) VALUES (0, 'evento 1', 'Evento EOI', 10.00, '2020-02-07');


--
-- TOC entry 2844 (class 0 OID 16758)
-- Dependencies: 205
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario (id, usuario, password) VALUES (1, 'Fran', '1234');
INSERT INTO public.usuario (id, usuario, password) VALUES (2, 'Dani', '1234');
INSERT INTO public.usuario (id, usuario, password) VALUES (3, 'Consu', '1234');
INSERT INTO public.usuario (id, usuario, password) VALUES (4, 'PAco', '1234');


--
-- TOC entry 2845 (class 0 OID 16761)
-- Dependencies: 206
-- Data for Name: usuario_asiste_evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario_asiste_evento (usuario, evento) VALUES (1, 1);
INSERT INTO public.usuario_asiste_evento (usuario, evento) VALUES (1, 2);
INSERT INTO public.usuario_asiste_evento (usuario, evento) VALUES (2, 1);
INSERT INTO public.usuario_asiste_evento (usuario, evento) VALUES (3, 2);
INSERT INTO public.usuario_asiste_evento (usuario, evento) VALUES (2, 2);
INSERT INTO public.usuario_asiste_evento (usuario, evento) VALUES (3, 1);


--
-- TOC entry 2854 (class 0 OID 0)
-- Dependencies: 204
-- Name: evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_id_seq', 3, true);


--
-- TOC entry 2855 (class 0 OID 0)
-- Dependencies: 207
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);


--
-- TOC entry 2705 (class 2606 OID 16769)
-- Name: datos_usuario datos_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_usuario
    ADD CONSTRAINT datos_usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 2707 (class 2606 OID 16771)
-- Name: evento evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);


--
-- TOC entry 2711 (class 2606 OID 16773)
-- Name: usuario_asiste_evento usuario_asiste_evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario_asiste_evento
    ADD CONSTRAINT usuario_asiste_evento_pkey PRIMARY KEY (usuario, evento);


--
-- TOC entry 2709 (class 2606 OID 16775)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 2712 (class 2606 OID 16776)
-- Name: datos_usuario datos_usuario_ibfk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_usuario
    ADD CONSTRAINT datos_usuario_ibfk_1 FOREIGN KEY (id) REFERENCES public.usuario(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2713 (class 2606 OID 16781)
-- Name: usuario_asiste_evento usuario_asiste_evento_ibfk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario_asiste_evento
    ADD CONSTRAINT usuario_asiste_evento_ibfk_1 FOREIGN KEY (evento) REFERENCES public.evento(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2714 (class 2606 OID 16786)
-- Name: usuario_asiste_evento usuario_asiste_evento_ibfk_2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario_asiste_evento
    ADD CONSTRAINT usuario_asiste_evento_ibfk_2 FOREIGN KEY (usuario) REFERENCES public.usuario(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2020-05-15 19:28:06

--
-- PostgreSQL database dump complete
--


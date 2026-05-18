--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2026-05-18 09:54:38

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

--
-- TOC entry 4786 (class 1262 OID 16398)
-- Name: TP8; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "TP8" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';


ALTER DATABASE "TP8" OWNER TO postgres;

\connect "TP8"

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
-- TOC entry 216 (class 1259 OID 16400)
-- Name: provincias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provincias (
    id integer NOT NULL,
    nombre character varying,
    nombrecompleto character varying,
    latitud integer,
    longitud integer,
    displayorder integer
);


ALTER TABLE public.provincias OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: provincias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.provincias ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.provincias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4780 (class 0 OID 16400)
-- Dependencies: 216
-- Data for Name: provincias; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (1, 'Buenos Aires', 'Provincia de Buenos Aires', -37, -61, 1);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (2, 'Catamarca', 'Provincia de Catamarca', -28, -66, 2);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (3, 'Chaco', 'Provincia del Chaco', -27, -59, 3);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (4, 'Chubut', 'Provincia del Chubut', -43, -65, 4);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (5, 'Córdoba', 'Provincia de Córdoba', -31, -64, 5);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (6, 'Corrientes', 'Provincia de Corrientes', -29, -58, 6);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (7, 'Entre Ríos', 'Provincia de Entre Ríos', -32, -59, 7);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (8, 'Formosa', 'Provincia de Formosa', -25, -60, 8);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (9, 'Jujuy', 'Provincia de Jujuy', -23, -66, 9);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (10, 'La Pampa', 'Provincia de La Pampa', -37, -64, 10);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (11, 'La Rioja', 'Provincia de La Rioja', -29, -67, 11);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (12, 'Mendoza', 'Provincia de Mendoza', -35, -68, 12);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (13, 'Misiones', 'Provincia de Misiones', -27, -56, 13);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (14, 'Neuquén', 'Provincia del Neuquén', -39, -68, 14);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (15, 'Río Negro', 'Provincia de Río Negro', -41, -63, 15);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (16, 'Salta', 'Provincia de Salta', -25, -65, 16);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (17, 'San Juan', 'Provincia de San Juan', -31, -69, 17);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (18, 'San Luis', 'Provincia de San Luis', -33, -66, 18);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (19, 'Santa Cruz', 'Provincia de Santa Cruz', -49, -70, 19);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (20, 'Santa Fe', 'Provincia de Santa Fe', -30, -61, 20);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (21, 'Santiago del Estero', 'Provincia de Santiago del Estero', -28, -64, 21);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (22, 'Tierra del Fuego', 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur', -55, -68, 22);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (23, 'Tucumán', 'Provincia de Tucumán', -27, -65, 23);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (24, 'CABA', 'Ciudad Autónoma de Buenos Aires', -35, -58, 24);


--
-- TOC entry 4787 (class 0 OID 0)
-- Dependencies: 215
-- Name: provincias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provincias_id_seq', 24, true);


--
-- TOC entry 4635 (class 2606 OID 16406)
-- Name: provincias provincias_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincias
    ADD CONSTRAINT provincias_pk PRIMARY KEY (id);


-- Completed on 2026-05-18 09:54:39

--
-- PostgreSQL database dump complete
--


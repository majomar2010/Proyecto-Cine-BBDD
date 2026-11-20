**Escuela Técnica N° 29, Reconquista de Buenos Aires**

**BASE DE DATOS**

**Proyecto Cine**

**[María José Guzman Marca](mailto:maria.guzman.351@alu.tecnica29de6.edu.ar)**

**[Angie Julieta Careaga Claros](mailto:angie.careaga.100@alu.tecnica29de6.edu.ar)**

**[Nicole Nayra Prieto Coman](mailto:nicole.prieto.372@alu.tecnica29de6.edu.ar)**

**[Dagma Paola Ochoa Lopez](mailto:dagma.ochoa.679@alu.tecnica29de6.edu.ar)**

**[Madelaine Nahir Tumiri Torrez](mailto:madelaine.tumiri.718@alu.tecnica29de6.edu.ar)**

**[Theo Eloy Martinez Monserrate](mailto:theo.martinez.123@alu.tecnica29de6.edu.ar)**

**4to, 8ava Division, Turno Mañana**

**Leonardo Cancino**

# **1\. Codificación de la Base de Datos**

## **1.1 La Estructura de Base De Datos y Creación de las Tablas**

| BEGIN TRANSACTION; CREATE TABLE IF NOT EXISTS "Actor" (     "ID\_ACTOR"  INTEGER,     "Nombre\_Actor"  TEXT NOT NULL,     "Apellido\_Actor"    TEXT NOT NULL,     "Animado"   TEXT,     PRIMARY KEY("ID\_ACTOR" AUTOINCREMENT) ); CREATE TABLE IF NOT EXISTS "Calificacion" (     "ID\_CALIFICACION"   INTEGER,     "Tipo\_Calificacion" INTEGER NOT NULL,     PRIMARY KEY("ID\_CALIFICACION" AUTOINCREMENT) ); CREATE TABLE IF NOT EXISTS "Cine" (     "ID\_CINE"   INTEGER,     "Nombre\_Cine"   TEXT NOT NULL,     "Direccion" TEXT NOT NULL,     PRIMARY KEY("ID\_CINE" AUTOINCREMENT) ); CREATE TABLE IF NOT EXISTS "Entrada" (     "ID\_ENTRADA"    INTEGER,     "Numero\_Entrada"    NUMERIC,     "Fecha\_Hora\_Venta"  NUMERIC NOT NULL,     "Fecha\_Hora\_Funcion"    NUMERIC,     "Precio\_Cobrado"    NUMERIC NOT NULL,     "ID\_PELICULA"   INTEGER NOT NULL,     "ID\_FUNCION"    INTEGER NOT NULL,     "ID\_SALA"   INTEGER NOT NULL,     PRIMARY KEY("ID\_ENTRADA" AUTOINCREMENT),     FOREIGN KEY("ID\_FUNCION") REFERENCES "",     FOREIGN KEY("ID\_PELICULA") REFERENCES "Pelicula"("ID\_PELICULA"),     FOREIGN KEY("ID\_SALA") REFERENCES "Sala"("ID\_SALA") ); CREATE TABLE IF NOT EXISTS "Funcion" (     "ID\_FUNCION"    INTEGER,     "Dia\_Semana"    TEXT,     "Hora\_Inicio"   TEXT NOT NULL,     "Duracion"  INTEGER,     "ID\_CINE"   INTEGER NOT NULL,     "ID\_SALA"   INTEGER NOT NULL,     "ID\_PELICULA"   INTEGER NOT NULL,     "ID\_PROGRAMACION"   INTEGER NOT NULL,     PRIMARY KEY("ID\_FUNCION" AUTOINCREMENT),     FOREIGN KEY("ID\_CINE") REFERENCES "Cine"("ID\_CINE"),     FOREIGN KEY("ID\_PELICULA") REFERENCES "Pelicula"("ID\_PELICULA"),     FOREIGN KEY("ID\_PROGRAMACION") REFERENCES "Programacion"("ID\_PROGRAMACION"),     FOREIGN KEY("ID\_SALA") REFERENCES "Sala"("ID\_SALA") ); CREATE TABLE IF NOT EXISTS "Genero" (     "ID\_GENERO" INTEGER,     "Tipo\_Genero"   TEXT NOT NULL,     PRIMARY KEY("ID\_GENERO" AUTOINCREMENT) ); CREATE TABLE IF NOT EXISTS "País de Origen" (     "ID\_PAIS\_ORIGEN"    INTEGER,     "Nombre\_Pais"   TEXT,     "Idioma"    TEXT,     PRIMARY KEY("ID\_PAIS\_ORIGEN" AUTOINCREMENT) ); CREATE TABLE IF NOT EXISTS "Pelicula" (     "ID\_PELICULA"   INTEGER,     "Nombre\_Pelicula"   TEXT NOT NULL,     "Titulo"    TEXT NOT NULL,     "Descripcion"   TEXT,     "Imagen"    TEXT,     "Duracion"  INTEGER,     "Anio\_Estreno"  NUMERIC,     "Disponibilidad"    INTEGER,     "Fecha\_Ingreso" NUMERIC,     "ID\_GENERO" INTEGER NOT NULL,     "ID\_CALIFICACION"   INTEGER NOT NULL,     "ID\_PAIS\_DE\_ORIGEN" INTEGER NOT NULL,     PRIMARY KEY("ID\_PELICULA" AUTOINCREMENT),     FOREIGN KEY("ID\_CALIFICACION") REFERENCES "Calificacion"("ID\_CALIFICACION"),     FOREIGN KEY("ID\_GENERO") REFERENCES "Genero"("ID\_GENERO"),     FOREIGN KEY("ID\_PAIS\_DE\_ORIGEN") REFERENCES "País de Origen"("ID\_PAIS\_ORIGEN") ); CREATE TABLE IF NOT EXISTS "Personaje" (     "ID\_PERSONAJE"  INTEGER,     "Nombre\_Personaje"  TEXT NOT NULL,     "ID\_ACTOR"  INTEGER NOT NULL,     PRIMARY KEY("ID\_PERSONAJE" AUTOINCREMENT),     FOREIGN KEY("ID\_ACTOR") REFERENCES "Actor"("ID\_ACTOR") ); CREATE TABLE IF NOT EXISTS "Programacion" (     "ID\_PROGRAMACION"   INTEGER,     "Fecha\_Inicio"  TEXT NOT NULL,     "Fecha\_Fin" TEXT NOT NULL,     "Fecha\_Hora\_Creada" TEXT,     "ID\_CINE"   INTEGER NOT NULL,     PRIMARY KEY("ID\_PROGRAMACION" AUTOINCREMENT),     FOREIGN KEY("ID\_CINE") REFERENCES "Cine"("ID\_CINE") ); CREATE TABLE IF NOT EXISTS "Reparto" (     "ID\_REPARTO"    INTEGER,     "ID\_PELICULA"   INTEGER NOT NULL,     "ID\_PERSONAJE"  INTEGER NOT NULL,     PRIMARY KEY("ID\_REPARTO" AUTOINCREMENT),     FOREIGN KEY("ID\_PELICULA") REFERENCES "Pelicula"("ID\_PELICULA"),     FOREIGN KEY("ID\_PERSONAJE") REFERENCES "Personaje"("ID\_PERSONAJE") ); CREATE TABLE IF NOT EXISTS "Sala" (     "ID\_SALA"   INTEGER,     "Numero"    INTEGER NOT NULL,     "Capacidad" INTEGER NOT NULL,     "Filas" INTEGER,     "Butacasporfila"    INTEGER,     "ID\_CINE"   INTEGER NOT NULL,     PRIMARY KEY("ID\_SALA" AUTOINCREMENT),     FOREIGN KEY("ID\_CINE") REFERENCES "Cine"("ID\_CINE") ); COMMIT; |
| :---- |

## **1.2 Consultas de Lectura y Filtros Básicos (Scripts)**

* **Ver el título y la duración de todas las películas.**

  *SELECT* Nombre\_Pelicula, Duracion *FROM* Pelicula; 

  *ORDEN BY* Duracion ASC; 

  Nota: En lugar de traer todas las columnas con *SELECT \** elegimos mostrar únicamente los nombres de las películas y cuánto duran en minutos. 


* **Buscar una película por su año de estreno.**

  *SELECT* Nombre\_Pelicula, Anio\_Estreno *FROM* Pelicula 

  *WHERE* Anio\_Estreno \= 2018;

  Nota: El *WHERE* funciona como un filtro. Aca solo nos va devolver lo que le pedimos exactamente, en este caso, que sean solo de ese año.


* **Mostrar cada película junto con su género.**

  *SELECT* Pelicula.Nombre\_Pelicula, Genero.Tipo\_Genero *FROM* Pelicula 

  *INNERJOIN* Genero *ON* Pelicula.ID\_GENERO 

  \= Genero.ID\_GENERO

		*GRUPO BY* Pelicula;  
Nota: El *INNERJOIN* une dos tablas distintas. El *ON* sirve para coincidir los registros de una tabla con los de la otra. GROUP BY agrupa el resultado en una tabla.

* **Contar cuántas entradas se vendieron en total.**

  *SELECT COUNT(*ID\_ENTRADA*)* *AS* Total\_Vendidas *FROM* Entrada; 

  Nota: El *COUNT* cuenta la cantidad de filas registradas en esa columna. El *`AS`* le pone un nombre más claro al resultado en pantalla. 


* **Sumar todo el dinero recaudado por entradas.**

  *SELECT SUM(*Precio\_Cobrado*) AS* Dinero\_Total *FROM* Entrada; 

  Nota: El *SUM* suma todos los valores numéricos de la columna de precios para dar el total recaudado.

## **1.3 Comandos de Prueba y Modificación (Testing)** 

* **Eliminar una función.**

  *DELETE FROM* Funcion 

  *WHERE* ID\_FUNCION \= 5;
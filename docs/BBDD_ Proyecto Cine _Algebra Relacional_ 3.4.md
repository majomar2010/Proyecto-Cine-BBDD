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

# **1\. Álgebra Relacional de las Consultas del Sistema** 

## **1.1 Expresión Algebraica de los Scripts Realizados** 

| Π(Proyección): Filtra columnas, se usa para definir lo que se muestra en pantalla, como el nombre de la película o el número de sala (*SELECT*). σ(Selección): Filtra filas se usa para restringir resultados, como filtrar películas infantiles o entradas con descuento (*WHERE*). ⋈(Join): Combina registros de dos o más tablas mediante sus claves, para relacionar datos como Pelicula, Función y Sala ( *INNERJOIN*). 𝒢(Agrupación): Agrupa tuplas y aplica funciones, para obtener totales resumidos, como las entradas vendidas por mes (*GROUP BY* con *COUNT*/*SUM*). |
| :---- |

* **Cantidad de entradas vendidas por película en el mes** 

		ΠNombre_Pelicula, Entradas_Vendidas(Nombre_Pelicula𝒢(ID_ENTRADA(σ Mes(Fecha_Hora_Venta)(Entrada⋈ID_PELICULA.Pelicula))) 

  Nota: Se aplica un agrupamiento (𝒢) sobre la tabla Entrada filtrada por mes, unida con Película.


* **Películas por día y por sala**

		ΠNombre_Pelicula,Dia_Semana,Numero(Película⋈ID_PELICULA.Funcion)⋈ID_SALA.SALA)

  Nota: Se usa Película, Función (que contiene Dia\_Semana) y Sala para proyectar el título, el día y la sala correspondiente.


* **Películas que tuvieron descuento según el concepto de entrada**

		ΠNombre_Pelicula, Precio_Cobrado(𝜎Precio_Cobrado<Precio_Regular(Entrada⋈ID_PELICULA.Pelicula))

  Nota: Se filtra las entradas donde el Precio\_Cobrado aplica un descuento (menor al precio regular base) y proyecta las películas involucradas.


* **Capacidad máxima por sala en una función** 

		ΠID_FUNCION, Hora_Inicio, Numero, Capacidad (Funcion⋈ID_SALA.Sala)

  Nota: Se relaciona cada función proyectada con la tabla Sala para obtener el límite máximo de tickets comercializables por función (capacidad).


* **Películas por género exhibidas por sala**

		ΠNombre_Pelicula, Tipo_Genero, Numero (((Pelicula⋈ID_GENERO.Genero)⋈ID_SALA.Sala)

  Nota: Se integra Película, Genero, Función y Sala para listar qué películas y géneros se presentan en cada sala.


* **Películas infantiles por sala y por función** 

		 ΠNombre_Pelicula, Numero, Hora_Inicio(𝜎Tipo_Genero= ”Infantil”((Pelicula⋈ID_GENERO.Genero)⋈ID_PELICULA.Funcion)⋈ID_SALA.Sala))

  Nota: Se selecciona una categoría del género conectando la película con su función y sala.

## Escuela Técnica N° 29, Reconquista de Buenos Aires

## BASE DE DATOS

## Proyecto Cine

## [María José Guzman Marca](mailto:maria.guzman.351@alu.tecnica29de6.edu.ar)

## [Angie Julieta Careaga Claros](mailto:angie.careaga.100@alu.tecnica29de6.edu.ar)

## [Nicole Nayra Prieto Coman](mailto:nicole.prieto.372@alu.tecnica29de6.edu.ar)

## [Dagma Paola Ochoa Lopez](mailto:dagma.ochoa.679@alu.tecnica29de6.edu.ar)

## [Madelaine Nahir Tumiri Torrez](mailto:madelaine.tumiri.718@alu.tecnica29de6.edu.ar)

[Theo Eloy Martinez Monserrate](mailto:theo.martinez.123@alu.tecnica29de6.edu.ar)

## 4to, 8ava Division, Turno Mañana

Leonardo Cancino


[1. Investigación Inicial y Marco Teórico](#page-0)

[1.1 Funcionamiento General de un Complejo de Cines](#page-0)

1.2 El Rol del INCAA en la Industria Cinematográfica 1.3 Clasificación por Edades y Regulaciones 1.4. Normativa Fiscal de Facturación [URL 🔗](#page-0)

- [2. Análisis de la Problemática](#page-0)

2.1 Identificación del Problema 2.2 Objetivo de la Problemática [URL 🔗](#page-0)

[2.3 Alcance del Proyecto (O.L.A. Dentro y Fuera de Alcance)](#page-0)

[3. Especificaciones del Sistema](#page-0)

3.1 Requerimientos Funcionales (RF) 3.2 Requerimientos No Funcionales (RNF) 3.3 Reglas de Negocio [URL 🔗](#page-0)

[4. Análisis de Viabilidad](#page-0)

4.1 Viabilidad del Proyecto 4.2 Programadas Utilizados [URL 🔗](#page-0)

[5. Diseño y Arquitectura](#page-0)

5.1 Entidades y Atributos 5.4 Diagrama Entidad-Relación (DER) 5.2 Relaciones y Cardinalidades 5.3 Normalización 5.5 Modelo Entidad-Relación (MER) [URL 🔗](#page-0)

- [6. Documentación Final y Producto](#page-0)


- 1. Investigación Inicial y Marco Teórico

- 1.1 Funcionamiento General de un Complejo de Cines

Nuestro proyecto consiste en la organización y el diseño de un sistema de gestión de ventas y reservas de entradas para un complejo de cines.

Un complejo de cines está integrado por varios cines ubicados principalmente en los centros comerciales de la ciudad. Cada cine cuenta con una cantidad de salas que exhiben las películas en distintas funciones cinematográficas. Estas salas pueden tener diferentes capacidades, según la cantidad de butacas disponibles. El sistema permite organizar y administrar la información de los distintos cines de forma centralizada. para esto, se tiene en cuenta la programación de las salas, que se renueva semanalmente y determina qué películas van a proyectarse y los horarios de cada función. La programación se realiza tomando como base la información de las próximas películas a estrenar que envía el incaa (instituto nacional de cine y artes audiovisuales). A partir de estos datos, se organizan las funciones y sus horarios con anticipación, y se habilita la venta y reserva de entradas para cada una.

- 1.2 El Rol del INCAA en la Industria Cinematográfica

El instituto nacional de cine y artes audiovisuales (INCAA) es el encargado de regular la actividad cinematográfica en el país. En el funcionamiento del complejo de cines, actúa como proveedor oficial

de información sobre las películas que próximamente se van a estrenar.

Cada semana, el INCAA envía el catálogo oficial de los títulos a estrenar. para que una película pueda ser programada en las salas del complejo, es necesario registrar su ficha técnica completa, que incluye el nombre oficial, el título original, la duración, el género, el país de origen, el elenco principal y la

clasificación por edades

- 1.3 Clasificación por Edades y Regulaciones

El marco legal regulado por la Ley de Cine N° 17.741 establece que toda exhibición pública de películas debe contar con una calificación de edad visible para el espectador. Las categorías oficiales comprenden: Aptas para todo público (con o sin reservas).

Esta normativa impone dos obligaciones clave al sistema de gestión:

- a. Visibilidad: La calificación asignada por el INCAA debe figurar impreso en el ticket emitido y proyectarse en la pantalla de la sala previa al inicio del film.

- b. Restricción de Venta: El sistema debe impedir la venta de tarifas o entradas no permitidas según la edad del espectador (por ejemplo, bloquear categorías de venta para menores en funciones con clasificación +16 o +18).

- 1.4. Normativa Fiscal de Facturación

Además de cumplir con la legislación cinematográfica vigente, el sistema debe respetar la ley de facturación para la emisión de comprobantes comerciales. cada entrada impresa funciona como un comprobante de venta, por lo que debe incluir la información correspondiente a la operación realizada. Para cumplir con esta reglamentación, el ticket emitido por la boletería debe contener los siguientes datos:

- Número de venta o transacción: Identifica cada venta realizada.

- Fecha y hora de emisión: Indica cuándo se emitió el comprobante.

- Identificación del cine y la sala: Incluye la sede, el número de sala y el nombre de la película.

- Datos de la función: Indica la fecha y la hora en que se proyectará la película.


- Tipo de entrada y precio: Específica si corresponde a mayor, menor o jubilado, junto con el importe final cobrado.

- Calificación por edades: Informa la clasificación de la película otorgada por el INCAA.


## 2. Análisis de la Problemática

## 2.1 Identificación del Problema

Actualmente, la gestión de un complejo de cines puede presentar distintas dificultades cuando la información de las salas, las funciones, las ventas y las reservas no se encuentra organizada en un mismo sistema. Esto puede generar errores en la administración del negocio y afectar tanto el control de las entradas como la atención a los clientes.

- Problemas en el control de las ventas y la capacidad de las salas: Cada sala tiene una capacidad determinada por la cantidad de butacas disponibles. Si las ventas de boletería y las reservas telefónicas o por internet no se encuentran coordinadas, pueden producirse errores en la cantidad de entradas vendidas y superar la capacidad de una sala.

- Dificultades para calcular el precio de las entradas: El precio puede variar según el cine, el día, el horario de la función y el tipo de entrada (mayor, menor o jubilado). Realizar estos cálculos manualmente puede generar errores en los importes cobrados y demoras al momento de comprar una entrada.

- Errores en la información de los comprobantes de venta: Las entradas deben incluir los datos correspondientes a la venta y a la función, como el número de venta, la fecha y hora, la sala, la película y su calificación por edades. Si se omite alguno de los datos exigidos por la normativa vigente, el complejo puede tener dificultades para cumplir con los requisitos legales.

- Falta de control sobre las restricciones por edad: Las funciones deben respetar la clasificación por edades de cada película. Si no se verifica qué tipos de entradas se permiten para cada función, pueden producirse errores al momento de vender entradas que no corresponden a la calificación de la película.

## 2.2 Objetivo de la Problemática

El objetivo es diseñar un sistema de gestión y administración para un complejo de cines que permita organizar toda la información desde un mismo lugar; una página. El sistema busca facilitar la organización de la cartelera, la planificación de las funciones en las distintas salas y la administración de la venta y reserva de entradas.

A continuación, recalcamos los objetivos que se deben seguir en el proyecto:

- a. Administración de las películas: Registrar y mantener actualizada la información de las películas que se van a proyectar, datos como el título, el género, la duración, la clasificación por edades y el país de origen.

- b. Organización de la cartelera: Organizar la programación semanal de las distintas sedes del complejo, asignando cada película a una sala, estableciendo los días y horarios de sus funciones.

- c. Gestión de ventas y reservas: Permitir la venta de entradas directamente en las boleterías de los cines y registrar las reservas realizadas por teléfono o a través de la página web.

- d. Cumplimiento de las normas y control de las ventas: Verificar que se respeten las restricciones de edad de cada película, calcular los precios de las entradas según el tipo de espectador y el horario de la función, y emitir los comprobantes de venta correspondientes, respetando las leyes vigentes.

- e. Diseño funcional: Diseñar la estructura de la Base de Datos mediante los modelos MER y DER, organizar la información y las relaciones entre los datos, y crear los scripts necesarios para implementar la Base de Datos utilizando herramientas como PHPMYADMIN o MYSQL.|

## 2.3 Alcance del Proyecto (O.L.A. Dentro y Fuera de Alcance)

Dentro de Nuestro Alcance

Fuera de Nuestro Alcance


Gestión de películas y cartelera: Permite registrar las películas enviadas por el INCAA, incluyendo información como el género, la clasificación por edades, el país de origen y el reparto. También permite organizar semanalmente las funciones, asignando las películas a las distintas salas y estableciendo sus días y horarios.

Procesamiento de Pagos Externos: El sistema no se conecta directamente con bancos ni con plataformas de pago con tarjetas de crédito o débito. Las ventas se registran suponiendo que el pago ya fue aprobado.

Control de Ingreso a las Salas: El sistema no controla físicamente la entrada de los espectadores ni se conecta con molinetes o lectores biométricos. El ingreso se verifica mediante la presentación de la entrada impresa o digital.

Ventas y Reservas de Entradas: Permite vender e imprimir entradas en las boleterías de los cines y registrar las reservas realizadas por teléfono o a través de la página web. Las ventas deben cumplir con la Ley de Facturación Vigente y la Ley de Cine N.º 17.741.

Control de las Reglas de Venta: Verifica que se respeten las restricciones de edad de cada película. por ejemplo, impide vender entradas de tipo menor para funciones destinadas a mayores de 16 años. Además, calcula los precios según el tipo de entrada, el día y el horario de la función.

Diseño y Almacenamiento de Datos: Incluye el diseño de la base de datos mediante los diagramas MER y DER, la organización de la información y la creación de la base de datos utilizando SQL.


## 3. Especificaciones del Sistema

## 3.1 Requerimientos Funcionales (RF)

| RF01 | Gestión de Películas | Cargar, modificar y consultar las películas enviadas por |
| --- | --- | --- |
|   |   | el INCAA con todos sus datos técnicos. |
| RF02 | Gestión de Cines y Salas | Administrar la información de las distintas sedes/cines y |
|   |   | de sus respectivas salas, incluyendo número de salas y |
|   |   | capacidad total de butacas. |
| RF03 | Programación de Cartelera Armar la agenda semanal asignando películas, salas, |   |
|   |   | días y horarios de proyección. |
| RF04 | Habilitación de Funciones | Permitir habilitar o deshabilitar manualmente funciones |
|   |   | para dejarlas disponibles para la comercialización o |
|   |   | reserva. |
| RF05 | Venta de Entradas | Registrar la venta en boletería calculando el precio |
|   |   | según cine, día, hora y espectador. |
| RF06 | Impresión de Tickets | Emitir e imprimir la entrada con los datos exigidos por la |
|   |   | Ley de Facturación y Ley de Cine. |
| RF07 | Control de Capacidad | Verificar en tiempo real las butacas disponibles antes de |
|   |   | confirmar ventas o reservas. |

## 3.2 Requerimientos No Funcionales (RNF)

| RNF01 | Seguridad | Cargar, modificar y consultar las películas enviadas por |
| --- | --- | --- |
|   |   | el INCAA con todos sus datos técnicos. |
| RNF02 | Compatibilidad | Funcionar correctamente en los programas usados. |

## 3.3 Reglas de Negocio

| RN01 | Se deben cumplir los requerimientos de INCAA para transmitir una película. |
| --- | --- |
| RN02 | El ticket es válido solo para el cine con fecha, hora, sala y función impresas. |
| RN03 | No se pueden emitir entradas si no cumplen los datos requeridos por la Ley de |
|   | Facturación y de Cine. |
| RN04 | El sistema no permite emitir ventas o reservas que superen la capacidad total de la |
|   | sala. |


- 4. Análisis de Viabilidad

- 4.1 Viabilidad del Proyecto

- El desarrollo del sistema de gestión para el complejo de cines es viable por las siguientes razones:

- Viabilidad técnica: Para diseñar la base de datos, debemos crear las tablas y establecer las relaciones y restricciones. Las funciones principales, como la capacidad de las salas, los precios de las entradas y las restricciones por edad, pueden implementarse mediante MYSQL.

- Viabilidad económica: El costo del proyecto es cero, se utilizan programas/herramientas gratuitas, sin necesidad de comprar licencias, y son fáciles de ejecutar.

- 4.2 Programadas Utilizados

- a. Sistema de gestión de bases de datos relacional (MYSQL): Es un sistema que permite almacenar, organizar y consultar información mediante el lenguaje SQL.

- Nos sirve para almacenar, organizar, relacionar y consultar los datos de una base de datos de forma segura y eficiente.

- b. Entorno de administración (PHPMYADMIN): Es una herramienta web que permite administrar bases de datos MYSQL mediante una interfaz gráfica, sin depender únicamente de comandos.

- Nos sirve para administrar bases de datos MYSQL de forma visual, permitiendo crear tablas, modificar datos y ejecutar consultas SQL fácilmente.


## 5. Diseño y Arquitectura

*5.1 Entidades y Atributos*

| Cine | ID_CINE (PK), nombre_cine, | Guarda los datos básicos de cada sede del |
| --- | --- | --- |
|   | dirección | complejo y el precio base general de la |
|   |   | entrada. |
| Sala | ID_SALA (PK), ID_CINE (FK), | Representa las salas físicas que tiene cada |
|   | número, capacidad | cine y la cantidad de butacas disponibles. |
| Programación | ID_PROGRAMACION (PK), | Organiza el periodo de fechas en que el cine |
|   | ID_CINE (FK), fecha_inicio, | planifica su grilla de funciones. |
|   | fecha_fin, fecha_hora_creada |   |
| Película | ID_PELICULA (PK), ID_GENERO | Almacena toda la ficha técnica del film y sus |
|   | (FK), ID CALIFICACIÓN (FK), | clasificaciones traídas del INCAA. |
|   | ID_PAIS_DE_ORIGEN (FK), |   |
|   | nombre_pelicula, titulo, |   |
|   | año_estreno, duracion, |   |
|   | fecha_ingreso, disponibilidad |   |
| Género | ID_GENERO (PK), tipo_genero | Guarda las distintas categorías de películas. |
| Calificación | ID_CALIFICACION (PK), | Registra la clasificación por edad permitida. |
|   | tipo_calificacion |   |
| País de | ID_PAIS_ORIGEN (PK), | Indica de qué país proviene la película y su |
| Origen | nombre_país, idioma | idioma nativo. |
| Actor | ID_ACTOR (PK),) nombre_actor, | Registra la información de los actores reales |
|   | apellido, animado | o si se trata de una caricatura. |
| Personaje | ID_PERSONAJE (PK), | Asigna el papel o personaje específico que |
|   | ID_ACTOR (FK), | interpreta un actor. |
|   | nombre_personaje |   |
| Reparto | ID_REPARTO (PK), | Tabla intermedia que conecta qué personajes |
|   | ID_PELICULA (FK), | y actores participan en cada película. |
|   | ID_PERSONAJE (FK) |   |
| Funcion | ID_FUNCION (PK), | Es la proyección real de una película en una |
|   | ID_PROGRAMACION (FK), | sala, día y hora determinada. |
|   | ID_CINE (FK), ID_PELICULA |   |
|   | (FK), ID_SALA (FK), |   |
|   | dia_semana, hora_inicio, |   |
|   | duracion |   |
| Entrada | ID_ENTRADA (PK), | Registra el ticket impreso y cobrado para una |
|   | ID_PELICULA (FK), | función específica. |
|   | ID_FUNCION (FK), ID_SALA |   |
|   | (FK) numero_entrada, |   |
|   | fecha_hora_venta, |   |


## 5.4 Diagrama Entidad-Relación (DER)

## 5.2 Relaciones y Cardinalidades

## 5.3 Normalización

| Cine | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_CINE | ID_CINE |   |   |
| Nombre_Cine |   | Nombre_Cine |   |
| Dirección |   | Dirección |   |

| Sala | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |


| ID_SALA | ID_SALA |
| --- | --- |
| Número | Número |
| Capacidad | Capacidad |
| ID_CINE | ID_CINE |

| Programación | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_PROGRAMACION ID_PROGRAMACION |   |   |   |
| Fecha_Inicio |   | Fecha_Inicio |   |
| Fecha_Fin |   | Fecha_Fin |   |
| Fecha_Hora_Creada |   | Fecha_Hora_Creada |   |
| ID_CINE |   |   | ID_CINE |

| Funcion | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| Nombre_Funcion |   | Nombre_Funcion |   |
| Dia_Semana |   | Dia_Semana |   |
| Hora_Inicio |   | Hora_Inicio |   |
| Duración |   | Duración |   |
| ID_PROGRAMACION |   |   | ID_PROGRAMACION |
| ID_CINE |   |   | ID_CINE |
| ID_PELICULA |   |   | ID_PELICULA |
| ID_SALA |   |   | ID_SALA |

| Entrada | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_ENTRADA | ID_ENTRADA |   |   |
| Numero_Entrada |   | Numero_Entrada |   |
| Fecha_Hora_Venta |   | Fecha_Hora_Venta |   |
| Fecha_Hora_Funcion |   | Fecha_Hora_Funcion |   |
| Precio_Cobrado |   | Precio_Cobrado |   |
| ID_PELICULA |   |   | ID_PELICULA |
| ID_FUNCION |   |   | ID_FUNCION |


| ID_SALA | ID_SALA |
| --- | --- |

| Calificación | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_CALIFICACION ID_CALIFICACION |   |   |   |
| Tipo_Calificacion |   | Tipo_Calificacion |   |

| Género | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_GENERO | ID_GENERO |   |   |
| Tipo_Genero |   | Tipo_Genero |   |

| Película | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_PELICULA | ID_PELICULA |   |   |
| Nombre_Pelicula |   | Nombre_Pelicula |   |
| Título |   | Título |   |
| Año_Estreno |   | Año_Estreno |   |
| Duración |   | Duración |   |
| Fecha_Ingreso |   | Fecha_Ingreso |   |
| Disponible |   | Disponible |   |
| ID_GENERO |   |   | ID_GENERO |
| ID_CALIFICACION |   |   | ID_CALIFICACION |
| ID_PAIS_DE_ORIGEN |   |   | ID_PAIS_DE_ORIGEN |

| Calificación | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_PAIS_DE_ORIGEN | ID_PAIS_DE_ORIGEN |   |   |
| Nombre_País |   | Nombre_País |   |
| Idioma |   | Idioma |   |

| Reparto | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_REPARTO | ID_REPARTO |   |   |
| ID_PELICULA |   |   | ID_PELICULA |
| ID_PERSONAJE |   |   | ID_PERSONAJE |


| Personaje | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_PERSONAJE | ID_PERSONAJE |   |   |
| Nombre_Personaje |   | Nombre_Personaje |   |
| ID_ACTOR |   |   | ID_ACTOR |

| Actor | 1FN | 2FN | 3FN |
| --- | --- | --- | --- |
| ID_ACTOR | ID_ACTOR |   |   |
| Nombre |   | Nombre |   |
| Apellido |   | Apellido |   |
| Animado |   | Animado |   |

## 5.5 Modelo Entidad-Relación (MER)

## 6. Documentación Final y Producto

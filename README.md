# Sistema Académico

Este proyecto es un sistema académico desarrollado utilizando una arquitectura de microservicios. Cada microservicio maneja una parte específica del dominio del negocio, como la gestión de usuarios, cursos, exámenes y respuestas. La interfaz de usuario está desarrollada en React, mientras que la API Gateway actúa como el punto de entrada único para todas las solicitudes de los usuarios.

## Integrantes

- Ñacata Iza Heidy Magaly
- Quishpe Guaytarilla Anthony Esteven
- Rivera Verdezoto Amanda Liliana
- Rodriguez Rodriguez Danny Marcelo
- Tipantiza Cumbal Nayeli Michelle

## Descripción de la Arquitectura

### Arquitectura de Microservicios

1. **Usuario**: Los usuarios interactúan con el sistema a través de una interfaz de usuario desarrollada en React.

2. **API Gateway**:
   - **Punto de entrada único**: Actúa como el único punto de entrada para todas las solicitudes de los usuarios.
   - **Enrutamiento**: Redirige las solicitudes entrantes a los servicios correspondientes (microservicios).
   - **Funciones adicionales**: Maneja autenticación, autorización, balanceo de carga, monitoreo, registro y limitación de tasas (rate limiting).

3. **Microservicios**:
   - **Usuarios**: Gestiona operaciones relacionadas con usuarios.
   - **Cursos**: Maneja operaciones relacionadas con cursos.
   - **Exámenes**: Gestiona operaciones relacionadas con exámenes.
   - **Respuestas**: Maneja las respuestas de los usuarios a los exámenes.

### Características de la Arquitectura de Microservicios

- **Descomposición en Servicios Independientes**: Cada microservicio es una unidad funcional independiente.
- **Despliegue Independiente**: Cada microservicio se puede desplegar, escalar y gestionar de manera independiente.
- **Bases de Datos Separadas**: Cada microservicio tiene su propia base de datos.
- **Escalabilidad**: Los microservicios se pueden escalar de manera independiente según la demanda.
- **Resiliencia**: Fallos en un microservicio no necesariamente afectan a otros microservicios.
- **Tecnologías Heterogéneas**: Cada microservicio puede estar desarrollado con diferentes tecnologías y lenguajes de programación.

### Microservicio de Exámenes
1. Descomprimir la plantilla `msvc-examens` en el proyecto `app`.
2. Modificar el archivo `pom.xml` y agregar los componentes necesarios.
3. Crear un nuevo paquete llamado `services`.
4. Dentro del paquete `services`, crear una clase llamada `Examen.java` y configurar la persistencia.

### Microservicio de Respuestas
1. Descomprimir la plantilla `msvc-respuestas` en el proyecto `app`.
2. Modificar el archivo `pom.xml` y agregar los módulos necesarios.
3. Configurar las propiedades de la aplicación, incluyendo el puerto del servidor y la configuración de la base de datos.

## Frontend

Para la parte del frontend, se utilizó React para desarrollar la interfaz de usuario.

## Instalación y Ejecución

1. Clonar el repositorio.
2. Navegar a cada microservicio y ejecutar `mvn clean install`.
3. Levantar cada microservicio con `mvn spring-boot:run`.
4. Navegar al directorio del frontend y ejecutar `npm install` seguido de `npm start`.

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Por favor, abra un issue o envíe un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Bibliografía

1. [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
2. [React Documentation](https://reactjs.org/docs/getting-started.html)
3. [Microservices Architecture](https://martinfowler.com/microservices/)
4. [RESTful API Design](https://www.oreilly.com/library/view/building-microservices/9781491950340/)

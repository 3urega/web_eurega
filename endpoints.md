# Endpoints de la API de Strapi para Eurega

Este documento contiene todos los endpoints disponibles en la API de Strapi, así como ejemplos de cómo utilizarlos.

## URL Base

```
http://localhost:1337/api
```

En producción, esta URL cambiaría según tu dominio.

## Autenticación

### Registro de Usuarios

```
POST /auth/local/register
```

**Cuerpo de la solicitud:**
```json
{
  "username": "usuario_nuevo",
  "email": "usuario@ejemplo.com",
  "password": "Contraseña123!"
}
```

### Inicio de Sesión

```
POST /auth/local
```

**Cuerpo de la solicitud:**
```json
{
  "identifier": "usuario@ejemplo.com", // Puede ser email o username
  "password": "Contraseña123!"
}
```

**Respuesta:**
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "usuario_nuevo",
    "email": "usuario@ejemplo.com",
    // otros campos
  }
}
```

### Solicitar Restablecimiento de Contraseña

```
POST /auth/forgot-password
```

**Cuerpo de la solicitud:**
```json
{
  "email": "usuario@ejemplo.com"
}
```

### Restablecer Contraseña

```
POST /auth/reset-password
```

**Cuerpo de la solicitud:**
```json
{
  "code": "codigo_recibido_por_email",
  "password": "NuevaContraseña123!",
  "passwordConfirmation": "NuevaContraseña123!"
}
```

## Blog (Posts con LaTeX)

### Obtener Todos los Posts

```
GET /posts
```

### Obtener Posts con Paginación

```
GET /posts?pagination[page]=1&pagination[pageSize]=10
```

### Obtener Posts Ordenados

```
GET /posts?sort=publishedAt:desc
```

### Obtener Posts Destacados

```
GET /posts?filters[featured][$eq]=true
```

### Obtener Post por Slug

```
GET /posts?filters[slug][$eq]=mi-post
```

### Obtener Post con Relaciones

```
GET /posts?populate=*
```

O más específico:

```
GET /posts?populate=cover,categories,author
```

### Crear un Post (Requiere Autenticación)

```
POST /posts
```

**Cabeceras:**
```
Authorization: Bearer tu_token_jwt
```

**Cuerpo de la solicitud:**
```json
{
  "data": {
    "title": "Mi Primer Post con LaTeX",
    "slug": "mi-primer-post-con-latex",
    "content": "# Mi Título\n\nEcuación famosa: $E = mc^2$\n\nEcuación en bloque:\n\n$$ax^2 + bx + c = 0$$",
    "summary": "Un post sobre ecuaciones matemáticas",
    "featured": true,
    "publishedAt": "2023-04-01T10:00:00.000Z"
  }
}
```

### Actualizar un Post (Requiere Autenticación)

```
PUT /posts/{id}
```

### Eliminar un Post (Requiere Autenticación)

```
DELETE /posts/{id}
```

## Categorías

### Obtener Todas las Categorías

```
GET /categories
```

### Obtener Categoría con sus Posts

```
GET /categories?populate=posts
```

### Crear una Categoría (Requiere Autenticación)

```
POST /categories
```

**Cuerpo de la solicitud:**
```json
{
  "data": {
    "name": "Matemáticas",
    "slug": "matematicas"
  }
}
```

## Carga de Archivos

### Subir un Archivo (Requiere Autenticación)

```
POST /upload
```

**Cabeceras:**
```
Authorization: Bearer tu_token_jwt
Content-Type: multipart/form-data
```

**Formulario:**
- `files`: Los archivos a subir
- `ref` (opcional): Nombre de la colección relacionada
- `refId` (opcional): ID del elemento relacionado
- `field` (opcional): Campo donde se almacenará

### Obtener Información de Archivos

```
GET /upload/files
```

### Obtener Información de un Archivo

```
GET /upload/files/{id}
```

### Eliminar un Archivo (Requiere Autenticación)

```
DELETE /upload/files/{id}
```

## Usuarios

### Obtener Perfil de Usuario Actual (Requiere Autenticación)

```
GET /users/me?populate=*
```

### Actualizar Perfil de Usuario (Requiere Autenticación)

```
PUT /users/{id}
```

## Parámetros de Consulta Comunes

### Populate (Relaciones)

Incluir relaciones en la respuesta:

```
?populate=*              // Todas las relaciones de primer nivel
?populate=field1,field2  // Campos específicos
?populate[field1]=*      // Anidado para field1
?populate[field1][populate]=subfield  // Anidado más profundo
```

### Filtros

Filtrar resultados:

```
?filters[field][$eq]=value    // Igual a
?filters[field][$ne]=value    // No igual a
?filters[field][$lt]=value    // Menor que
?filters[field][$lte]=value   // Menor o igual que
?filters[field][$gt]=value    // Mayor que
?filters[field][$gte]=value   // Mayor o igual que
?filters[field][$contains]=value    // Contiene (string)
?filters[field][$notContains]=value // No contiene (string)
?filters[field][$in]=[value1,value2]    // En array de valores
?filters[field][$notIn]=[value1,value2] // No en array de valores
```

### Operadores Lógicos

```
?filters[$and][0][field][$eq]=value1&filters[$and][1][field2][$eq]=value2
?filters[$or][0][field][$eq]=value1&filters[$or][1][field][$eq]=value2
```

### Ordenación

```
?sort=field:asc           // Ascendente
?sort=field:desc          // Descendente
?sort=field1:asc,field2:desc  // Múltiples campos
```

### Paginación

```
?pagination[page]=1       // Página a mostrar
?pagination[pageSize]=10  // Elementos por página
?pagination[withCount]=false  // Sin contar total (mejor rendimiento)
```

### Campos

Seleccionar qué campos devolver:

```
?fields=field1,field2,field3
```

## Ejemplo de Uso Completo

Obtener los 5 posts más recientes destacados, con sus categorías y autor, seleccionando solo ciertos campos:

```
GET /posts?filters[featured][$eq]=true&pagination[pageSize]=5&sort=publishedAt:desc&populate[0]=categories&populate[1]=author&fields[0]=title&fields[1]=summary&fields[2]=publishedAt&fields[3]=slug&fields[4]=content
```

## Notas Importantes

1. Todos los endpoints que modifican datos (POST, PUT, DELETE) requieren autenticación mediante JWT
2. El token JWT debe enviarse en la cabecera `Authorization: Bearer tu_token`
3. Las respuestas siempre siguen la estructura estándar de Strapi:
   ```json
   {
     "data": [...],
     "meta": {
       "pagination": {
         "page": 1,
         "pageSize": 10,
         "pageCount": 5,
         "total": 50
       }
     }
   }
   ```
4. Para los endpoints de creación y actualización, siempre debes envolver tus datos con un objeto `data`
5. Para trabajar con LaTeX en los posts, siempre envía el contenido como Markdown con sintaxis LaTeX

## Personalización de la API

Si has creado rutas personalizadas en Strapi, también estarán disponibles como endpoints adicionales. Consulta tu configuración específica para más detalles. 
# Guía de Commits

Adoptamos el estándar de **Conventional Commits**.

### Formato

`tipo: descripción en minúsculas`

Si quieres especificar **dónde** ocurrió el cambio (módulo, carpeta, colección), puedes usar **scope** entre paréntesis:

`tipo(scope): descripción en minúsculas`

El **scope es opcional**: usalo cuando aporte contexto real; si con el tipo y la descripción ya se entiende, no hace falta.

### Tipos principales

- **feat**: Una nueva funcionalidad (ej. `feat(api): agregar endpoint de listado de pacientes`).
- **fix**: Corrección de un error (ej. `fix(mongo): corregir filtro por cédula en doctores`).
- **refactor**: Cambios en el código que no añaden funciones ni corrigen errores (ej. `refactor(db): extraer capa de acceso a colecciones`).
- **chore**: Mantenimiento que no cambia el comportamiento del producto: dependencias, tooling, configs, tareas repetitivas (ej. `chore(deps): actualizar driver de mongodb`).
- **docs**: Cambios solo en la documentación.
- **style**: Cambios de formato (espacios, comas, etc.) que no afectan la lógica.

### Cuerpo del mensaje (opcional)

Si el cambio tiene varias partes, deja una **línea en blanco** después del título y usa **viñetas** para detallar. Ayuda en el historial y en las descripciones de PR.

Ejemplo:

```
feat(pacientes): agregar validación y guardado en MongoDB

- Esquema con Joi; normalización de cédula antes del insert
- Índice único en cédula; manejo de error duplicado (Mongo 11000)
- Tests unitarios del servicio con mongodb-memory-server
```

### Reglas de oro

- La primera línea no debe exceder los 72 caracteres.
- En el cuerpo: motivación o contexto cuando importe; viñetas cuando un commit agrupa varios cambios y conviene leerlos por separado.

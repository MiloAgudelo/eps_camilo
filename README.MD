# Taller Node - Mongo

Mediante NodeJS realiza conexión a base de datos mongodb llamada EPS con 2 colecciones.

## Esquemas

### 1. Esquema de Doctores

```json
{
  "id": "",
  "nombre": "",
  "cedula": "",
  "especializacion": ""
}
```

### 2. Esquema de Pacientes

```json
{
  "nombrePaciente": "",
  "cedulaPaciente": "",
  "direccionPaciente": "",
  "grupo_familiar": {
    "esposa_nombre": "",
    "esposa_edad": 0,
    "hijo_nombre": "",
    "hijo_edad": 0,
    "padres_nombre": ""
  },
  "id_doctor": ""
}
```

## Base de datos (MongoDB shell)

Comandos que usé en `mongosh`: [docs/mongo-shell.md](docs/mongo-shell.md).

## Instrucciones y métodos

Todo debe realizarse desde Node.js y probarse en Postman o Bruno:

1. **Método Guardar:** Crear un método para ingresar/registrar los datos en las colecciones.
2. **Método Consulta:** Crear un método para consultar la información filtrando por la **cédula del paciente**.
3. **Consulta Filtrada:** Realizar una consulta que muestre **únicamente**:
   1. Nombre del paciente.
   2. Nombre del doctor que lo atiende.

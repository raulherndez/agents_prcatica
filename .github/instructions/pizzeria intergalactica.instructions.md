# Directrices del Proyecto: Pizzería Intergaláctica

## 1. Identidad y Propósito General
- **Proyecto:** Sitio web funcional de "Pizzería Intergaláctica" (HTML, CSS, JS), adaptable a cualquier dispositivo y sistema operativo.
- **Estilo de respuesta:** Clara, concisa y directa.
- **Regla de cierre:** Toda respuesta o tarea completada debe finalizar obligatoriamente con la palabra: **finalizado**.

## 2. Comandos del Proyecto
- **Instalar dependencias:** `npm install`
- **Ejecutar en desarrollo:** `npm run dev`
- **Construir para producción:** `npm run build`
- **Ejecutar pruebas:** `npm test` *(Obligatorio antes de cada commit)*

## 3. Arquitectura del Proyecto (Clean Architecture)
Respeta estrictamente la siguiente estructura de carpetas para el código y las pruebas:
- `src/MiProyecto.UI/` (Presentación / API - Controllers, Program.cs)
- `src/MiProyecto.Application/` (Casos de uso - Dtos, Services)
- `src/MiProyecto.Domain/` (Entidades y Reglas de Negocio - Entities, Interfaces)
- `src/MiProyecto.Infrastructure/` (Base de datos y repositorios - Data, Repositories)
- `tests/MiProyecto.Tests/` (Pruebas unitarias espejando la estructura de `src/`)

## 4. Convenciones de Código
- **Variables y funciones:** Usar `camelCase`.
- **Clases y componentes:** Usar `PascalCase`.
- **Idioma:** Todos los comentarios y la documentación dentro del código deben estar **íntegramente en español**.
- **Limpieza:** Mantener el código limpio, legible y modular.

## 5. Protocolo de Git y Control de Versiones
- **Mensajes de Commit:** Seguir *Conventional Commits* (ej. `feat(auth): agregar validación de login`).
- **Ramas (Branches):** Para cada nueva funcionalidad, crear una rama con el formato: `feature/epic-[numero-epic]-[nombre-feature]`
- **Restricciones de rama:** Prohibido hacer `push` directo a `main`. Todo cambio debe ir hacia `dev` mediante Pull Request aprobado.
- **Revisión previa:** Al terminar una tarea, resume los cambios utilizando simulación de comandos como `git diff` y `git log --oneline`.

## 6. Seguridad estricta (CRÍTICO)
- **Archivos prohibidos:** NUNCA leas, muestres, edites ni hagas referencias a archivos `.env`, `.env.local` o archivos que contengan claves API, credenciales o información sensible.
- **Buenas prácticas:** Nunca hardcodees secretos en el código fuente; utiliza siempre variables de entorno.
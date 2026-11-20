

<!-- local-development:start -->
# Desarrollo local

Puedes abrir este repositorio en VS Code, Antigravity o Sublime Text. El compilador y los servicios necesarios dependen del componente indicado abajo.

## Archivos ignorados

`.gitignore` excluye credenciales locales, estado del editor y salidas de las herramientas detectadas. No deja de versionar archivos que ya estaban en Git. Los manifiestos, archivos de bloqueo, recursos fuente y scripts de esquema forman parte del código.
<!-- local-development:end -->


<!-- improvements-20261120:start -->
## Mejoras y verificación — 2026-11-20 (Calculadora de figuras geométricas con visualizador SVG e historial)

- **Cambios:** Implementados `web-app/geometry.js` y `web-app/index.html` para Círculo, Cuadrado/Rectángulo, Triángulo (fórmula de Herón y clasificación), Polígono Regular y Cilindro con validaciones geométricas, vista previa SVG dinámica, historial en `localStorage` y tema claro/oscuro.
- **Validación:** Node 24 `node --test web-app/tests/geometry.test.mjs` (todas las figuras y desigualdad triangular verificadas).
<!-- improvements-20261120:end -->

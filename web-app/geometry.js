/* Examen Figuras Geométricas — Motor de cálculos 2D y 3D con validaciones */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.GeometryEngine = factory();
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  function round(n) { return Number(Number(n).toFixed(4)); }
  function pos(v) { var n = Number(v); return Number.isFinite(n) && n > 0 ? n : null; }

  function circle(radius) {
    var r = pos(radius);
    if (!r) return { ok: false, error: 'El radio debe ser mayor que 0.' };
    return { ok: true, shape: 'Círculo', area: round(Math.PI * r * r), perimeter: round(2 * Math.PI * r), diameter: round(2 * r) };
  }

  function rectangle(width, height) {
    var w = pos(width), h = pos(height);
    if (!w || !h) return { ok: false, error: 'Base y altura deben ser mayores que 0.' };
    return { ok: true, shape: w === h ? 'Cuadrado' : 'Rectángulo', area: round(w * h), perimeter: round(2 * (w + h)), diagonal: round(Math.hypot(w, h)) };
  }

  function triangle(a, b, c) {
    var x = pos(a), y = pos(b), z = pos(c);
    if (!x || !y || !z) return { ok: false, error: 'Los 3 lados deben ser mayores que 0.' };
    if (x + y <= z || x + z <= y || y + z <= x) return { ok: false, error: 'No cumple la desigualdad triangular.' };
    var p = x + y + z;
    var s = p / 2;
    var area = Math.sqrt(s * (s - x) * (s - y) * (s - z));
    var type = (x === y && y === z) ? 'Equilátero' : (x === y || y === z || x === z) ? 'Isósceles' : 'Escaleno';
    return { ok: true, shape: 'Triángulo (' + type + ')', area: round(area), perimeter: round(p), type: type };
  }

  function regularPolygon(sides, sideLength) {
    var n = Number(sides), s = pos(sideLength);
    if (!Number.isInteger(n) || n < 3 || !s) return { ok: false, error: 'Indique al menos 3 lados y longitud > 0.' };
    var p = n * s;
    var apothem = s / (2 * Math.tan(Math.PI / n));
    return { ok: true, shape: 'Polígono regular (' + n + ' lados)', area: round((p * apothem) / 2), perimeter: round(p), apothem: round(apothem) };
  }

  function cylinder(radius, height) {
    var r = pos(radius), h = pos(height);
    if (!r || !h) return { ok: false, error: 'Radio y altura deben ser mayores que 0.' };
    return { ok: true, shape: 'Cilindro', area: round(2 * Math.PI * r * (r + h)), volume: round(Math.PI * r * r * h) };
  }

  return { circle: circle, rectangle: rectangle, triangle: triangle, regularPolygon: regularPolygon, cylinder: cylinder };
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const G = require('../geometry.js');

test('computes circle, rectangle, triangle, polygon, and cylinder accurately', () => {
  assert.ok(Math.abs(G.circle(3).area - 28.2743) < 0.001);
  assert.equal(G.rectangle(4, 4).shape, 'Cuadrado');
  assert.equal(G.rectangle(3, 4).diagonal, 5);
  assert.equal(G.triangle(3, 4, 5).area, 6);
  assert.equal(G.triangle(1, 2, 10).ok, false);
  assert.ok(G.regularPolygon(6, 4).area > 41.5);
  assert.ok(G.cylinder(2, 5).volume > 62.8);
});

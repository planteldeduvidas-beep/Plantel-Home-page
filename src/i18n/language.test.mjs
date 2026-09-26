import test from 'node:test';
import assert from 'node:assert/strict';
import { detectLanguage } from './index.js';
import { messages } from './messages.js';

test('detects supported browser languages and falls back to Portuguese', () => {
  assert.equal(detectLanguage(null, ['pt-PT']), 'pt-BR');
  assert.equal(detectLanguage(null, ['en-US']), 'en');
  assert.equal(detectLanguage(null, ['es-AR']), 'es');
  assert.equal(detectLanguage(null, ['fr-FR', 'es-ES']), 'es');
  assert.equal(detectLanguage(null, ['fr-FR']), 'pt-BR');
  assert.equal(detectLanguage(null, []), 'pt-BR');
});
test('saved choices override browser language; invalid choices are ignored', () => {
  assert.equal(detectLanguage('pt-BR', ['en-US']), 'pt-BR');
  assert.equal(detectLanguage('es', ['pt-BR']), 'es');
  assert.equal(detectLanguage('invalid', ['en-GB']), 'en');
});
test('all translations preserve interpolation parameters and coupon codes', () => {
  for (const [source, variants] of Object.entries(messages)) {
    const tokens = source.match(/\{\w+\}/g) || [];
    for (const code of ['en', 'es']) {
      assert.ok(variants[code]?.trim(), `${source}: missing ${code}`);
      assert.deepEqual(variants[code].match(/\{\w+\}/g) || [], tokens);
    }
  }
  assert.ok(messages['Use o cupom: PLANTEL10'].en.includes('PLANTEL10'));
  assert.ok(messages['Use o cupom: PLANTEL10'].es.includes('PLANTEL10'));
});
test('manual choice saves and reloads the same page, with a URL fallback when storage is blocked', async () => {
  const calls = [];
  globalThis.localStorage = { getItem: () => 'pt-BR', setItem: (...args) => calls.push(args) };
  globalThis.window = { location: { search: '', href: 'https://example.com/#calendario', reload: () => calls.push('reload'), assign: value => calls.push(value) } };
  const i18n = await import('./index.js?storage-test');
  i18n.changeLanguage('en');
  assert.deepEqual(calls, [['plantel-language', 'en'], 'reload']);
  calls.length = 0;
  globalThis.localStorage.setItem = () => { throw new Error('blocked'); };
  i18n.changeLanguage('es');
  assert.equal(calls[0], 'https://example.com/?lang=es#calendario');
  delete globalThis.window;
  delete globalThis.localStorage;
});

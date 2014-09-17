'use strict';
var assert = require('assert');
var stripImports = require('../lib/strip-html-imports');

describe('strip-html-imports', function() {
  it('should strip html imports', function() {
    var html = '<html><link rel="import" href="import1.html"><link rel="import" href="import2.html"></html>';
    var expected = '<html></html>';
    var actual = stripImports(html);

    assert.equal(actual, expected);
  });

  it('should exclude html import', function() {
    var html = '<html><link rel="import" href="import1.html"><link rel="import" href="import2.html"></html>';
    var expected = '<html><link rel="import" href="import1.html"></html>';
    var actual = stripImports(html, ['import1.html']);

    assert.equal(actual, expected);
  });
});
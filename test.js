/*!
 * all-font-face-attrs | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/all-font-face-attrs
*/
'use strict';

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

var spec = 'should be equivalent of the expected value.';
var expected = [
  'id',
  'xml:base',
  'xml:lang',
  'xml:space',
  'font-family',
  'font-style',
  'font-variant',
  'font-weight',
  'font-stretch',
  'font-size',
  'unicode-range',
  'units-per-em',
  'panose-1',
  'stemv',
  'stemh',
  'slope',
  'cap-height',
  'x-height',
  'accent-height',
  'ascent',
  'descent',
  'widths',
  'bbox',
  'ideographic',
  'alphabetic',
  'mathematical',
  'hanging',
  'v-ideographic',
  'v-alphabetic',
  'v-mathematical',
  'v-hanging',
  'underline-position',
  'underline-thickness',
  'strikethrough-position',
  'strikethrough-thickness',
  'overline-position',
  'overline-thickness'
];

test('require(\'all-font-face-attrs\')', function(t) {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.allFontFaceAttrs', function(t) {
  t.plan(1);

  global.window = {};
  requireBowerFiles({self: true});
  t.deepEqual(window.allFontFaceAttrs, expected, spec);
});

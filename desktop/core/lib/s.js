'use strict'

const FnMove = require('./_move')

function FnS (pico, x, y) {
  FnMove.call(this, pico, x, y)

  this.name = 'south'
  this.glyph = 's'
  this.info = 'Moves southward, or bangs.'

  this.haste = function () {
    if (this.signal()) { return }
    if (this.is_free(0, 1) !== true) { this.replace('b'); return }
    this.move(0, 1)
  }
}

module.exports = FnS
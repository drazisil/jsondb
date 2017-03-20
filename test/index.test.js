/* global it describe */
require('should')
const jsondb = require('../lib/index.js')

describe('moo', () => {
  describe('moo!', () => {
    it('should return moo', () => {
      jsondb.moo().should.equal('moo')
    })
  })
})

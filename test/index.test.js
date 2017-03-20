/* global it describe */
/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */
const chai = require('chai')
const fs = require('fs')
const jsondb = require('../lib/index.js')

const databaseFilename = './db.json'

const should = chai.should()

describe('File handling', () => {
  it('should be able to create a database file', (done) => {
    fs.stat(databaseFilename, (errStat) => {
      errStat.code.should.equal('ENOENT')
      jsondb.create(databaseFilename, (e) => {
        should.not.exist(e)
        fs.stat(databaseFilename, (errStat2) => {
          should.not.exist(errStat2)
          fs.unlinkSync(databaseFilename)
          done()
        })
      })
    })
  })

  it('should be able to read a database file')

  it('should be able to update a database file')

  it('should be able to delete a database file')
})

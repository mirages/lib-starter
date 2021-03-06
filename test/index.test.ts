import { testNum, testStr, testAdd, createHtml } from '../src/index'

describe('lib-starter test', () => {
  it('The value of testNum is 3', () => {
    testNum.should.be.equal(3)
    chai.expect(testNum).to.be.equal(3)
  })
  it('The value of testStr is "test"', () => {
    testStr.should.be.equal('test')
    chai.expect(testStr).to.be.equal('test')
  })
  it('testAdd(1, 2) should be equal 3', () => {
    testAdd(1, 2).should.be.equal(3)
    chai.expect(testAdd(1, 2)).to.be.equal(3)
  })
  it('createHtml() create html string', () => {
    const a = createHtml()
    a.should.be.a('string')
    chai.expect(a).to.be.a('string')
  })
})

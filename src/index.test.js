import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', ()  => {
    expect(true).to.equal(true);
  })
})

//done shows JSDOM that the test has completed.
describe('index.html', () => {
  it('should say hello', (done) => {
  // Read the index file and store it in memory
  const index = fs.readFileSync('./src/index.html', "utf-8");
 // Function that has an error and a reference to the window the fails
  jsdom.env(index, function(err, window)
  {
    //Get the first h1 in the body of the page
    const h1 = window.document.getElementsByTagName('h1')[0];
    //Expect that h1 to match "Hello world""
    expect(h1.innerHTML).to.equal("Hello World!");
    done();
    window.close();
  })
})
})

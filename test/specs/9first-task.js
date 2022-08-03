const assert = require('assert');
const { url } = require('inspector');
describe('webdriver.io page', async () => {

  it('Homework task', async () => {
    
    //1. Go to the site
    await browser.url('https://webdriver.io');
    await browser.pause(3000);
    
    //2. Click the API button
    imp = await $('[href="/docs/api"]');
    await imp.click();
    await browser.pause(3000);
    
    //3. Type in console URL
    console.log('Current URL: ' + 'https://webdriver.io/docs/api')
    
    //4. Type the header of the page API
    const elem = await $('h1');
    console.log(await ('Header of the page API ' + elem.getText()));
    
    //5. Type attribute of JSONWire protocol
    let link = await $('//*[text()="JSONWire protocol"]');
    let attr = await link.getAttribute('href');
    console.log("Attribute HREF = " + attr);
    
    //6. Type text 'test is' in the search field
    imp = await $('.searchBox_qEbK');
    await imp.click();
    input = await $('#docsearch-input');
    await browser.pause(5000);
    await input.addValue('Test is');
    await browser.pause(5000);
    value = await input.getValue();
    console.log("value1 = " + value);
    await browser.pause(5000);
    
    //7. Add text "DONE!" and pause 5sec
    value = await input.addValue(' DONE!');
    await browser.pause(5000);
    value = await input.getValue();
    console.log("value2 = " + value);
    assert(value === 'Test is DONE!');
  })
});

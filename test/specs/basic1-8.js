const assert = require('assert');
describe('webdriver.io page', async () => {

  it('should have the right title', async () => {
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();
    assert.strictEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
  });

  it('addValue command', async () => {
    await browser.url('https://webdriver.io');
    imp = await $('.searchBox_qEbK');
    await imp.click();
    input = await $('#docsearch-input');
    await browser.pause(2000);
    await input.addValue('test');
    await browser.pause(3000);
    value = await input.getValue();
    console.log("value1 = " + value);
    await browser.pause(3000);
    value = await input.addValue(' sho test');
    await browser.pause(3000);
    value = await input.getValue();
    console.log("value2 = " + value);
    assert(value === 'test sho test'); // true
  });

  it('getAttribute command', async () => {
    await browser.url('https://webdriver.io');        
    await browser.pause(4000);
    let apiBtn = await $('//nav//div[1]/a[3]');
    await apiBtn.click();
    await browser.pause(4000);
    let link = await $('//*[text()="JSONWire protocol"]');
    let attr = await link.getAttribute('href');
    console.log("Attribute HREF = " + attr);
  })

  it('getLocation command', async () => {
    await browser.url('https://webdriver.io');
    let logo = await $('.DocSearch-Button-Placeholder')
    let location = await logo.getLocation();
    console.log(location);

    let xLocation = await logo.getLocation('x');
    console.log('xLocation' + xLocation);
  })

  it('getText command', async () => {
    await browser.url('https://webdriver.io');
    let blogButton = await $('[href="/blog"]')
    console.log("Text for elements:" + blogButton.getText())
    })
});

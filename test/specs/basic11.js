describe('webdriver.io page', async () => {

  //Повертає true або false, якщо вибраний елемент DOM увімкнено.
  it('should detect if an element is enabled', async () => {
    await browser.url('https://webdriver.io');
    const blogButton = await $('[href="/blog"]');
    let isEnabled = await blogButton.isEnabled();
    console.log("IS ENABLED: " + isEnabled);
  });

  //Повертає true або false, якщо вибраний елемент DOM зараз має фокус. 
  //Якщо селектор відповідає декільком елементам, він поверне true, 
  //якщо один з елементів має фокус.
  
  it('should detect the focus of an element', async () => {
    await browser.url('https://webdriver.io');
    const input = await $('.searchBox_qEbK');
    console.log("Search field is focused before click" + input.isFocused());
    await browser.pause(5000);
    await input.click();
    console.log("Search field is focused after click" + input.isFocused());
    await browser.pause(5000);
  });

  // Прокрутити до елемента

  it('should move to the element', async () => {
    await browser.url('https://webdriver.io');
    const gitHubLink = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[5]');
    await browser.pause(5000);
    gitHubLink.scrollIntoView();
    await browser.pause(5000);
  });
});

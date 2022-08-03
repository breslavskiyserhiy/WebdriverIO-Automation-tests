describe('webdriver.io page', async () => {

  //Збережіть знімок екрана поточного контексту веб-перегляду у файл PNG у вашій ОС.
  it('should save a screenshot of the browser view', async () => {
    await browser.url('https://webdriver.io');
    const gitScreen = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[3]/ul/li[5]');
    await gitScreen.saveScreenshot('gitScreenshot.png');  
  });

  //Відкрити нове вікно в браузері. Ця команда є еквівалентною функцією window.open(). 
  //Ця команда не працює в мобільних середовищах.
  
  it('should switch to another windows', async () => {
    await browser.url('https://google.com');
    await browser.newWindow('https://webdriver.io');
    await browser.pause(5000);
    //Переключаємось між вікнами
    await browser.switchWindow('google.com');
    await browser.pause(2000);
    await browser.switchWindow('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'); 
    await browser.pause(2000);
  });
});

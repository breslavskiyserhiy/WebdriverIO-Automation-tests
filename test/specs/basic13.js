describe('webdriver.io page', async () => {

  /*Ця команда очікування є вашою універсальною зброєю, якщо ви хочете чогось дочекатися. 
  Він очікує умови та чекає, поки ця умова не буде виконана з істинним значенням. 
  Якщо ви використовуєте програму тестування WDIO, команди в умові виконуються синхронно, як у вашому тесті.*/

  it('should wait until', async () => {
    await browser.url('https://webdriver.io');
    await browser.waitUntil(() => {
      return $('[href="/blog"]').isDisplayed();
    }, 5000, 'blog is not displayed');
  });

  //Отримати вихідний код зазначеного елемента DOM за допомогою селектора.
  
  it('should get html for certain elements', async () => {
    await browser.url('https://webdriver.io/docs/api');
    var outerHTML = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]').getHTML();
    console.log('outerHTML ' + outerHTML);
    

    var innerHTML = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]').getHTML(false);
    console.log('innerHTML ' + innerHTML);
  });
});

describe('webdriver.io page', async () => {

  it('Homework task', async () => {
    //Go to the page
    await browser.url('https://webdriver.io/docs/api');

    //Open link in new tab
    let link = await $('//*[text()="JSONWire protocol"]');
    let attr = await link.getAttribute('href');
    await browser.newWindow(attr);
    await browser.pause(3000);
    
    //Check the element "WebDriver"
    const editLink = await $('//*[@id="m-documentationwebdriver"]');
    let isDisplayedWebDriver = await editLink.isDisplayed();
    console.log("ELEMENT WebDriver IS DISPLAYED?: " + isDisplayedWebDriver);

    //Switch to https://webdriver.io/docs/api
    await browser.switchWindow('https://webdriver.io/docs/api');
    await browser.pause(3000);

    //Check text 'Introduction'in Header
    await browser.waitUntil(
      async () => 
      {
      return $('//h1[text()="Introduction"]').getText();
      }, 
      15000, 'Introduction is not displayed');

    //Screenshot "Introduction"
    const introScreen = await $('//h1[text()="Introduction"]');
    await introScreen.saveScreenshot('introScreenshot.png');

    //is displayed Twitter link
    const twitLink = await $('[href="https://twitter.com/webdriverio"]');
    let isDisplayedTwitter = await twitLink.isDisplayed();
    console.log("IS Twitter DISPLAYED?: " + isDisplayedTwitter);

    //is displayedViewPort Twitter link
    let isTwitter = await $('[href="https://twitter.com/webdriverio"]');
    let isTwitterDisplayedInViewport = await isTwitter.isDisplayedInViewport();
    console.log("IS Twitter Visible?: " + isTwitterDisplayedInViewport);

    //scrolling to the Twitter link
    const twitterLink = await $('[href="https://twitter.com/webdriverio"]');
    await browser.pause(2000);
    twitterLink.scrollIntoView();
    await browser.pause(2000);

    //is displayed Twitter link after scrolling
    const twittLink = await $('[href="https://twitter.com/webdriverio"]');
    let isDisplayedTwit = await twittLink.isDisplayed();
    console.log("IS Twitter DISPLAYED AFTER SCROLLING?: " + isDisplayedTwit);

    //is displayedViewPort Twitter link after scrolling
    let isTwitterVisible = await $('[href="https://twitter.com/webdriverio"]');
    let isTwitterVisAfterScroll = await isTwitterVisible.isDisplayedInViewport();
    console.log("IS Twitter Visible AFTER SCROLLING?: " + isTwitterVisAfterScroll);
     
    //is focused before click on Blog link
    const input = await $('[href="/blog"]');
    console.log("Blog link is focused before click" + input.isFocused());
    await browser.pause(2000);
    await input.click();
    
    //is focused after click on Blog link
    console.log("Blog link is focused after click" + input.isFocused());
    await browser.pause(2000);
  });
});

const assert = require('assert');
const { isDataView } = require('util/types');
describe('webdriver.io page', async () => {

  //Перевірка чи клікабельний елемент
  it('is clickable', async () => {
    await browser.url('https://webdriver.io');
    const blogButton = await $('[href="/blog"]');
    let clickable = await blogButton.isClickable();
    console.log("IS CLiCKABLE?: " + clickable);
  });

  //Чи відображається елемент
  
  it('is displayed', async () => {
    await browser.url('https://webdriver.io');
    const blogButton = await $('[href="/blog"]');
    let isDisplayed = await blogButton.isDisplayed();
    console.log("IS DISPLAYED?: " + isDisplayed);
  });

  // Чи відображаєьбся viewport

  it('is visible', async () => {
    await browser.url('https://webdriver.io');
    let isBlog = await $('[href="/blog"]');
    let isBlogDisplayedInViewport = await isBlog.isDisplayedInViewport();
    console.log("IS BLOG DISPLAYED?: " + isBlogDisplayedInViewport);
    

    let isGit = await $('[href="https://github.com/webdriverio/webdriverio"]')
    let isGitDisplayedInViewport = await isGit.isDisplayedInViewport();
    console.log("IS GIT DISPLAYED?: " + isGitDisplayedInViewport);
  });
});

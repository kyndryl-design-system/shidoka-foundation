const { injectAxe, checkA11y } = require('axe-playwright');

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
module.exports = {
  async preVisit(page, context) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    let html = await page.evaluate(
      "document.querySelector('#root-inner').innerHTML"
    );

    // filter out stories that don't use components
    if (context.title.toLowerCase().includes('components/')) {
      // const outerHtml = await page.evaluate(
      //   "Array.prototype.slice.call(document.querySelectorAll('*')).find((el) => el.tagName.startsWith('KD-')).outerHTML"
      // );
      // const shadowRootHtml = await page.evaluate(
      //   "Array.prototype.slice.call(document.querySelectorAll('*')).find((el) => el.tagName.startsWith('KD-')).shadowRoot.innerHTML"
      // );
      // console.log(shadowRootHtml);
      html += await page.evaluate(
        "let html = ''; Array.prototype.slice.call(document.querySelectorAll('*')).filter((el) => el.tagName.startsWith('KD-')).forEach((el) => { if (el.tagName.startsWith('KD-')) { html+= el?.shadowRoot?.innerHTML || '' }}); html;"
      );
    }

    expect(html).toMatchSnapshot();
  },
};

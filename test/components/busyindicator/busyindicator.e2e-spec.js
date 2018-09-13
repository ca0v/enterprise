const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const utils = requireHelper('e2e-utils');
const config = requireHelper('e2e-config');
requireHelper('rejection');

jasmine.getEnv().addReporter(browserStackErrorReporter);

describe('Busy Indicator example-index tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/example-index');
  });

  it('Should not have errors', async () => {
  });

  it('Should display busy indicator', async () => {
    const buttonEl = await element(by.id('submit'));
    await buttonEl.click();

    await browser.driver.wait(protractor.ExpectedConditions.presenceOf(element(by.className('busy-indicator-container'))), config.waitsFor);

    expect(await element(by.className('busy-indicator-container'))).toBeTruthy();
  });
});

describe('Busy Indicator example-custom-loading-text tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/example-custom-loading-text');
  });

  it('Should display busy indicator with custom text', async () => {
    const buttonEl = await element(by.id('submit'));
    await buttonEl.click();

    const customTextEl = await element(by.className('busy-indicator-container')).element(by.tagName('span'));

    expect(customTextEl.getText()).toEqual('Hang Tough, Skippy...');
  });
});

describe('Busy Indicator example-inputs tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/example-inputs');
  });

  it('Should display busy indicator inside input', async () => {
    const inputLoadBtn = await element(by.id('trigger-busy-input'));

    await inputLoadBtn.click();

    const fieldEl = await element.all(by.className('field')).get(0);

    expect(await fieldEl.element(by.className('busy-indicator-container'))).toBeTruthy();

    // const ec = protractor.ExpectedConditions;
    // await browser.driver.wait(ec.not(ec.visibilityOf(element(by.className('busy-indicator-container')))), config.waitsFor);

    // expect(await fieldEl.element(by.className('busy-indicator-container'))).toBeFalsy();
  });

  it('Should display busy indicator inside dropdown', async () => {
    const dropdownLoadBtn = await element(by.id('trigger-busy-dropdown'));

    await dropdownLoadBtn.click();

    const fieldEl = await element.all(by.className('field')).get(1);

    expect(await fieldEl.element(by.className('busy-indicator-container'))).toBeTruthy();

    // await browser.driver.wait(protractor.ExpectedConditions.stalenessOf(element(by.className('busy-indicator-container'))), config.waitsFor);

    // expect(await fieldEl.element(by.className('busy-indicator-container'))).toBeFalsy();
  });
});

describe('Busy Indicator example-non-blocking tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/example-non-blocking');
  });

  it('Should display non-blocking busy indicator', async () => {
    const startBtn = await element(by.id('busy-start-trigger'));
    await startBtn.click();

    // Check difference between blocking and non-blocking
  });
});

describe('Busy Indicator test-ajax-calls tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-ajax-calls');
  });

  it('Should display busy indicator while waiting for Ajax response', async () => {
    const autocompleteEl = await element(by.id('autocomplete-busy'));
    await autocompleteEl.sendKeys(protractor.Key.NUMPAD1);

    const fieldEl = await element.all(by.className('field')).get(0);

    expect(await fieldEl.element(by.className('busy-indicator-container'))).toBeTruthy();
  });
});

describe('Busy Indicator test-block-entire-ui tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-block-entire-ui');
  });

  it('Should block entire UI', async () => {
    const buttonEl = await element(by.id('submit'));
    await buttonEl.click();

    const addressEl = await element(by.id('busy-field-address'));
    addressEl.sendKeys(protractor.Key.NUMPAD1);

    expect(addressEl.getText()).not.toEqual('1');
  });
});

describe('Busy Indicator test-block-specific-area tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-block-specific-area');
  });

  it('Should block specific area', async () => {
    const startBtn = await element(by.id('busy-start-trigger'));
    // const completeBtn = await element(by.id('busy-complete-trigger'));
    const specificEl = await element(by.id('standalone-busy'));

    await startBtn.click();

    expect(await specificEl.element(by.className('busy-indicator-container'))).toBeTruthy();

    // await browser.actions().click(completeBtn).perform();

    // expect(await specificEl.element(by.className('busy-indicator-container'))).toBeFalsy();
  });
});

describe('Busy Indicator test-block-whole-page tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-block-whole-page tests');
  });

  it('Should block whole page', async () => {
    const busyindicatorEl = await element(by.css('#maincontent > .busy-indicator-container'));

    expect(busyindicatorEl).toBeTruthy();
  });
});

describe('Busy Indicator test-contained-in-font-size-0 tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-contained-in-font-size-0');
  });

  it('Should display normal font', async () => {
    const startBtn = await element(by.id('busy-start-trigger'));
    await startBtn.click();

    const fontSize = element(by.className('busy-indicator-container')).element(by.tagName('span')).getCssValue('font-size');

    expect(fontSize).not.toEqual(0);
  });
});

describe('Busy Indicator test-delayed-display tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-delayed-display');
  });

  it('Should be displayed after a short delay', async () => {
    const buttonEl = await element(by.id('submit'));
    await buttonEl.click();

    await browser.driver.wait(protractor.ExpectedConditions.presenceOf(element(by.className('busy-indicator-container'))), config.waitsFor);

    expect(await element(by.className('busy-indicator-container'))).toBeTruthy();
  });
});

describe('Busy Indicator test-inside-tab tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-inside-tab');
  });

  it('Should be displayed inside tab', async () => {
    const startBtn = await element(by.id('busy-start-trigger'));
    await startBtn.click();

    const tabEl = await element(by.id('tabs-normal-contracts'));

    expect(await tabEl.element(by.className('busy-indicator-container'))).toBeTruthy();
  });
});

describe('Busy Indicator test-nested tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-nested');
  });

  it('Should display nested busy indicators', async () => {
    const nestedStartBtn = await element(by.id('nested-busy-start-trigger'));
    const buttonEl = await element(by.id('submit'));

    await nestedStartBtn.click();
    await buttonEl.click();

    const nestedStandaloneEl = await element(by.id('nested-busy-standalone'));

    expect(await nestedStandaloneEl.element(by.className('busy-indicator-container'))).toBeTruthy();

    const nestedBusyIndicatorEl = await element.all(by.css('.busy-indicator-container'));

    expect(nestedBusyIndicatorEl.length).toEqual(2);
  });
});

describe('Busy Indicator test-update tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/busyindicator/test-update');
  });

  it('Should update busy indicator text', async () => {
    const buttonEl = await element(by.id('submit'));

    await buttonEl.click();

    const customTextEl = await element(by.className('busy-indicator-container')).element(by.tagName('span'));

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(customTextEl, 'New Text 1'), 5000);

    expect(customTextEl.getText()).toEqual('New Text 1');
  });
});

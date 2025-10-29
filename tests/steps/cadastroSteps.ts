import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { CadastroPage } from '../pages/CadastroPage';

setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;
let cadastroPage: CadastroPage;

Given('que estou na página de cadastro', async () => {
  browser = await chromium.launch({ headless: true });

  page = await browser.newPage();
  cadastroPage = new CadastroPage(page);
  await cadastroPage.open();
});

When('eu preencho o formulário de cadastro', async () => {
  await cadastroPage.preencherFormulario(
    'QA',
    'Teste',
    'QA17502@gmail.com',
    'Teste@123'
  );
  await cadastroPage.enviar();
});

Then('o cadastro deve ser realizado corretamente', async () => {
  await page.waitForTimeout(3000);
  await browser.close();
});

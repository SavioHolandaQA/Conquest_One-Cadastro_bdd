import { Page } from '@playwright/test';

export class CadastroPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://talent.conquestone.com/common.security.wpregisteruser.aspx');
  }

  async preencherFormulario(nome: string, sobrenome: string, email: string, senha: string) {
    await this.page.fill('#vFIRSTNAME', nome);
    await this.page.fill('#vLASTNAME', sobrenome);
    await this.page.fill('#vEMAIL', email);
    await this.page.fill('#vPASSWORD', senha);
    await this.page.fill('#vPASSWORDCONF', senha);
  }

  async enviar() {
    await this.page.click('#BTNENTER');
  }
}

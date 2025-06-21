import { Page, expect } from '@playwright/test';

export class VisitPage {
  constructor(private page: Page) {}

  private get dateInput() {
    return this.page.getByLabel('Date');
  }
  private get descriptionInput() {
    return this.page.getByLabel('Description');
  }
  private get addVisitButton() {
    return this.page.getByRole('button', { name: 'Add Visit' });
  }
  private get visitTable() {
    return this.page.locator('table');
  }

  async addVisit({ date, description }: { date: string, description: string }) {
    await this.dateInput.fill(date);
    await this.descriptionInput.fill(description);
    await this.addVisitButton.click();
  }

  async expectVisit(description: string) {
    await expect(this.visitTable).toContainText(description);
  }
}

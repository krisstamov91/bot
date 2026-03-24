require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  // Стартираме браузъра
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    // Пример – отваряме сайта, тук сложи твоята логика
    await page.goto('https://example.com');

    // Можеш да вкараш своя код за бота тук
    console.log('Bot работи успешно!');

  } catch (err) {
    console.error('Грешка в бота:', err);
  } finally {
    await browser.close();
  }
})();

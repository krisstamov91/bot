const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    const links = [
        'https://profitshare.bg/l/3685506'
    ];

    for (let link of links) {
        console.log("Отварям:", link);

        await page.goto(link, { waitUntil: 'networkidle2' });

        console.log("➡️ Краен линк:", page.url());
    }

    await browser.close();
})();

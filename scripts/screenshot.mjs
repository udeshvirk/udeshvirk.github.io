import puppeteer from 'puppeteer';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const URL = process.env.SCREENSHOT_URL || 'http://localhost:4173';
const LABEL = process.env.SCREENSHOT_LABEL || 'baseline';
const OUT = resolve(`screenshots/${LABEL}`);

await mkdir(OUT, { recursive: true });

const viewports = [
  { name: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1 },
  { name: 'mobile',  width: 390,  height: 844, deviceScaleFactor: 2 },
];

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const v of viewports) {
  const page = await browser.newPage();
  await page.setViewport({
    width: v.width,
    height: v.height,
    deviceScaleFactor: v.deviceScaleFactor,
  });

  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
  // Let entrance animations settle
  await new Promise((r) => setTimeout(r, 1500));

  await page.screenshot({
    path: `${OUT}/${v.name}-viewport.png`,
    fullPage: false,
  });
  await page.screenshot({
    path: `${OUT}/${v.name}-fullpage.png`,
    fullPage: true,
  });

  // Section-level shots — useful for design crits.
  for (const id of ['about', 'experience', 'skills', 'projects', 'contact']) {
    const el = await page.$(`#${id}`);
    if (!el) continue;
    await el.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await el.screenshot({ path: `${OUT}/${v.name}-${id}.png` });
  }

  await page.close();
  console.log(`✓ ${v.name} captured`);
}

await browser.close();
console.log(`Done → ${OUT}`);

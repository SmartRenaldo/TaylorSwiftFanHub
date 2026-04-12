import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

// Auto-increment filename
let n = 1;
while (fs.existsSync(path.join(screenshotDir, `screenshot-${n}${label}.png`))) n++;
const outFile = path.join(screenshotDir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
// Dismiss preloader and force animations to end state
await page.evaluate(() => {
  const p = document.getElementById('preloader');
  if (p) { p.style.opacity = '0'; p.style.visibility = 'hidden'; }
  // Force animated elements to visible
  document.querySelectorAll('.hero-overline, .hero-sub, .hero-cta, .hero-scroll-cue').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    el.style.animation = 'none';
  });
  document.querySelectorAll('.hero-title .word').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    el.style.animation = 'none';
  });
  // Force reveal elements visible
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: outFile, fullPage: true });
await browser.close();
console.log(`Screenshot saved: ${outFile}`);

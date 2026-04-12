import puppeteer from 'puppeteer';
import fs from 'fs';

const dir = 'temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

await page.evaluate(() => {
  const p = document.getElementById('preloader');
  if (p) { p.style.opacity = '0'; p.style.visibility = 'hidden'; }
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  document.querySelectorAll('.hero-overline,.hero-sub,.hero-cta,.hero-scroll-cue').forEach(el => {
    el.style.opacity = '1'; el.style.transform = 'none'; el.style.animation = 'none';
  });
  document.querySelectorAll('.hero-title .word').forEach(el => {
    el.style.opacity = '1'; el.style.transform = 'none'; el.style.animation = 'none';
  });
});
await new Promise(r => setTimeout(r, 1200));

// Hero viewport
await page.screenshot({ path: `${dir}/r2-hero.png`, fullPage: false });
console.log('Hero saved');

// Sections
const sections = [
  { id: 'about', file: 'r2-about' },
  { id: 'era-fearless', file: 'r2-fearless' },
  { id: 'era-lover', file: 'r2-lover' },
  { id: 'era-ttpd', file: 'r2-ttpd' },
  { id: 'gallery', file: 'r2-gallery' },
];

for (const s of sections) {
  const el = await page.$('#' + s.id);
  if (el) {
    await el.screenshot({ path: `${dir}/${s.file}.png` });
    console.log(`Saved: ${s.file}`);
  }
}

// Footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${dir}/r2-footer.png`, fullPage: false });
console.log('Footer saved');

await browser.close();

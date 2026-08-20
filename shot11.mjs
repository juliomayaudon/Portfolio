import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1300, height: 1000 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
await p.goto('http://localhost:4331/projects/meduco'); await p.waitForTimeout(400);
await p.locator('.canvas').nth(1).scrollIntoViewIfNeeded(); await p.waitForTimeout(150);
await p.locator('.canvas').nth(1).screenshot({ path: 'c4_simulator2.png' });
await b.close(); console.log('ok');

#!/usr/bin/env node
/**
 * Ensures every `/downloads/...` path referenced in source exists under public/downloads/.
 * Missing files are fetched from https://www.optronic.ch/download (one-time mirror).
 *
 * Usage: node scripts/sync-downloads.mjs [--dry-run]
 */

import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DOWNLOADS = join(ROOT, 'public', 'downloads');
const REMOTE_BASE = 'https://www.optronic.ch/download';
const dryRun = process.argv.includes('--dry-run');

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (/\.(ts|tsx|mjs)$/.test(entry)) files.push(full);
  }
  return files;
}

function collectDownloadPaths() {
  const paths = new Set();
  const pattern = /['"`](\/downloads\/[^'"`]+)['"`]/g;

  for (const file of walk(join(ROOT, 'lib')).concat(walk(join(ROOT, 'views')), walk(join(ROOT, 'locales')))) {
    const text = readFileSync(file, 'utf8');
    let match;
    while ((match = pattern.exec(text)) !== null) {
      paths.add(match[1]);
    }
  }

  return [...paths].sort();
}

/** Map local public path to remote optronic.ch URL. */
function localToRemote(localPath) {
  const relative = localPath.replace(/^\/downloads/, '');
  const remotePath = relative.replace(/^\/de/, '');
  return `${REMOTE_BASE}${remotePath}`;
}

async function downloadFile(remoteUrl, destPath) {
  const res = await fetch(remoteUrl);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${remoteUrl}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, buf);
}

async function main() {
  const paths = collectDownloadPaths();
  let missing = 0;
  let synced = 0;
  let failed = 0;

  for (const localPath of paths) {
    const dest = join(PUBLIC_DOWNLOADS, localPath.replace(/^\/downloads\//, ''));
    if (existsSync(dest)) continue;

    missing++;
    const remoteUrl = localToRemote(localPath);
    console.log(`${dryRun ? '[dry-run] would fetch' : 'fetching'}: ${remoteUrl}`);

    if (dryRun) continue;

    try {
      await downloadFile(remoteUrl, dest);
      synced++;
      console.log(`  -> ${dest}`);
    } catch (err) {
      failed++;
      console.error(`  FAILED: ${err.message}`);
    }
  }

  console.log(
    `\nDone. ${paths.length} unique paths, ${missing} missing, ${synced} synced, ${failed} failed.`,
  );
  if (failed > 0) process.exit(1);
}

main();

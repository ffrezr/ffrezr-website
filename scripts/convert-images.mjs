#!/usr/bin/env node
/**
 * Generate AVIF and WebP siblings for every PNG/JPG/JPEG under a target
 * directory. Skips files where a fresher sibling already exists.
 *
 * Usage:
 *   node scripts/convert-images.mjs                       # all of public/img
 *   node scripts/convert-images.mjs public/img/entrepreneurship/omniduc
 *   node scripts/convert-images.mjs --force <path>        # rebuild siblings
 */

import { readdir, stat } from 'node:fs/promises'
import { existsSync, statSync } from 'node:fs'
import { extname, join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const args = process.argv.slice(2)
const force = args.includes('--force')
const targets = args.filter((a) => !a.startsWith('--'))
const targetDir = targets[0] ? join(ROOT, targets[0]) : join(ROOT, 'public', 'img')

const SUPPORTED = new Set(['.png', '.jpg', '.jpeg'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

function siblingPath(src, ext) {
  const dir = dirname(src)
  const stem = basename(src, extname(src))
  return join(dir, `${stem}.${ext}`)
}

function isStale(siblingFile, sourceFile) {
  if (!existsSync(siblingFile)) return true
  if (force) return true
  return statSync(siblingFile).mtimeMs < statSync(sourceFile).mtimeMs
}

async function convert(file) {
  const avif = siblingPath(file, 'avif')
  const webp = siblingPath(file, 'webp')

  const tasks = []
  if (isStale(avif, file)) {
    tasks.push(
      sharp(file)
        .avif({ quality: 55, effort: 6 })
        .toFile(avif)
        .then(() => `  + ${avif.replace(ROOT, '')}`),
    )
  }
  if (isStale(webp, file)) {
    tasks.push(
      sharp(file)
        .webp({ quality: 80, effort: 6 })
        .toFile(webp)
        .then(() => `  + ${webp.replace(ROOT, '')}`),
    )
  }

  if (tasks.length === 0) return [`  · ${file.replace(ROOT, '')} (up-to-date)`]
  return Promise.all(tasks)
}

async function main() {
  const targetStat = await stat(targetDir).catch(() => null)
  if (!targetStat || !targetStat.isDirectory()) {
    console.error(`Target directory not found: ${targetDir}`)
    process.exit(1)
  }

  const files = await walk(targetDir)
  console.log(`Scanning ${files.length} source images in ${targetDir.replace(ROOT, '')}`)

  let generated = 0
  let skipped = 0
  for (const file of files) {
    const results = await convert(file)
    for (const line of results) {
      if (line.startsWith('  +')) generated++
      else skipped++
      console.log(line)
    }
  }

  console.log(`\nDone. Generated ${generated} files, ${skipped} already up-to-date.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

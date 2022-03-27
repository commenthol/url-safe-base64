#!/usr/bin/env node

/**
 * `npm run` with multiple arguments
 */

// @ts-nocheck
import { spawn } from 'child_process'

function npmRun (arg) {
  return new Promise((resolve, reject) => {
    const sub = spawn('npm', ['run', arg], { stdio: 'inherit' })
    sub.on('error', err => { reject(err) })
    sub.on('exit', code => {
      code > 0
        ? reject(new Error('' + code))
        : resolve()
    })
  })
}

async function main (argv) {
  for (const arg of argv) {
    await npmRun(arg)
  }
}

main(process.argv.slice(2))
  .catch(() => {
    process.exit(1)
  })

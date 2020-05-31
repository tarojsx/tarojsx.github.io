const path = require('path')
const execa = require('execa')

const rsync = (from, to) => execa('rsync', ['-achuv', from, to], { stdio: 'inherit' })

async function main() {
    await rsync('./node_modules/@tarojsx/ui/docs', './docs/ui')
    await rsync('./node_modules/@tarojsx/ui/README.md', './docs/ui/README.md')
    await rsync('./node_modules/@tarojsx/hooks/docs', './docs/hooks')
    await rsync('./node_modules/@tarojsx/hooks/README.md', './docs/hooks/README.md')
}

main().then(
    () => process.exit(0),
    () => process.exit(1)
)

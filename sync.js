const path = require('path')
const execa = require('execa')

const rsync = (from, to) => execa('rsync', ['-achuv', from, to], { stdio: 'inherit' })

async function main() {
    await Promise.all(
        [
            ['./node_modules/@tarojsx/ui/docs', './docs/ui'],
            ['./node_modules/@tarojsx/ui/README.md', './docs/ui/README.md'],
            ['./node_modules/@tarojsx/hooks/docs', './docs/hooks'],
            ['./node_modules/@tarojsx/hooks/README.md', './docs/hooks/README.md'],
        ].map(p => rsync(...p))
    )
}

main().then(
    () => process.exit(0),
    () => process.exit(1)
)

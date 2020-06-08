const path = require('path')
const execa = require('execa')

const rsync = (from, to) => execa('rsync', ['-achuv', from, to], { stdio: 'inherit' })

async function main() {
    await Promise.all(
        [
            ['./node_modules/@tarojsx/history/README.md', './docs/history/README.md'],

            ['./node_modules/@tarojsx/hooks/docs', './docs/hooks'],
            ['./node_modules/@tarojsx/hooks/README.md', './docs/hooks/README.md'],

            ['./node_modules/@tarojsx/library/docs', './docs/library'],
            ['./node_modules/@tarojsx/library/README.md', './docs/library/README.md'],

            ['./node_modules/@tarojsx/polyfill/README.md', './docs/polyfill/README.md'],

            ['./node_modules/@tarojsx/ui/docs/components', './docs/ui/docs'],
            ['./node_modules/@tarojsx/ui/README.md', './docs/ui/README.md'],
        ].map(p => rsync(...p))
    )
}

main().then(
    () => process.exit(0),
    () => process.exit(1)
)

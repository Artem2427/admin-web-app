/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-var-requires */
// Autogenerate icons
// How to use? After added new svg icon need to do:
// cd apps/admin/scripts -> node generate-icons.cjs
// In SVG icon need to change fill -> fill="currentColor"

// eslint-disable-next-line no-undef
const fs = require('fs')
// eslint-disable-next-line no-undef
const path = require('path')

const indexDir = '../src/assets'
const iconsDir = `${indexDir}/svg`
const files = fs.readdirSync(iconsDir)
const icons = files.filter((file) => path.extname(file) === '.svg')

const makeNormal = (str) => {
  if (str.split('--').length >= 2) {
    const nameArray = str.split('--')
    return makeNormal(makeCapital(nameArray))
  }
  if (str.split('-').length >= 2) {
    const nameArray = str.split('-')
    return makeNormal(makeCapital(nameArray))
  }

  if (str.split('&').length >= 2) {
    const nameArray = str.split('&')
    return makeNormal(makeCapital(nameArray))
  }

  return makeCapital([str])
}

const makeCapital = (array) => {
  const newArray = array
    .filter((item) => !!item)
    .map((item) => item.replace(/^\s+/g, ''))
  return newArray.map((item) => item[0].toUpperCase() + item.slice(1)).join('')
}

const generateImports = icons
  .map((icon) => {
    const iconName = path.basename(icon, '.svg')
    return `import ${makeNormal(iconName)} from './svg/${icon}?react';`
  })
  .join('\n')

const generateIconObject = icons
  .map((icon) => {
    const iconName = path.basename(icon, '.svg')
    return `${makeNormal(iconName)}: ${makeNormal(iconName)},`
  })
  .join('\n')

const content = `
${generateImports}

export const Icons = {
${generateIconObject}
};
`

fs.writeFileSync(path.join(indexDir, 'index.tsx'), content)

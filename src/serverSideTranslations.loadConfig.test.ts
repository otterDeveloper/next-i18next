import path from 'path'
import { loadUserConfig } from './serverSideTranslations'

const jsPath = path.resolve('examples/configs/js/next-i18next.config.js')

describe('serverSideTranslations: loadUserConfig', () => {
  it('loads from .js', async () => {
    const expectedUserConfig = await import(jsPath)
    const config = await loadUserConfig('examples/configs/js/next-i18next.config')
    expect(config).toStrictEqual(expectedUserConfig)
  })
  it('loads from .cjs', async () => {
    const expectedUserConfig = await import(jsPath)
    const config = await loadUserConfig('examples/configs/cjs/next-i18next.config')
    expect(config).toStrictEqual(expectedUserConfig)
  })

  //The jsm one is pending because jest doesn't like importing jsm files
})

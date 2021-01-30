import { Namespace } from '../constants'

export type I18nNamespace = Record<string, string>

export type I18nLocale = Record<Namespace, I18nNamespace>

export type I18nResources = Record<string, I18nLocale>

export const getI18nResources = async (
  locale: string,
  requestedNamespaces: Namespace[]
): Promise<I18nResources> => {
  const bundles = await Promise.all<[Namespace, I18nNamespace]>(
    requestedNamespaces.map(async (namespace) => {
      const json = await import(`../../../locales/${locale}/${namespace}.json`)
      return [namespace, json.default]
    })
  )
  return { [locale]: Object.fromEntries(bundles) }
}

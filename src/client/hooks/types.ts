export type TranslateFunction = (key: string) => string

export type UseTranslationReturn = {
  locale: string
  t: TranslateFunction
}

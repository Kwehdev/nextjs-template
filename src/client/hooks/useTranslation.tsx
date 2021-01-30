import { useCallback, useContext, useMemo } from 'react'
import { Fallback_Locale, Namespace } from '../constants'
import { I18NContext } from '../context/I18NContext'
import { TranslateFunction, UseTranslationReturn } from './types'

export default function useTranslation(ns: Namespace): UseTranslationReturn {
  const ctx = useContext(I18NContext)

  const t: TranslateFunction = useCallback(
    (key: string) => {
      if (!ctx?.locale || !ctx.resources) {
        console.warn(`Missing locale or resources.`)
        return ''
      }

      const { locale, resources } = ctx

      return (
        resources[locale][ns][key] || resources[Fallback_Locale][ns][key] || ''
      )
    },
    [ctx, ns]
  )

  if (!ctx) {
    throw new Error(
      'You cannot use useTranslation outside of a I18NContextProvider'
    )
  }

  return useMemo(
    () => ({
      locale: ctx.locale,
      t,
    }),
    [ctx.locale, t]
  )
}

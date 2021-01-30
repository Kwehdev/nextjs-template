import { createContext, useEffect } from 'react'
import { I18NContextDefinition, I18NContextProviderProps } from './types'

export const I18NContext = createContext<I18NContextDefinition | null>(null)

export const I18NContextProvider = ({
  children,
  locale,
  resources,
}: I18NContextProviderProps) => {
  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=15552000; path=/`
  })

  const value = {
    locale,
    resources,
  }

  return <I18NContext.Provider value={value}>{children}</I18NContext.Provider>
}

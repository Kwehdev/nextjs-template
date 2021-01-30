import { ReactNode } from 'react'
import { I18nResources } from '../../utils/i18n'

export type I18NContextProviderProps = {
  locale: string
  resources: I18nResources
  children: ReactNode
}

export type I18NContextDefinition = Omit<I18NContextProviderProps, 'children'>

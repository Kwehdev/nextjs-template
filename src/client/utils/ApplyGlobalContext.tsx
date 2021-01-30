import { ReactNode } from 'react'
import { I18NContextProvider } from '../context/I18NContext'
import { I18nResources } from './i18n'

type ApplyContextProps = {
  i18n: {
    locale: string
    resources: I18nResources
  }
  children: ReactNode
}

export default function ApplyGlobalContext({
  i18n,
  children,
}: ApplyContextProps): JSX.Element {
  return <I18NContextProvider {...i18n}>{children}</I18NContextProvider>
}

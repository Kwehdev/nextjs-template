import { ReactNode } from 'react'
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
  console.log(i18n)
  return <>{children}</>
}

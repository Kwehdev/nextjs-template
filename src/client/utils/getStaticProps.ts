import { GetStaticPropsContext } from 'next'
import { Fallback_Locale, Namespace } from '../constants'
import { getI18nResources } from './i18n'

type CreateGetStaticPropsOpts = {
  i18n: {
    namespaces: Namespace[]
  }
}

export const createGetStaticProps = (opts: CreateGetStaticPropsOpts) => (
  ctx: GetStaticPropsContext
) => getStaticProps(ctx, opts)

const getStaticProps = async (
  ctx: GetStaticPropsContext,
  opts: CreateGetStaticPropsOpts
) => {
  const { locale = Fallback_Locale } = ctx
  const { namespaces } = opts.i18n
  const resources = await getI18nResources(locale, namespaces)

  const i18n = {
    locale,
    resources,
  }

  return {
    props: {
      i18n,
    },
  }
}

import { Namespace } from '../client/constants'
import useTranslation from '../client/hooks/useTranslation'
import { createGetStaticProps } from '../client/utils/getStaticProps'

export default function Home(): JSX.Element {
  const { t } = useTranslation('homepage')
  return (
    <div>
      <p>{t('title')}</p>
    </div>
  )
}

const namespaces: Namespace[] = ['homepage']

export const getStaticProps = createGetStaticProps({
  i18n: {
    namespaces,
  },
})

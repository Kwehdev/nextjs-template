import { Namespace } from '../client/constants'
import { createGetStaticProps } from '../client/utils/getStaticProps'

export default function Home(): JSX.Element {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const namespaces: Namespace[] = ['homepage']

export const getStaticProps = createGetStaticProps({
  i18n: {
    namespaces,
  },
})

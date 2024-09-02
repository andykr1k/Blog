import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'

export default function GithubPersonalCard() {
  const { data } = useSWR('/api/github-stats', fetcher)

  const repos = new Number(data?.repos)
  const gists = new Number(data?.gists)
  const link1 = 'https://github.com/andykr1k?tab=repositories'
  const link2 = 'https://gist.github.com/andykr1k'

  return (
    <div className="my-2">
      <MetricCard header="Github Repos" link={link1} metric={repos} isCurrency={false} />
    </div>
  )
}

import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden grid place-items-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:akrik001@ucr.edu" title="gmail" icon="andykr1k" />
            <ContactLink href="https://github.com/andykr1k" title="github" icon="andykr1k" />
            <ContactLink href="https://twitter.com/krik_exe" title="twitter" icon="andykr1k" />
            <ContactLink href="https://www.linkedin.com/in/andrew-krikorian/" title="linkedin" icon="andykr1k" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact

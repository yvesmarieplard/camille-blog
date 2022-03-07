import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a French and Cameroonian MA candidate at <b>Stanford University</b>, studying Education Policies. 
        I am currently conducting research work on International Organizations and governments' education policies in sub-Saharan Africa. 
          <br/><br/>
        More generally, I developed a strong interest in education innovation, quality, 
        and access I'd intend to relate to my previous background in business and strategy consulting in African countries, 
        France, China, and the US, but also in International Comparative Education, especially in developing countries.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Resume</h2>
        <a href="resume/Camille_Fabo_Resume_2022.pdf" class="button alt" download>Download my resume</a>
        <h2 className={utilStyles.headingLg}>Works</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}



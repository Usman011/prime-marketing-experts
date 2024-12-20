import Contact from '@/app/contact/page'
import BlogList from '../BlogList'
import InfoSection from './GetstartedHome/page'
import HomeBanner from './HomeBanner/HomeBanner'
import OurServices from './OurServices'
import { WhoWeServeSection } from '../WhoWeServe'
import CaseStudiesList from '../CaseStudiesList'
import Insight from '../Insights'
import AboutUs from './AboutUs/page'
import { OurSolutionSection } from '../OurSolutionSection'

export const Home = () => {
	return (
		<>
			<HomeBanner />
			<OurSolutionSection />
			<AboutUs />
			<OurServices />
			<WhoWeServeSection />
			<Insight />
			<CaseStudiesList />
			<BlogList />
			<InfoSection />
			<Contact />
		</>
	)
}

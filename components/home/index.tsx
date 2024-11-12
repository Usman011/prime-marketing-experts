import Contact from '@/app/contact/page'
import BlogList from '../BlogList'
import InfoSection from './GetstartedHome/page'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServicesPage from './ServicesHme/page'
import About from './AboutUs/page'
import Insight from '../Insights'
import { WhoWeServeSection } from '../WhoWeServe'
import CaseStudiesList from '../CaseStudiesList'
export const Home = () => {
	return (
		<>
			<HomeBanner />
			<HomeServicesPage />
			<WhoWeServeSection />
			<Insight />
			<About />
			<BlogList />
			<InfoSection />
			<CaseStudiesList />
			<Contact />
		</>
	)
}

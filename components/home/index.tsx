import Contact from '@/app/contact/page'
import BlogList from '../BlogList'
import InfoSection from './GetstartedHome/page'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServicesPage from './ServicesHme/page'
import About from './AboutUs/page'
import HomeServices from './ServicesHome/HomeServices'
import Insight from '../Insights'
import { WhoWeServeSection } from '../WhoWeServe'
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
			<Contact />
			{/* <HomeServices /> */}
		</>
	)
}

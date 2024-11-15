import Contact from '@/app/contact/page'
import BlogList from '../BlogList'
import InfoSection from './GetstartedHome/page'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServicesPage from './ServicesHme/page'
import { WhoWeServeSection } from '../WhoWeServe'
import CaseStudiesList from '../CaseStudiesList'
import { CarouselSection } from './Carousel/page'
import Insight from '../Insights'
import AboutUs from './AboutUs/page'
export const Home = () => {
	return (
		<>
			<HomeBanner />
			<WhoWeServeSection />
			<AboutUs/>
			<CarouselSection/>
			<HomeServicesPage />
			<Insight />
			<BlogList />
			<CaseStudiesList />
			<InfoSection />
			<Contact />
		</>
	)
}


import ContactPage from '@/app/contact/page'
import BlogList from '../BlogList'
import InfoSection from './GetstartedHome/page'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServicesPage from './ServicesHme/page'
import About from './AboutUs/page'
// import HomeServices from './ServicesHome/HomeServices'
export const Home = () => {
	return (
		<> 
		 <HomeBanner/> 
		<InfoSection/>	
		<HomeServicesPage/>
		<About/>
		<BlogList/>	
	<div className="h-auto mx-10 flex flex-col md:justify-center md:items-center gap-4 mt-10 justify-center items-center">
	
	 {/* <HomeServices/>  */}
	
	<ContactPage/>
</div>
</>

	)
}

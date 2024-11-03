
import ContactPage from '@/app/contact/page'
import BlogList from '../BlogList'
import InfoSection from './GetstartedHome/page'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServicesPage from './ServicesHme/page'
// import HomeServices from './ServicesHome/HomeServices'
export const Home = () => {
	return (
		<> 
		 <HomeBanner/> 
		<InfoSection/>		
	<div className="h-auto mx-10 flex flex-col md:justify-center md:items-center gap-32 mt-20 justify-center items-center">
	<HomeServicesPage/>
	 {/* <HomeServices/>  */}
	<BlogList/>
	<ContactPage/>
</div>
</>

	)
}

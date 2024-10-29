
import BlogList from '../BlogList'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServices from './ServicesHome/HomeServices'
export const Home = () => {
	return (
		<div className="h-auto mx-10 flex flex-col md:justify-center md:items-center gap-32 mt-20 justify-center items-center">
    <HomeBanner/>
	<HomeServices/>
	<BlogList/>
</div>
	)
}

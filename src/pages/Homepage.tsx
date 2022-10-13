import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Homepage components/Contact'
import Popular from '../components/Homepage components/Popular'
import BestSeller from '../components/Homepage components/BestSeller'
import Offer from '../components/Homepage components/Offer'
import HeroImg from '../components/Homepage components/HeroImg'
import Category from '../components/Homepage components/Category'

function Homepage() {
    return ( 
        <div className="wrapper homepage">
            <Header></Header>
            <main>
                <HeroImg></HeroImg>
                <Category></Category>
                <Offer></Offer>
            </main>
            <BestSeller></BestSeller>
            <Popular></Popular>
            <Contact></Contact>
            <Footer></Footer>
        </div>
     );
}

export default Homepage;
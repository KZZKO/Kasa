import { Header } from '../../Components/header/header.jsx';
import { Banner } from '../../Components/banner/banner.jsx';
import { Cards } from '../../Components/Cards/cards.jsx';
import { Footer } from '../../Components/footer/footer.jsx';
import Appartements from '../../Data/Appartements.json';

export const Index = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Cards data={Appartements} />
            <Footer />
        </div>
    );
};
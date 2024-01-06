import { Header } from '../../Components/header/header.jsx'
import { Slider } from '../../Components/Carrousel/Carrousel.jsx';
import { Title } from '../../Components/Title/title.jsx';
import { Location } from '../../Components/Location/location.jsx';
import { Tags } from '../../Components/Tag/tag.jsx';
import { Hosts } from '../../Components/Host/host.jsx';
import { Rating } from '../../Components/Rating/rating.jsx';
import { Collapse } from '../../Components/Collapse/collapse.jsx';
import { Footer } from '../../Components/footer/footer.jsx'
import { useParams, Navigate } from 'react-router-dom';
import Appartements from '../../Data/Appartements.json';


export const Appartement = () => {

    let { id } = useParams();

    const Appart = Appartements.find((item) => item.id == id)
    if (Appart == null) { return <Navigate to="/Error" /> }

    return (
        <div>
            <Header />
            <Slider data={Appart.pictures} />
            <div className='bloc-appart'>
                <div className='first-bloc-appart'>
                    <Title data={Appart.title} />
                    <Location data={Appart.location} />
                    <Tags data={Appart.tags} />
                </div>
                <div className='scnd-bloc-appart'>
                    <Hosts name={Appart.host.name} picture={Appart.host.picture} />
                    <Rating rating={parseInt(Appart.rating)} />
                </div>
            </div>
            <div>
                <Collapse data={Appart.equipments} />
            </div>
            <Footer />
        </div>
    )
}
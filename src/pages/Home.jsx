import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from "react-icons/fa";


//home pour le moment après il faudra changer
export default function Home() {
    return (
        <>
            <section className="heading">
                <h1> Liste des mes activités </h1>
                {/*<p> Choisissez une option</p>*/}
            </section>
            <Link to='/new-activity' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Créer une nouvelle activité
            </Link>
            <Link to='/activities' className='btn btn-block'>
                <FaTicketAlt/> Voir mes activités
            </Link>
        </>
    )
}
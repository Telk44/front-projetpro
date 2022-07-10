import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from "react-icons/fa";

export default function Account() {
    return (
        <>
            <section className="heading">
                <h1> Mon compte </h1>
                {/*<p> Choisissez une option</p>*/}
            </section>
            <Link to='/activities' className='btn btn-reverse btn-block'>
                <FaQuestionCircle/> Créer une nouvelle activité
            </Link>
        </>
    )
}
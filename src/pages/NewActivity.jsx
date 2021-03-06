import {useState, useEffect}from 'react'
import{useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {createActivity, reset} from "../features/activities/activitySlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

export default function NewActivity() {

    const {user} = useSelector((state) => state.auth)

    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.activities)

    const [userName] = useState(user.userName)
    console.log(userName)
    // const [userId] = useState(user.userId)
    // console.log(userId)

    // const [email] = useState(user.email)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [price, setPrice] = useState('')
    const [phone, setPhone] = useState('')
    const [bookingEmail, setBookingEmail] = useState('')
    const [category, setCategory] = useState('')
    const [ages, setAges] = useState('0-5 ans')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            dispatch(reset())
            navigate('/activities')
        }
        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message] )

    const onSubmit = (e) => {
        e.preventDefault()
        const activityData ={
            category,
            ages,
            title,
            description,
            startDate,
            endDate,
            price,
            phone,
            bookingEmail
        }
        console.log(activityData)
        dispatch(createActivity({activityData}))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <BackButton url='/activities' />
            <section className="heading">
                <h1>Cr??er une nouvelle activit??</h1>
                <p>Merci de remplir le formulaire ci-dessous</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor='name'>Organisateur</label>
                    <input type='text' className='form-control' value={userName} disabled/>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Cat??gorie de l'activit??</label>
                        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">choisissez une cat??gorie</option>
                            <option value="sport">Sport</option>
                            <option value="culture">Culture</option>
                            <option value="nature">Nature</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ages">Public concern??</label>
                        <select name="ages" id="age" value={ages} onChange={(e) => setAges(e.target.value)}>
                            <option value="">choisissez une tranche d'??ge</option>
                            <option value="0-5">0-5 ans</option>
                            <option value="6-8">6-8 ans</option>
                            <option value="9-12">9-12 ans</option>
                            <option value="12-18">12-18 ans</option>
                            <option value="adulte">Adulte</option>
                            <option value="tout-public">Tout public</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='title'>Titre de l'activit??</label>
                        <input type="Text" className="form-control" id="title" placeholder="Titre" name="title" value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>Description de l'activit??</label>
                        <textarea name="description" className="form-control" id="description" placeholder="Description"  value={description}
                                  onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor='startDate'>Date de d??but de l'activit??</label>
                        <input type="date" className="form-control" id="startDate" placeholder="Date" name="startDate" value={startDate}
                               onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='endDate'>Date de fin de l'activit??</label>
                        <input type="date" className="form-control" id="startDate" placeholder="Date" name="endDate" value={startDate}
                               onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='price'>Tarifs de l'activit??</label>
                        <input type="Text" className="form-control" id="price" placeholder="tarif" name="price" value={price}
                               onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='phone'>T??l??phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Tel" name="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" value={phone}
                               onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='bookingEmail'>Email de contact</label>
                        <input type="email" className="form-control" id="bookingEmail" placeholder="mail" name="bookingEmail" value={bookingEmail}
                               onChange={(e) => setBookingEmail(e.target.value)} />
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor='webSite'>Site internet de l'organisateur</label>*/}
                    {/*    <input type="Text" className="form-control" id="webSite" placeholder="webSite" name="price" value={webSite}*/}
                    {/*           onChange={(e) => setWebSite(e.target.value)} />*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <button className="btn btn-block">Soumettre</button>
                    </div>

                </form>
            </section>

        </>
    )
}



// const createActivity = () => {
//     const formData = {
//         title: "Test depuis le front",
//         image:"",
//         ages: [1,2],
//         userId: "1",
//         categoryId: "1"
//     }
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(formData)
//     };
//     const url = 'http://localhost:5000/activity'
//
//     fetch(url, requestOptions)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//         })
//         .catch(error => console.log(error))
// }

// {/*<form action="/profile" method="post" encType="multipart/form-data">*/}
// {/*    <input type="file" name="image"/>*/}
// {/*</form>*/}
// <button onClick={createActivity}>ajouter une activit??</button>
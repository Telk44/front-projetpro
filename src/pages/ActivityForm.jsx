
export default function ActivityForm() {

    const createActivity = () => {
        const formData = {
            title: "Test depuis le front",
            ages: [1,2],
            userId: "1"
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        };
        const url = 'http://localhost:5000/activity'

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <button onClick={createActivity}>ajouter une activité</button>
        </>
    )
}
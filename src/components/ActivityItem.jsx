import {Link} from 'react-router-dom'

function ActivityItem({activity}) {
    return (
        <div className='activity'>
            <div>{new Date(activity.createdAt).toLocaleString('fr-FR')}</div>
            <div>{activity.title}</div>
            {/*<div className={`status status-${activity.status}`}>*/}
            {/*    {activity.status}*/}
            {/*</div>*/}
            <Link to={`/activity/${activity.id}`} className='btn btn-reverse btn-sm'>Voir</Link>
        </div>
    )
}

export default ActivityItem
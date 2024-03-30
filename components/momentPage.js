import * as moment from 'moment'

const MomentPage = () => {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    return <div>Moment.js Page - {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
}

export default MomentPage;
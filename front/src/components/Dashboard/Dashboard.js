import PieDiagram from './PieDiagram/PieDiagram';
import BarDiagram from './BarDiagram/BarDiagram';
import Table from './Table/Table'
import {Link} from 'react-router-dom'

import './Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="table">
                <Table/>
            </div>
            <div className="diagrams">
                <PieDiagram/>
                <BarDiagram/>
            </div>
            <Link to='/update'>Обновить данные</Link>
        </div>
    );
}

export default Dashboard;

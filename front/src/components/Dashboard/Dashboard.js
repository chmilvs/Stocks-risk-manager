import PieDiagram from './PieDiagram/PieDiagram';
import BarDiagram from './BarDiagram/BarDiagram';
import Table from './Table/Table'
import './Dashboard.css'
import { useSelector } from 'react-redux';

function Dashboard() {
  const deposit = useSelector(state => state.auth.currentUser.deposit)
    return (
        <div className="dashboard">
            <div className="table">
            Мой <i class="fa fa-briefcase">: {deposit} USD</i>
                <Table/>
            </div>
            <div className="diagrams">
                <PieDiagram/>
                <BarDiagram/>
            </div>
        </div>
    );
}

export default Dashboard;

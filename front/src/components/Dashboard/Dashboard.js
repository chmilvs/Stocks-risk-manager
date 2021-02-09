import PieDiagram from './PieDiagram/PieDiagram';
import BarDiagram from './BarDiagram/BarDiagram';
import Table from './Table/Table'
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
        </div>
    );
}

export default Dashboard;

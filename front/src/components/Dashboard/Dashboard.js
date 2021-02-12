import {useState, useEffect} from 'react'
import PieDiagram from './PieDiagram/PieDiagram';
import BarDiagram from './BarDiagram/BarDiagram';
import Table from './Table/Table'
import './Dashboard.css'
import {useSelector} from 'react-redux';
import {API_KEY, GET_COMPANY_NAMES} from "../../redux/utils/utils";

function Dashboard() {
    const deposit = useSelector(state => state.auth.currentUser.deposit)
    const stocks = useSelector(state => state.auth.currentUser.stocks)

    const [loading, setLoading] = useState([])
    const expired = 'Apikey expired'
    useEffect(() => {
        const textArr = stocks
            .map((el) => {
                return el.tickerName;
            })
            .join();
        if (stocks.length > 0) {
            fetch(`${GET_COMPANY_NAMES}${textArr}${API_KEY}`)
                .then((res) => res.json())
                .then((stockss) => {
                    if (!stockss["Error Message"]) {
                        stockss.map((el) => {
                            stocks.forEach(defaultStock => {
                                if (defaultStock.tickerName == el.symbol) {
                                    defaultStock.companyName = el.name
                                    defaultStock.actualPrice = el.price
                                }
                            })
                        })
                    } else {
                        stocks.forEach(el => {
                            el.companyName = expired
                            el.actualPrice = expired
                        })
                    }
                    setLoading(stocks);
                });
        }
    }, [stocks, loading]);

    return (
        <div>
            {loading.length > 0 ? <div className="dashboard">
                <div className="table">
                    <Table loading={loading} expired={expired}/>
                </div>
                <div className="diagrams">
                    <PieDiagram loading={loading}/>
                    <BarDiagram loading={loading}/>
                </div>
                </div> : <div style={{
                marginLeft: "auto",
                marginRight: "auto",
                width:"230px",
                marginTop: "300px",
                marginBottom:"200px"
               }}>Ваш портфель пока пуст</div>}
        </div>
    );
}

export default Dashboard;

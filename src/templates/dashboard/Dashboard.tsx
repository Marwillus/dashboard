import Menu from "../../components/menu/Menu"
import Widget from "../../components/widget/Widget"
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className="dashboard">
            <Menu></Menu>

            <div>
                <div className="dashboard__header">
                    <h2>Welcome back, Friend</h2>
                </div>
                <div className="dashboard__grid">
                    <div className="dashboard__grid__widget1">
                        <Widget></Widget>
                    </div>
                    <div className="dashboard__grid__widget2">
                        <Widget></Widget>
                    </div>
                    <div className="dashboard__grid__widget3">
                        <Widget></Widget>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

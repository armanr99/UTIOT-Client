import React from 'react';
import Navbar from '../Navbar';
import Logo from '../../images/logo.png';
import TeamImg from '../../images/team.png';
import { withRouter } from 'react-router-dom';


import './style.css';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groupName: '', 
            thingspeak: '', 
            members: []
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        let self = this;
        let groupName = localStorage.getItem('groupName');

        fetch(`/api/group/${groupName}`)
        .then(function(response) {
            return response.json();
        }).then(function(responseJson) {
            let data = responseJson.data;
            self.setState({
                groupName: groupName,
                thingspeak: data.group.thingspeak,
                members: data.members
            })
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    handleLogout (event) {
        event.preventDefault();
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        let members = this.state.members;
        let membersP = members.map((member, i) => (
            <p key={i}>
            <p>{member}</p>
            </p>
        ));
        let thingspeak = this.state.thingspeak;
        return(
            <div className="dashboard">
                <Navbar />
                <div className="left_dashboard">
                    <div className="dash_logo_holder">
                        <a href="/"><img src={Logo} alt="logo"/></a>
                    </div>
                    <div className="dash_left_info">
                        <img src={TeamImg} alt="team"/>
                        <p className="groupName"><b>{this.state.groupName}</b></p>
                        <p><b>Members:</b></p>
                        <div className="members">
                            {membersP}
                        </div>
                    </div>
                    <div className = "logout left_logout">
                        <a href="/logout" onClick={e=>this.handleLogout(e)} >logout</a>
                    </div>
                </div>
                
                <div className="right_dashboard">
                    <div className="right_info">
                        <div className="right_group_info">
                            <p>Welcome to UT IOT project!</p>
                            <p>UT IOT is an open platform to analyze your IOT projects</p>
                            <p>UT IOT is brought to you by 3 computer engineering students of University of Tehran:</p>
                            <p>Arman Rostami, Parsa Ghorbani, Hossein Entezari</p>
                        </div>
                    </div>
                    <div className="charts_container">
                        <div className="charts" >
                            <iframe title="chart1" width="450" height="260" src={`https://thingspeak.com/channels/${thingspeak}/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=spline`}></iframe>
                            <iframe title="chart2" width="450" height="260" src={`https://thingspeak.com/channels/${thingspeak}/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=spline`}></iframe>
                            <iframe title="chart3" width="450" height="260" src={`https://thingspeak.com/channels/${thingspeak}/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=spline`}></iframe>
                            <iframe title="chart4" width="450" height="260" src={`https://thingspeak.com/channels/${thingspeak}/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line`}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);
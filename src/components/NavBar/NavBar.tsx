import * as React from 'react'
import User from './User/User'
import BtnUser from './BtnUser/BtnUser'
import TrendBtn from './TrendBtn/TrendBtn';
import FollowersBtn from './FollowersBtn/FollowersBtn'
import MsgBtn from './MsgBtn/MsgBtn'
import SearchBtn from './SearchBtn/SearchBtn'
import SettingsBtn from './SettingsBtn/SettingsBtn'
import ArrBtn from './ArrBtn/ArrBtn'

require('./NavBar.scss')

class NavBar extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="ContainerBtn">

                <div className="UserProf">
                    <User/>
                    <BtnUser/>
                </div>

                <div className="NavBtn">
                    <TrendBtn/>
                    <FollowersBtn/>
                    <MsgBtn/>
                    <SearchBtn/>
                    <SettingsBtn/>
                </div>

                <div className="BackBtn">
                    <ArrBtn/>
                </div>

            </div>
        )
    }
}

export default NavBar
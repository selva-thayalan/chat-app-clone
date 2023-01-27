import React from "react";

import ChatAvatar from "./Common/ChatAvatar";

class MainHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="header-comp">
                <ChatAvatar name={this.props.name} isCompact={true}/>
            </div>
        )
    }
}

export default MainHeader;
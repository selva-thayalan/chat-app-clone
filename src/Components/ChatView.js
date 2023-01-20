import React from "react";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatControl from "./ChatControl";

class ChatView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="chat-view-cont">
                <ChatHeader
                    name={this.props.model.name}
                    dp={this.props.model.profilePicture}
                    //lastMessage={this.props.model.messageQueue[this.props.model.messageQueue.length - 1]}
                />
                <ChatBody/>
                <ChatControl/>
            </div>
        )
    }
}

export default ChatView
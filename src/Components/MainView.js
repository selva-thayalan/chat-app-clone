import React from 'react';
import ChatList from './ChatList';

class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state = { chatList: [{ name: "Thaya", messageQueue: [{ content: "Hai", timeStamp: "12:00 AM" }] }, { name: "Mohan", messageQueue: [{ content: "Hai, How are you?", timeStamp: "12:10 AM" }]}], activeChat: {}};
    }

    render(){
        return(
            <div>
                <ChatList 
                    list={this.state.chatList}/>
            </div>
        )
    }
}

export default MainView;
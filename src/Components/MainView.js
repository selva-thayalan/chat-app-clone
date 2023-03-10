import React from 'react';
import ChatList from './ChatList';
import ChatView from './ChatView';
import MainHeader from './MainHeader';

class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeChat: null, chatList: [{ name: "Thaya", messageQueue: [{ content: "Hai", timeStamp: "12:00 AM" }] }, { name: "Mohan", messageQueue: [{ content: "Hai, How are you?", timeStamp: "12:10 AM" }]},
            { name: "Thaya", messageQueue: [{ content: "Hai", timeStamp: "12:00 AM" }] }, { name: "Mohan", messageQueue: [{ content: "Hai, How are you?", timeStamp: "12:10 AM" }] },
            { name: "Thaya", messageQueue: [{ content: "Hai", timeStamp: "12:00 AM" }] }, { name: "Mohan", messageQueue: [{ content: "Hai, How are you?", timeStamp: "12:10 AM" }] },
            { name: "Thaya", messageQueue: [{ content: "Hai", timeStamp: "12:00 AM" }] }, { name: "Mohan", messageQueue: [{ content: "Hai, How are you?", timeStamp: "12:10 AM" }] },
            { name: "Thaya", messageQueue: [{ content: "Hai", timeStamp: "12:00 AM" }] }, { name: "Mohan", messageQueue: [{ content: "Hai, How are you?", timeStamp: "12:10 AM" }] }]};
        this.onChatCardClick = this.onChatCardClick.bind(this);
    }

    accountName = "Selva";//The account name of the chat app.

    componentDidMount(){
        this.setState((prevState, props) => ({ activeChat: prevState.chatList[0] }));
    }

    onChatCardClick(index){
        this.setState((prevState, props) => ({ activeChat: prevState.chatList[index] }));
    }

    render(){
        return(
            <div className="main-area full-size disp_flex">
                <div className="lhs-main-cont full-size">
                    <MainHeader 
                        name={this.accountName}/>
                    <ChatList
                        list={this.state.chatList}
                        onChatCardClick={this.onChatCardClick} />
                </div>
                {this.state.activeChat && <ChatView
                    model={this.state.activeChat} />}
                
            </div>
        )
    }
}

export default MainView;
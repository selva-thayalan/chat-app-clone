const ChatCard = function(props){
    return(
        <div className="chat-card" onClick={props.onClick}>
            <p className="chat-card-name">{props.name}</p>
            <p className="lat-message-text">{props.lastMessage.content}</p>
            <p className="last-message-time">{props.lastMessage.timeStamp}</p>
        </div>
    )
}

export default ChatCard;
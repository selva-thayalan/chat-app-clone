import ChatAvatar from "./Common/ChatAvatar";

const ChatCard = function(props){
    return(
        <div className="chat-card" onClick={props.onChatCardClick}>
            <ChatAvatar name={props.name} />
            <div className="card-details-cont col_align p_5 m_r_5">
                <div className="card-sub-details">
                    <p className="chat-card-name main-text">{props.name}</p>
                    <p className="last-message-time sub-text s_f_size">{props.lastMessage.timeStamp}</p>
                </div>
                <p className="lat-message-text sub-text">{props.lastMessage.content}</p>
            </div>
        </div>
    )
}

export default ChatCard;
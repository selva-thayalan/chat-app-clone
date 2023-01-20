import ChatAvatar from "./Common/ChatAvatar";

const ChatHeader = function(props) {
    return(
        <div className="chat-header row_align">
            <ChatAvatar name={props.name} isCompact={true}/>
            <div className="chat-details-cont col_align p_5 m_r_5">
                <p className="chat-header-name main-text">{props.name}</p>
                {/*<p className="lat-message-text sub-text">{props.lastMessage.content}</p>*/}
            </div>
        </div>
    )
}

export default ChatHeader;
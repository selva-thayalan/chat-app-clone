import ChatCard from "./ChatCard";

const ChatList = function (props){
    return(
        <div className="chat-list">
            {props.list.map(({ name, profilePicture, messageQueue }, index) => 
                <ChatCard
                    name={name} 
                    dp={profilePicture} 
                    lastMessage={messageQueue[messageQueue.length-1]}
                    onChatCardClick={() => props.onChatCardClick(index)}/>
            )}
        </div>
    )
}

export default ChatList;
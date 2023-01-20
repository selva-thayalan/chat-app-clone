const ChatAvatar = function(props){
    function firstLetter(text){
        return text[0];
    }

    return(
        <div className={`chat-avatar-cont p_5 size_${props.isCompact ? 60 : 65}`}>
            <div className="chat-avatar full-size pos_rel">
                <p className="abs_cntr l_h_1">{firstLetter(props.name)}</p>
            </div>
        </div>
    )
}

export default ChatAvatar;
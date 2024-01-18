import React, {useState} from "react";
import PropTypes from 'prop-types';

function Input({ addPost }) {
    const [input, setInput] = useState('');

    function onChang(event) {
        setInput(event.target.value)
    }
    
    function onKeyDown(event) {
        const title = event.target.value;
        if (event.key == 'Enter' && title) {
            addPost(title);
            setInput('');
        }

    }

    return (

        <div className="Input">
            <div className="Input__header"> Create Post</div>
            <input
                className="Input__field"
                type="text"
                value={input}
                onChange={onChang}
                onKeyDown={onKeyDown}
                
            />
            
        </div>
            
    );

}

Input.popTypes = {
    addPost: PropTypes.func.isRequired
};

export default Input;
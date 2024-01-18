import React from "react";
import PropTypes from 'prop-types';


function Post({ id, title, deletePost }) {


    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/` + Math.floor(Math.random() * id * 2) + `.png`;





    return (

        <div className="Post">
            <button className="Post__delete" onClick={() => deletePost(id)}>X</button>

            <div className="Post__title">{id} {title} </div>
            {<img className="Post__image" src={img} />}
            
        </div>


    )
    

}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default Post;
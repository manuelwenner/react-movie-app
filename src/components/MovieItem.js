import React, { useState } from 'react';
import MovieItemEdit from './MovieItemEdit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as thinStar } from '@fortawesome/free-regular-svg-icons';


const MovieItemElement = ({ movie, onRate, onDelete, onEdit, onToggleFavorite }) => {
    const [isEditing, setIsEditing] = useState(false);

    const icon = movie.isFavorite ? solidStar : thinStar;

    const toggleEditMode = () => {
        setIsEditing(true);
    };

    const handleEdit = (id, title, description) => {
        setIsEditing(false);
        onEdit(id, title, description);
    };

    return (
        <div>
            {isEditing ? (
                <MovieItemEdit movie={movie} onEdit={handleEdit} />
            ) : (
                <>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>Bewertung: {movie.rating}</p>

                    <button onClick={() => onDelete(movie.id)}>löschen</button>
                    <button onClick={() => onRate(movie.id)}>bewerten</button>
                    <button onClick={toggleEditMode}>bearbeiten</button>

                    <FontAwesomeIcon
                        icon={icon}
                        onClick={() => onToggleFavorite(movie.id)} />

                    <hr />
                </>
            )
            }
        </div>
    );
};

export default MovieItemElement;

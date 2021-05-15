import React from 'react'
import propTyes from 'prop-types'


function TeckItem({tech, onDelete}) {
    return (
        <li >
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    )
}

TeckItem.defaultProps = {
    tech: 'oculto'
}

TeckItem.propTyes = {
    tech: propTyes.string.isRequired,
    onDelete: propTyes.func.isRequired,
}

export default TeckItem
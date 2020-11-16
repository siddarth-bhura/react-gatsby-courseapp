import React from 'react'

const Heading = ({title}) => {
    return (
        <div className="row">
            <div class="col text-center mb-4">
                <h1 class="display-3">{title}</h1>
            </div>
        </div>
    )
}

export default Heading

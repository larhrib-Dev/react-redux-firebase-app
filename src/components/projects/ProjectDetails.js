import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus corrupti cupiditate nulla a illo, qui praesentium officia rerum exercitationem sit obcaecati deleniti rem placeat nesciunt voluptatem aperiam error? Dolores, at?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by DevLarhrib</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

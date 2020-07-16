import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/cf/b0/69/cfb069ebd72624de494dca93feaf0c83.jpg)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque possimus quos totam facilis et! Veritatis, facilis obcaecati impedit at a eaque. Quibusdam distinctio accusantium, nesciunt itaque corporis provident consequatur vero.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Miércoles</span>
                <h3>7</h3>
            </div>
        </div>
    )
}

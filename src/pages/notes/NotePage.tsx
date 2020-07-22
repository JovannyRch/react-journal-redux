import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Algo chido"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="Qué pasó hoy?"
                    className="notes__textarea"
                >
                </textarea>
                <div className="notes__image">
                    <img
                        alt="image"
                        src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" />
                </div>
            </div>
        </div>
    )
}

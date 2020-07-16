import React from 'react'
import { SideBar } from './SideBar'
import { NothingSelected } from './NothingSelected'
import { NotePage } from '../notes/NotePage'

export const JournalPage = () => {
    return (
        <div className="journal__main-content">

            <SideBar />
            <main>
                {/* <NothingSelected /> */}
                <NotePage />
            </main>
        </div>
    )
}

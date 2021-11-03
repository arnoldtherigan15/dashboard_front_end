import { useState } from 'react'
import './index.css'

export default function Navbar({ user, onSubmit, isNotifExists }) {
    const [searchTxt, setSearchTxt] = useState('')
      
    return (
        <nav id="nav">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src="/icon/bareksa.svg" />
                </div>
                <div className="nav-user">
                    <div className="nav-user-initial">
                        <p><span>RH</span></p>
                    </div>
                    <div className="nav-user-info">
                        <div className="nav-user-info-main">
                            <p>{user.name}</p>
                            <span>{user.address}</span>
                        </div>
                        <div className="nav-user-info-list">
                            <img src="/icon/chevron-down.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-right">
                <div>
                    <form onSubmit={(e) => {onSubmit(e, searchTxt)}} className="search" role="searchForm">
                        <input type="text" placeholder="Search.." onChange={(e) => { setSearchTxt(e.target.value) }} role="searchInput"/>
                        <button type="submit"><img src="/icon/search.svg" width="24" height="24" /></button>
                    </form>
                </div>
                <div className="nav-notif">
                    <img src="/icon/bell.svg" width="22" height="22"  />
                    { isNotifExists &&  <div className="notif-dot"></div>}
                </div>
                <div className="nav-setting">
                    <img src="/icon/settings.svg" width="22" height="22" />
                </div>
            </div>

        </nav>
    )
}

import './index.css'

export default function Navbar() {
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
                            <p>Reinhart H.</p>
                            <span>Kemang, Jakarta</span>
                        </div>
                        <div className="nav-user-info-list">
                            <img src="/icon/chevron-down.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-right">
                <div>
                    <form className="search" action="action_page.php">
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><img src="/icon/search.svg" width="24" height="24" /></button>
                    </form>
                </div>
                <div className="nav-notif">
                    <img src="/icon/bell.svg" width="22" height="22"  />
                    <div className="notif-dot"></div>
                </div>
                <div className="nav-setting">
                    <img src="/icon/settings.svg" width="22" height="22" />
                </div>
            </div>

        </nav>
    )
}

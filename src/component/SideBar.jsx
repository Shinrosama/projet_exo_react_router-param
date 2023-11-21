import './SideBar.scss'

function SideBar ({sidebarText}) {

    return(
        
        <div className="sidenav">
            <p> {sidebarText} </p>
        </div>
    
    )
}

export default SideBar
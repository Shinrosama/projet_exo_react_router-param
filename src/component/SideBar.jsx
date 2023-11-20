import './SideBar.scss'

function SideBar ({sidebar}) {

    return(
        
        <div className="sidenav">
            <p> {sidebar} </p>
        </div>
    
    )
}

export default SideBar
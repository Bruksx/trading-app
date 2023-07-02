import "./dashboard.css";

export default function NavItem(props){
    return (
        <li onClick={props.customClickEvent}>
          <a href={props.navigateTo} className="side-menu side-menu--active">
            <div className="side-menu__title nav-text">
                {props.icon}
                <p>{props.title}</p>
            </div>
          </a>
        </li>
    )
}
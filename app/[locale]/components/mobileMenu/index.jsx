import './style.scss'
import ToggleWrapper from './toggleWrapper';
import LangMenu from './langMenu';
import MenuList from './menuList'


function MobileMenu() {  

  return (<ToggleWrapper>
    <div className="menu_dropdown row">
                <MenuList />
                <LangMenu />
            </div>
  </ToggleWrapper>)
}

export default MobileMenu
import {ReactComponent as MoblyLogo} from './logo.svg';
import {BsFillCartFill} from 'react-icons/bs'

const headerStyle = {
  paddingTop: "10px"
}

const textInputStyle = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  height: "35px",
  paddingLeft: "10px",
  float: "left"
}
const cartStyle = {
  fontSize: "27px",
  float: "right",
  margin: "3px 0 0 10px"
}
const headerRight = {
  float: "right",
  position: "absolute",
  right: "8%",
  top: "10px"
}

function Header () {
    return (
      <div className="Header" style={headerStyle}>

        <MoblyLogo className="header-logo" />
        <div style={headerRight}>
          <input type="text" placeholder="Seach..." style={textInputStyle}/>
          <BsFillCartFill style={cartStyle}/>
        </div>
 
      </div>
    );
  }

export default Header;
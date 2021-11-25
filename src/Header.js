import {ReactComponent as MoblyLogo} from './logo.svg';
import {BsFillCartFill} from 'react-icons/bs'

const headerStyle = {
  paddingTop: "10px",
  display: "flex"
}
const textInputStyle = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  height: "35px",
  paddingLeft: "10px",
  width: "10%"
}
const cartStyle = {
  fontSize: "27px",
  margin: "3px 0 0 10px",
  width: "5%"
}
const gapStyle = {
  width: "60%"
}
const logoStyle = {
  width: "20%",
  height: "40px"
}


function Header () {
    return (
      <div className="Header" style={headerStyle}>

        <MoblyLogo style={logoStyle} onClick={() => console.log("Click")} />
        <div style={gapStyle}/>
        <input type="text" placeholder="Seach..." style={textInputStyle}/>
        <BsFillCartFill style={cartStyle}/>

      </div>
    );
  }

export default Header;
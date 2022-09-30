import logo from '../../assets/images/logo-aTip.png';
import './style.css'
import { CgArrowLeftR } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  let Navigate = useNavigate();

  const goToLogin = () => {
    Navigate("/login");
  }
  
  return (
    <header>
      <section className='head'>
        <div className='boxleft'>
          <div>
            <h3>
              <img src={logo} alt="logo atip" className='header-logo'/>
            </h3>
            <div>
              <CgArrowLeftR onClick={()=> Navigate("/profiles")}/>
            </div>
          </div>
            <div className='fotouser'>
            <img src={logo} alt="logo atip" className='header-logo'/>
          </div>
        </div>
        <div className='boxright'>      
          <div className='linksettings'>
            <p onClick={goToLogin}>settings</p>
          </div>
          <div>
            <img src={logo} alt="logo atip" className='header-logo'/>
          </div>
          <div>
          
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header

import './Header.scss'

  const HeaderContent = (props) => {
  const { headerText, icon } = props;  

  return (
   <div className='container'>    
      <div className='wrapper'> 
     
        <h2>{headerText}</h2>
        <span>{icon}</span>
        </div>
      </div>
      
   
  );
 };
export default HeaderContent;

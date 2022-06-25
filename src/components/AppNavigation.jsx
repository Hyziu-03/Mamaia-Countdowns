const AppNavigation = () => {
  console.log("AppNavigation.jsx");

  return (
    <div className="arrow-navigation-container">
        <button className="arrow-btn"><span className="icon arrow">arrow_back</span></button> 
        <button className="arrow-btn"><span className="icon arrow">arrow_forward</span></button>
    </div>
  );
}

export default AppNavigation;

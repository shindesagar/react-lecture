
import './App.css';
import './Registration.css';
import Header from './components/Header';
import Items from './components/Items';
import Banner from './components/Banner';
import Category from './components/Category'
function App() {
  
  return (
    <>
      <Header/>
	  <section class="wrapper">
		<Banner/>
		<Category/>
		<Items/>
	  </section>
	  
      {/* <h2 style={{textAlign:"center"}}>Register</h2>
      <section className="registrationWrapper">
			<div>
				
				<form>
        <div>
						<input type="text" name="firstName" className = "formControle"  placeholder="First Name"/>
					</div>
          <div>
          <input type="text" name="lastName" className = "formControle"  placeholder="Last Name"/>
					</div>
          <div>
          <input type="email" name="email" className = "formControle"  placeholder="Email"/>
					</div>
					<div>
						<input type="text" name="username" className = "formControle" placeholder="User Name" />
					</div>
					<div>
						<input type="password" name="password" className = "formControle"  placeholder="Password"/>
					</div>
					<button className="btn">Log In</button>
				</form>
			</div>
		</section> */}
    </>
  );
}

export default App;

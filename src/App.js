import React, {Component} from "react";
import './styles/styles.css';

class Profile extends Component {
  constructor(props){
      super(props)

      this.state = {
          name : '',
          email : '',
          phnNumber : ''
      }
  }

  handleChange = (e) => {
    console.log('Handling change');
    this.setState({
      name: e.target.value,
      email: e.target.value,
      phnNumber: e.target.value
    });
  }

  onSubmitCV =(e) => {
    e.preventDefault();
    console.log('CV submitted')
    this.setState( {
      name: this.state.name.displayName(),
      email: this.state.email.displayEmail(),
      phnNumber: this.state.phnNumber.displayPhnNumber()
    })
  }

  render() {
      return(
          <div>
              <form onSubmit={this.onSubmitCV}>
                  <label htmlFor="Name">Name</label>
                  <br/>
                  <input 
                    onChange={this.handleChange}
                    value= {this.name}
                    type="text" 
                    id="Name" 
                    placeholder="e.g. Ryan Ooi"/>
                  <br/>
                  <label htmlFor="Email">Email</label>
                  <br/>
                  <input 
                    onChange={this.handleChange}
                    value={this.email}
                    type="email" 
                    id="Email" 
                    placeholder="e.g. ryan@gmail.com"/>
                  <br/>
                  <label htmlFor="Phone">Phone Number</label>
                  <br/>
                  <input 
                    onChange={this.handleChange}
                    value={this.phnNumber}
                    type="number" 
                    id="Phone" 
                    placeholder="0123456789"/>
                  <button type="submit">Submit</button>
              </form>
          </div>
      );
  }
}

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;

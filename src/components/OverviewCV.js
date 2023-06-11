import React, {Component} from "react";
import '../styles/styles.css';
class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : '',
            email : '',
            phnNumber : ''
        }
    }

    render() {
        return(
            <div>
                <form>
                    <label htmlFor="Name">Name</label>
                    <br/>
                    <input type="text" id="Name" placeholder="e.g. Ryan Ooi"/>
                    <br/>
                    <label htmlFor="Email">Email</label>
                    <br/>
                    <input type="email" id="Email" placeholder="e.g. ryan@gmail.com"/>
                    <br/>
                    <label htmlFor="Phone">Phone Number</label>
                    <br/>
                    <input type="number" id="Phone" placeholder="0123456789"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Profile;
import React, { Component } from 'react';
/**Importing the Navbar to this file */
import Navbar_Main from '../Navigation/Navbar_Main';
/**Importing the footer to this file */
import Footer_Main from '../Footer/Footer_Main';
/**Importing the css file */
import '../../CSS/Main.css'
/**Importing the axios package into the file */
import axios from 'axios';

/**Initializing the variables which are passed as inputs */
const initialState = {
    name: '',
    description: ''
}

/**Class component */
class Insert_Pet extends Component {
    /**Initializing the constructor function */
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }
    /**Method used to set the state of the variables which are passed into the inputs */
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    /**Method used to submit all variables from the frontend application to the database */
    onSubmit(e) {
        e.preventDefault();
        let pet = {
            name: this.state.name,
            description: this.state.description    
        };
        console.log('DATA TO SEND', pet);
        /**Http url path */
        axios.post('https://61139ba1cba40600170c1b2a.mockapi.io/pets',pet)
        .then(response=> {
            window.location = '/view-all-pet'
            alert('Pet Detail Inserted Successfully')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }

    render() {
        return (
            <div>
                <Navbar_Main/><br></br><br></br>
                    <div className="container container-form" style={{backgroundColor:"#FFFFF0"}}>
                        <div className="container-inside" ><center><p className="Form-Heading">Insert A New Pet</p></center></div><br></br>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Pet Name</label>
                                <input type="name" class="form-control" id="name" aria-describedby="name" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter Name Of The Pet" required/>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Pet Description</label>
                                <textarea class="form-control" id="description" name="description" value={this.state.description} onChange={this.onChange} placeholder="Enter Name Of The Description" rows="3" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-position">Submit</button>
                        </form><br></br>    
                    </div><br></br>
                <Footer_Main/>
            </div>
        );
    }
}

export default Insert_Pet;

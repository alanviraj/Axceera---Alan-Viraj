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
class Update_Pet extends Component {
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
    /**This method is to retreiving a pet detail by passing the pet ID as a parameter */
    componentDidMount() {
        axios.get(`https://61139ba1cba40600170c1b2a.mockapi.io/pets/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ 
                name: response.data.name,
                description: response.data.description})
        })
        .catch(error => {
          alert(error.message)
        })
    }
    /**Method used to submit all variables from the frontend application to the database */
    onSubmit(e) {
        e.preventDefault();
        /**Passing the variables */
        let singlePetDetail = {
            name: this.state.name,
            description: this.state.description,
        }
        console.log('DATA TO SEND', singlePetDetail);
        /**Http url */
        axios.put(`https://61139ba1cba40600170c1b2a.mockapi.io/pets/${this.props.match.params.id}`, singlePetDetail)
        .then(response => {
            if(response.data != null) {
                this.setState(this.initialState);
                window.location = '/view-all-pet'
                alert("Pet's Record Updated Successfully!");
            }
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
                        <div className="container-inside" ><center><p className="Form-Heading">Update This Pet</p></center></div><br></br>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Pet Name</label>
                                <input type="name" class="form-control" id="name" aria-describedby="name" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter Name Of The Pet" required/>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Pet Description</label>
                                <textarea class="form-control" id="description" name="description" value={this.state.description} onChange={this.onChange} placeholder="Enter Name Of The Description" rows="3" required></textarea>
                            </div>
                            <div className="container container-image">
                                <img src="http://placeimg.com/640/480/animals" style={{width:"100%",marginLeft:"0%",position:"relative",marginBottom:"-5%",marginTop:"2%"}} id="sImage" /><br></br><br></br>
                            </div><br></br>
                            <button type="submit" class="btn btn-primary btn-position">Update</button>
                        </form><br></br>
                    </div><br></br>
                <Footer_Main/>
            </div>
        );
    }
}

export default Update_Pet;
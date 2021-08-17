import React, { Component } from 'react';
/**Importing the Navbar to this file */
import Navbar_Main from '../Navigation/Navbar_Main';
/**Improting the footer to this file */
import Footer_Main from '../Footer/Footer_Main';
/**Importing the CSS to this file */
import '../../CSS/Main.css'
/**Importing the axios package into the file */
import axios from 'axios';

/**Class Component */
class Delete_Pet extends Component {
    /**Initializing the constructor */
    constructor(props) {
        super(props);
        /**Initializing the Array */
        this.state = {
            singlePet: []
        }
    }
    /**This method is to retreiving a pet detail by passing the pet ID as a parameter */
    componentDidMount() {
        /**http url */
        axios.get(`https://61139ba1cba40600170c1b2a.mockapi.io/pets/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ 
                singlePet: response.data})
        })
        .catch(error => {
          alert(error.message)
        })
    }
    /**This method is to navigate the Owner to the View all pets page after the Deletion of a specific pet */
    navigateAfterDeletePetPage(e) {
        e.preventDefault();
        /**Http url */
        axios.delete(`https://61139ba1cba40600170c1b2a.mockapi.io/pets/${this.props.match.params.id}`)
        .then(response => {
          if (response.status === 200){
            window.location = '/view-all-pet'
            alert("This Pet Record Is Deleted Successfully!")
          }
          else{
            window.location = '/view-all-pet'
            alert("Failed to Delete This Pet Record!!!")
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
    render() {
        return (
            <div>
                <Navbar_Main/><br></br><br></br>
                    <div className="container container-form" style={{backgroundColor:"#FFFFF0"}}>
                        <div className="container-inside" ><center><p className="Form-Heading">Delete This Pet</p></center></div><br></br>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Pet Name</label>
                                <input type="name" class="form-control" id="name" aria-describedby="name" name="name" value={this.state.singlePet.name} />
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Pet Description</label>
                                <textarea class="form-control" id="description" name="description" value={this.state.singlePet.description}  rows="3"></textarea>
                            </div>
                            <div className="container container-image">
                                <img src="http://placeimg.com/640/480/animals" style={{width:"100%",marginLeft:"0%",position:"relative",marginBottom:"-5%",marginTop:"2%"}} id="sImage" /><br></br><br></br>
                            </div><br></br>
                            <button type="submit" class="btn btn-primary btn-position"  onClick={e => this.navigateAfterDeletePetPage(e)}>Delete</button>
                        </form><br></br>
                    </div><br></br>
                <Footer_Main/>
            </div>
        );
    }
}

export default Delete_Pet;
import React, { Component } from 'react';
/**Importing the Navbar to this file */
import Navbar_Main from '../Navigation/Navbar_Main';
/**Importing the footer to this file */
import Footer_Main from '../Footer/Footer_Main';
/**Importing the css */
import '../../CSS/Main.css'
/**Importing the axios package into the file */
import axios from 'axios';

/**Class component */
class ViewOne_Pet extends Component {
    /**Constructor for getting the records */
    constructor(props) {
        super(props);
        /**Initializing the array */
        this.state = {
            singlePet: []
        }
    }
    /**This method is to retreiving a pet detail by passing the pet ID as a parameter */
    componentDidMount() {
        /**Http url */
        axios.get(`https://61139ba1cba40600170c1b2a.mockapi.io/pets/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ 
                singlePet: response.data})
        })
        .catch(error => {
          alert(error.message)
        })
    }
    render() {
        return (
            <div>
                <Navbar_Main/><br></br><br></br>
                    <div class="container py-3 x">
                        <div class="title h1 text-center">Pet Details</div>
                            <div class="card">
                                <div class="row ">
                                    <div class="col-md-7 px-3">
                                        <div class="card-block px-6">
                                            <h4 class="card-title">{this.state.singlePet.name} </h4>
                                            <p class="card-text">
                                                {this.state.singlePet.description}
                                            </p>
                                            <br/>
                                            <a href="/view-all-pet" class="mt-auto btn btn-primary btnx ">Back</a>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block" src="http://placeimg.com/640/480/animals" style={{width:"80%"}} alt=""/>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                    </div><br></br>
                <Footer_Main/>
            </div>
        );
    }
}

export default ViewOne_Pet;
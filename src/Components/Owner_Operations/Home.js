import React, { Component } from 'react';
/**Importing the Navbar to this file */
import Navbar_Main from '../Navigation/Navbar_Main';
/**Importing the footer to this file */
import Footer_Main from '../Footer/Footer_Main';
/**Importing the CSS to this file */
import '../../CSS/Main.css'
/**Importing the axios package into the file */
import axios from 'axios';

/**Class Component */
class Home extends Component {
    /**Initializing the constructor */
    constructor(props) {
        super(props);
        /**Initializing the Array */
        this.state = {
          allPets: []
        }
    }
    /**This method is to retreiving all pet details */
    componentDidMount() {
        axios.get(`https://61139ba1cba40600170c1b2a.mockapi.io/pets`)
        .then(response => {
            this.setState({ 
                allPets: response.data})
        })
        .catch(error => {
          alert(error.message)
        })
    }
    /**This method is to navigate to the ViewOne Pet page */
    navigateToViewPetPage(e, id) {
        window.location = `/view-single-pet/${id}`
    }
    render() {
        return (
            <div>
                <Navbar_Main/><br></br>
                    <div className="contApp1" id="myTable">    
                        {this.state.allPets.length > 0 && this.state.allPets.map((item, index) => (    
                            <div class="cardx cardcat1">
                                <img src="http://placeimg.com/640/480/animals?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=50" alt="" class="card-img-top"/>
                                    <h5 class="card-title">{item.name}</h5>
                                        <hr></hr>
                                        <p class="card-text">{item.description}</p>
                                        <a class="btn btn-outline-success btn-sm"  onClick={e => this.navigateToViewPetPage(e, item.id)}>Read More</a>
                            </div>
                        ))}
                    </div><br></br>
                <Footer_Main/>
            </div>
        );
    }
}

export default Home;
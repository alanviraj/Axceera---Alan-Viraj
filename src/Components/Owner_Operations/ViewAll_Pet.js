import React, { Component } from 'react';
/**Importing the Navbar to this file */
import Navbar_Main from '../Navigation/Navbar_Main';
/**Importing the footer to this file */
import Footer_Main from '../Footer/Footer_Main';
/**Importing the axios package into the file */
import axios from 'axios';

/**Class Component */
class ViewAll_Pet extends Component {
    /**Initializing the constructor function */
    constructor(props) {
        super(props);
        /**Initializing the Array */
        this.state = {
          allPets: []
        }
    }
    /**This method is to retreiving all pet details */
    componentDidMount() {
        /**Http url */
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
    /**This method is to navigate to the Update Pet page */
    navigateToUpdatePetPage(e, id) {
        window.location = `/update-pet/${id}`
    }
    /**This method is to navigate to the Delete Pet page */
    navigateToDeletePetPage(e, id) {
        window.location = `/delete-pet/${id}`
    }
    /**This method is implemented for the Search Function by category name */
    
    render() {
        return (
            <div>
                <Navbar_Main/><br></br>
                    <table class="table"  style={{backgroundColor:"whitesmoke",width:"98%",marginLeft:"1%"}} id="myTable">
                        <thead class="thead-dark" style={{color:"whitesmoke",backgroundColor:"#9512d6"}}>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">View</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allPets.length > 0 && this.state.allPets.map((item, index) => (
                                <tr key={index}>
                                <td>
                                    <div style={{position:"relative", top:"30px"}} >
                                        {item.id}
                                    </div>
                                </td>
                                {/* Search function implemented to search pets by their name */}
                                <td width="10%">
                                    <div style={{position:"relative", top:"30px"}} >
                                        {item.name}
                                    </div>
                                </td>
                                <td width="40%">
                                    <div style={{position:"relative", top:"30px"}} >
                                        {item.description}
                                    </div>
                                </td>
                                <td width="10%">
                                    <img src="http://placeimg.com/640/480/animals" id="sImage" alt="..."style={{width:"90%", borderRadius:"15%"}} />
                                </td>
                                <td>
                                    <button type="button" style={{position:"relative", top:"30px"}} class="btn btn-primary btn-view" onClick={e => this.navigateToViewPetPage(e, item.id)}>View</button>
                                </td>
                                <td>
                                    <button type="button" style={{position:"relative", top:"30px"}} class="btn btn-warning btn-update" onClick={e => this.navigateToUpdatePetPage(e, item.id)}>Update</button>
                                </td>
                                <td>
                                    <button type="button" style={{position:"relative", top:"30px"}} class="btn btn-danger btn-delete" onClick={e => this.navigateToDeletePetPage(e, item.id)}>Delete</button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <Footer_Main/>
            </div>
        );
    }
}

export default ViewAll_Pet;
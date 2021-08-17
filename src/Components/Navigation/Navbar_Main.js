import React, { Component } from 'react';
/**Importing the CSS file */
import '../../CSS/Main.css'

/**Class Component */
class Navbar_Main extends Component {
    /**This function is for the search function implemented for the ViewAll_Pet.js file where the owner can search by the pet name */
    myFunction() {
        var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("searchBar");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                tr[i].style.display = "";
                            } else {
                            tr[i].style.display = "none";
                        }
                    }      
                }
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#9512d6",color:"white"}}>
                    <a class="navbar-brand" href="#" style={{color:"whitesmoke"}}>Pet Haven</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/" style={{color:"whitesmoke",marginLeft:"10%",marginTop:"5%"}}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/insert-pet" style={{color:"whitesmoke",marginLeft:"10%",width:"120px",marginTop:"4%"}}>Insert Pet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view-all-pet" style={{color:"whitesmoke",marginLeft:"10px",width:"120px",marginTop:"4%"}}>View Pets</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" onKeyUp={this.myFunction} id="searchBar" placeholder="Search" aria-label="Search"/>  
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar_Main;
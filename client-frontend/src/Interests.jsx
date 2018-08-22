import React, { Component } from 'react';
import './App.css';



class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hereCategory: [],
            allCategories: ['Music', 'Sports', 'Movies', 'DIY', 'Pet-Peeves'],
            checkedItems: [],
            userId: '',
        
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    last() {
        this.props.users.map( user => {
            if (user.id === (this.props.users.length )) {
                this.setState({ userId: user.id})
            }
        })
    }


    componentDidMount() {
        this.setState({ hereCategory: 'Food' })
        this.props.callingInterests('Food');
        this.last();
    }

    unCheck() {
        let checkboxs = document.querySelectorAll(".checkbox");
        for(let i = 0; i < checkboxs.length; i += 1) {
            checkboxs[i].checked = null;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const final = [this.state.userId, this.state.checkedItems]
        this.props.onSubmit(final);

        this.setState({ checkedItems: [] })
        this.unCheck();
        if ({hereCategory: "Food"}) {
            this.setState({
                hereCategory: "Music"
            })
            this.props.callingInterests(this.state.allCategories[0])
        } else if ({hereCategory: "Music"}) {
            this.setState({
                hereCategory: "Sports"
            })
            this.props.callingInterests(this.state.allCategories[1])
        }   else if ({hereCategory: "Sports"}) {
            this.setState({
                hereCategory: "Movies"
            })
            this.props.callingInterests(this.state.allCategories[2])
        }   else if ({hereCategory: "Movies"}) {
            this.setState({
                hereCategory: "DIY"
            })
            this.props.callingInterests(this.state.allCategories[3])
        }   else if ({hereCategory: "DIY"}) {
            this.setState({
                hereCategory: "Pet-Peeves"
            })
            this.props.callingInterests(this.state.allCategories[4])
        }
    }

    // nextCall(){
    //     console.log(this.state.hereCategory)
    //     this.props.callingInterests(this.state.hereCategory)
    // }

    handleChange(e) {
       const { interests } =  this.props.interests 

       const { id } = e.target;
       if (e.target.checked) {
       this.setState(prevState => ({checkedItems: [...prevState.checkedItems, id]}))
   
       } else {
         this.setState(prevState => ({checkedItems: prevState.checkedItems.filter(el => el!== id)}))
       }
    }

   


    render() {
        return (
            <div className='interests'>
            <div>     
               {this.state.hereCategory} 
            </div>

                <form onSubmit={this.handleSubmit}>
                    {
                    this.props.interests.map((interest, index) => {
                        return(
                            <div key={index}>
                            <label>{interest.interests}</label>
                            <input 
                                type="checkbox"
                                className = "checkbox" 
                                id={interest.id} 
                                name={this.state.hereCategory}
                                value={interest.id} 
                                onChange={this.handleChange}
                            />
                            <br></br>
                            </div>
                        )
                    })
                    }
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}

export default Interests;
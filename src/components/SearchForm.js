import React, {Component} from 'react'

const API_KEY ='1f01dbe3';

export class SearchForm extends Component{
  
        //We wil control our state about the form. First we create a initial state as a empty string
        state ={
            inputMovie:''           
        }

        _handleChange = (e) =>{
            //secondly we update the input event
            this.setState({inputMovie: e.target.value})
        }

        _handleSubmit=(e)=>{
            //Finally, We capture the value on the form
            e.preventDefault()
            const {inputMovie} = this.state;
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res =>res.json())
            .then(results => {
                //extract on results the property search and total results
                const {Search =[], totalResults ='0'} = results
                console.log({Search,totalResults})
                //we generate a prop onResults to comunicate the results to the father component
                this.props.onResults(Search)
            })
        }
        
        render(){
            return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input is-info" 
                    //onchange method execute when detect changes on the input
                    onChange={this._handleChange}
                    type="text" 
                    placeholder="Find a movie"/>
                
            </div>
                <div className="control">
                <button className="button is-info is-outlined">
                Search
                </button>
                </div>
            </div>
            </form>
        )
    }
}

import React from 'react'

class MemeGenerator extends React.Component{
	constructor(){
		super()
		this.state = {
			topText: '',
      		bottomText: '',
      		randomImg: "http://i.imgflip.com/1bij.jpg",
      		allMemeImgs: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response =>{
        const {memes} = response.data
        this.setState({allMemeImgs: memes})
      })
  }

	handleChange(event){
		console.log("working")
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit(event){
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg = this.state.allMemeImgs[randNum].url
		this.setState({randomImg: randMemeImg})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit} >
					<input 
						type="text"
						name="topText"
						value={this.state.topText}
						onChange={this.handleChange}
						placeholder="Top text"
					/>
					<br />
					<input 
						type="text"
						name="bottomText"
						value={this.state.bottomText}
						onChange={this.handleChange}
						placeholder="Bottom text"
					/>
					<br />
					<button>Gen</button>
				</form>
				<div>
					<img src={this.state.randomImg} />
					<h1>{this.state.topText}</h1>
					<h1>{this.state.bottomText}</h1>
				</div>

			</div>
		)
	}

}

export default MemeGenerator
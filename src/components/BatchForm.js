import React, {PureComponent} from 'react'

export default class BatchForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }


  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();


    const date = yyyy+'-'+mm+'-'+dd

    return (
      <form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="startDate">startDate (yyyy-mm-dd)</label>
					<input name="startDate" id="startDate" value={
						this.state.startDate || ''
					} onChange={ this.handleChange } placeholder={date}/>
				</div>

				<div>
					<label htmlFor="endDate">endDate (yyyy-mm-dd) </label>
					<input name="endDate" id="endDate" value={
						this.state.endDate || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
    )
  }
}

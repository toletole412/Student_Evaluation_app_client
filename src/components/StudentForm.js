import React, {PureComponent} from 'react'
import { addStudent } from '../actions/students'
import { connect } from 'react-redux'

class StudentForm extends PureComponent {
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
    return (
      <form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Student fullName</label>
					<input name="name" id="name" value={
						this.state.name || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Student Picture</label>
					<input name="picture" id="picture" value={
						this.state.picture || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
    )
  }
}

export default StudentForm

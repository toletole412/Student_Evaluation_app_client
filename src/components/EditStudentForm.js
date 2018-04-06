import React, {PureComponent} from 'react'

export default class EditStudentForm extends PureComponent {
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
					<label htmlFor="name">Edit fullName</label>
					<input name="fullName" id="fullName" value={
						this.state.fullName || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Edit Picture</label>
					<input name="picture" id="picture" value={
						this.state.picture || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">edit</button>
			</form>
    )
  }
}

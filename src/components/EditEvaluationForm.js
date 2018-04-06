import React, {PureComponent} from 'react'

export default class EditEvaluationForm extends PureComponent {
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
					<label htmlFor="colourCode">colour code</label>
					<input name="colourCode" id="colourCode" value={
						this.state.colourCode || ''
					} onChange={ this.handleChange } />
				</div>

        <div>
					<label htmlFor="remakr">remark</label>
					<input name="remark" id="remark" value={
						this.state.remark || ''
					} onChange={ this.handleChange } />
        </div>
				<button type="submit">Save</button>
			</form>
    )
  }
}

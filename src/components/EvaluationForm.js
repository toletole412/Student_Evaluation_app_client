import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class EvaluationForm extends PureComponent {
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

    const {student} = this.props

    return (
      <form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="date">date (yyyy-mm-dd)</label>
					<input name="date" id="date" value={
						this.state.date || ''
					} onChange={ this.handleChange } placeholder={date}/>
				</div>

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
				<button type="submit" onClick={_=> window.history.back()}>Save</button>
        <button type="submit" onClick={_=> window.location.href=`/${student.id+1}/evaluation`}>Save and next</button>
			</form>
    )
  }
}

const mapStateToProps = (state) => ({
  student: state.student
})

export default connect(mapStateToProps)(EvaluationForm)

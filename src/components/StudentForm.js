import React, {PureComponent} from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

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
					<input name="fullName" id="fullName" value={
						this.state.fullName || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Student Picture</label>
					<input name="picture" id="picture" value={
						this.state.picture || ''
					} onChange={ this.handleChange } />
				</div>

        <RaisedButton
          type="submit"
          label="save"
          secondary={true}
          style={style}  
          onClick={_=>window.location.reload()}
        />
			</form>
    )
  }
}

export default StudentForm

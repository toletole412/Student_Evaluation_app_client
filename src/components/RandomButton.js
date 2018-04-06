import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { askQuestion } from '../actions/students'
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

class RandomButton extends PureComponent {
  static propTypes = {
    askQuestion: PropTypes.func.isRequired
  }


  handleClick = () => {
    this.props.askQuestion()
  }

  render() {
    // if (!this.props.question  ) return (
    //   <Redirect to={`/${question.id}/evaluation`} />
    // )

    return (
      <RaisedButton label="Ask random" primary={true} style={style} onClick={this.handleClick} />

    )
  }
}

const mapStateToProps = (state) => ({
  question: state.question
})

export default connect(null, { askQuestion })(RandomButton)

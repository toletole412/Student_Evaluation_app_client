import React, {PureComponent} from 'react'
import { editEvaluation, fetchOneEvaluation, deleteEvaluation } from '../actions/students'
import EditEvaluationForm from '../components/EditEvaluationForm'
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'





class EditEvaluation extends PureComponent {

  componentWillMount() {
      this.props.fetchOneEvaluation(this.props.match.params.id)
  }

   editEvaluation = evaluation => {
     this.props.editEvaluation(evaluation, this.props.match.params.id)
   }

   deleteEvaluation = () => {
     this.props.deleteEvaluation(this.props.match.params.id)
   }


  render() {


    return (
        <div>
        <AppBar
          title="Evaluation"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
            <EditEvaluationForm onSubmit={this.editEvaluation}/>
            <button
                onClick={
                  this.deleteEvaluation
                }>
                delete evalutions
            </button>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  evaluation: state.evaluation,
  student: state.student
})

export default connect(mapStateToProps, {editEvaluation, fetchOneEvaluation, deleteEvaluation} )(EditEvaluation)

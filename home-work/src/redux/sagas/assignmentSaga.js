// import { put, call, takeLatest } from 'redux-saga/effects';
// import {
//   CreateAssignment,
//   LoadAssignment,
//   EditAssignment,
//   LoadIdAssignment,
//   DeleteAssignment,
//   LoadAnswersAssignment,
// } from '../../api/assignmentsApi';
// import { DeleteAnswer, Approve } from '../../api/answerApi'
// import * as assignmentsConstants from '../constants/assignmentsConstants'

// function* onCreateAssignment(action) {
//   try {
//     const create_assignment = yield call(CreateAssignment, action.profile)
//     yield put({
//       type: assignmentsConstants.CREATE_ASSIGNMENT_SUCCESS,
//       create_assignment: create_assignment.assignment
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// function* onLoadAssignments(action) {
//   try {
//     const assignments = yield call(LoadAssignment, action.page);
//     assignments.data.sort((a, b) => b.id - a.id)
//     yield put({ type: assignmentsConstants.LOAD_ASSIGNMENTS_SUCCESS, payload: assignments });
//     const ids = assignments.data.map(item => item.id)
//     const answer = {};
//     // const comments = {}; 

//     for (let id of ids) {
//       const answers_assignment = yield call(LoadAnswersAssignment, id)
//       answer[id] = answers_assignment;
//       // answer[id].sort((a, b) => b.id - a.id)
//     }
//     yield put({ type: assignmentsConstants.LOAD_ANSWERS_ASSIGNMENT_SUCCESS, answer })
//   } catch (error) {
//     console.log(error)
//   }
// }

// function* onEditAssignment(action) {
//   try {
//     const status = yield call(EditAssignment, action.id_assignment_edit, action.profile)
//     const data_id_assignment = yield call(LoadIdAssignment, action.id_assignment_edit)
//     yield put({ type: assignmentsConstants.EDIT_ASSIGNMENTS_SUCCESS, payload: status, data_id_assignment })
//   } catch (error) {
//     console.log(error)
//   }
// }

// function* onDeleteAssignment(action) {
//   try {
//     const data_id_assignment = yield call(LoadIdAssignment, action.id_assignment_detele)
//     const status = yield call(DeleteAssignment, action.id_assignment_detele);
//     yield put({ type: assignmentsConstants.DELETE_ASSIGNMENT_SUCCESS, payload: status, data_id_assignment })
//   } catch (error) {
//     console.log(error)
//   }
// }

// function* onDeteleAnswer(action) {
//   try {
//     yield call(DeleteAnswer, action.id_answer)
//     yield put({
//       type: assignmentsConstants.DELETE_ANSWER_MENTOR_SUCCESS,
//       id_assignment: action.id_assignment,
//       id_answer: action.id_answer
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// function* onApprove(action) {
//   try {
//     const approve = yield call(Approve, action.id_answer)
//     yield put({
//       type: assignmentsConstants.APPROVE_BY_MENTOR_SUCCESS,
//       payload: approve,
//       id_answer: action.id_answer,
//       assignment_id: action.assignment_id,
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// // function* onPutMark(action) {
// //   try {
// //     // const mark = yield call(Mark)
// //     yield put({
// //       type: assignmentsConstants.PUT_MARK_ASSIGNMENT_SUCCESS,
// //       mark: action.mark,
// //       evaluate: action.evaluate,
// //       id_answer: action.id_answer,
// //       assignment_id: action.assignment_id,
// //     })
// //   } catch (error) {
// //     console.log(error)
// //   }

// // }

// export default function* Assignment() {
//   yield takeLatest(assignmentsConstants.CREATE_ASSIGNMENT_REQUEST, onCreateAssignment)
//   yield takeLatest(assignmentsConstants.LOAD_ASSIGNMENTS_REQUEST, onLoadAssignments)
//   yield takeLatest(assignmentsConstants.EDIT_ASSIGNMENTS_REQUEST, onEditAssignment)
//   yield takeLatest(assignmentsConstants.DELETE_ASSIGNMENT_REQUEST, onDeleteAssignment)
//   // yield takeLatest(assignmentsConstants.LOAD_ANSWERS_ASSIGNMENT_REQUEST, onLoadAnswersAssignment)
//   yield takeLatest(assignmentsConstants.DELETE_ANSWER_MENTOR_REQUEST, onDeteleAnswer)
//   yield takeLatest(assignmentsConstants.APPROVE_BY_MENTOR_REQUEST, onApprove)
//   // yield takeLatest(answerConstants.PUT_MARK_REQUEST, onPutMark)
// }
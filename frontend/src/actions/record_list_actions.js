import * as APIUtil from '../util/record_list_util'
export const RECEIVE_RECORDS = "RECEIVE_RECORDS"

const receiveRecords = records =>{
  return{
    type: RECEIVE_RECORDS,
    records
  }
}

export const fetchRecords = () => dispatch => (
  APIUtil.getRecordList().then(records =>{
    dispatch(receiveRecords(records))
  })
)

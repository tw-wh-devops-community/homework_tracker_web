import { createAction } from 'redux-actions'
import api from '../api/api'

export const FETCH_ASSIGNMENT = 'ASSIGNMENT/FETCH_ASSIGNMENT'
export const CREATE_ASSIGNMENT = 'ASSIGNMENT/CREATE_ASSIGNMENT'

export const fetchAssignments = createAction(FETCH_ASSIGNMENT, () => api.get('/assignments'))

export const createAssignment = createAction(CREATE_ASSIGNMENT, () => api.post('/assignments'))


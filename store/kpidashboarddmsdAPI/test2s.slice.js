import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_test2_list = createAsyncThunk(
  "test2s/api_v1_test2_list",
  async payload => {
    const response = await apiService.api_v1_test2_list(payload)
    return response.data
  }
)
export const api_v1_test2_create = createAsyncThunk(
  "test2s/api_v1_test2_create",
  async payload => {
    const response = await apiService.api_v1_test2_create(payload)
    return response.data
  }
)
export const api_v1_test2_retrieve = createAsyncThunk(
  "test2s/api_v1_test2_retrieve",
  async payload => {
    const response = await apiService.api_v1_test2_retrieve(payload)
    return response.data
  }
)
export const api_v1_test2_update = createAsyncThunk(
  "test2s/api_v1_test2_update",
  async payload => {
    const response = await apiService.api_v1_test2_update(payload)
    return response.data
  }
)
export const api_v1_test2_partial_update = createAsyncThunk(
  "test2s/api_v1_test2_partial_update",
  async payload => {
    const response = await apiService.api_v1_test2_partial_update(payload)
    return response.data
  }
)
export const api_v1_test2_destroy = createAsyncThunk(
  "test2s/api_v1_test2_destroy",
  async payload => {
    const response = await apiService.api_v1_test2_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const test2sSlice = createSlice({
  name: "test2s",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_test2_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_test2_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_test2_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_test2_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_test2_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_test2_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_test2_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_test2_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_test2_list,
  api_v1_test2_create,
  api_v1_test2_retrieve,
  api_v1_test2_update,
  api_v1_test2_partial_update,
  api_v1_test2_destroy,
  slice: test2sSlice
}

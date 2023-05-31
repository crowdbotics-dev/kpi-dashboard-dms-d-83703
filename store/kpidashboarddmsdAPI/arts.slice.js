import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_art_list = createAsyncThunk(
  "arts/api_v1_art_list",
  async payload => {
    const response = await apiService.api_v1_art_list(payload)
    return response.data
  }
)
export const api_v1_art_create = createAsyncThunk(
  "arts/api_v1_art_create",
  async payload => {
    const response = await apiService.api_v1_art_create(payload)
    return response.data
  }
)
export const api_v1_art_retrieve = createAsyncThunk(
  "arts/api_v1_art_retrieve",
  async payload => {
    const response = await apiService.api_v1_art_retrieve(payload)
    return response.data
  }
)
export const api_v1_art_update = createAsyncThunk(
  "arts/api_v1_art_update",
  async payload => {
    const response = await apiService.api_v1_art_update(payload)
    return response.data
  }
)
export const api_v1_art_partial_update = createAsyncThunk(
  "arts/api_v1_art_partial_update",
  async payload => {
    const response = await apiService.api_v1_art_partial_update(payload)
    return response.data
  }
)
export const api_v1_art_destroy = createAsyncThunk(
  "arts/api_v1_art_destroy",
  async payload => {
    const response = await apiService.api_v1_art_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const artsSlice = createSlice({
  name: "arts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_art_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_art_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_art_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_art_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_art_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_art_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_art_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_art_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_art_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_art_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_art_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_art_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_art_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_art_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_art_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_art_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_art_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_art_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_art_list,
  api_v1_art_create,
  api_v1_art_retrieve,
  api_v1_art_update,
  api_v1_art_partial_update,
  api_v1_art_destroy,
  slice: artsSlice
}

import axios from "axios"
const kpidashboarddmsdAPI = axios.create({
  baseURL: "https://kpi-dashboard-dms-d-83703.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_art_list(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/art/`)
}
function api_v1_art_create(payload) {
  return kpidashboarddmsdAPI.post(`/api/v1/art/`, payload.data)
}
function api_v1_home_list(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/home/`)
}
function api_v1_home_create(payload) {
  return kpidashboarddmsdAPI.post(`/api/v1/home/`, payload.data)
}
function api_v1_login_create(payload) {
  return kpidashboarddmsdAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_test2_list(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/test2/`)
}
function api_v1_test2_create(payload) {
  return kpidashboarddmsdAPI.post(`/api/v1/test2/`, payload.data)
}
function api_v1_signup_create(payload) {
  return kpidashboarddmsdAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_article_list(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/article/`)
}
function api_v1_article_create(payload) {
  return kpidashboarddmsdAPI.post(`/api/v1/article/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return kpidashboarddmsdAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return kpidashboarddmsdAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_art_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/art/${payload.id}/`)
}
function api_v1_art_update(payload) {
  return kpidashboarddmsdAPI.put(`/api/v1/art/${payload.id}/`, payload.data)
}
function api_v1_art_partial_update(payload) {
  return kpidashboarddmsdAPI.patch(`/api/v1/art/${payload.id}/`, payload.data)
}
function api_v1_art_destroy(payload) {
  return kpidashboarddmsdAPI.delete(`/api/v1/art/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return kpidashboarddmsdAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_home_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/home/${payload.id}/`)
}
function api_v1_home_update(payload) {
  return kpidashboarddmsdAPI.put(`/api/v1/home/${payload.id}/`, payload.data)
}
function api_v1_home_partial_update(payload) {
  return kpidashboarddmsdAPI.patch(`/api/v1/home/${payload.id}/`, payload.data)
}
function api_v1_home_destroy(payload) {
  return kpidashboarddmsdAPI.delete(`/api/v1/home/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return kpidashboarddmsdAPI.post(`/rest-auth/logout/`)
}
function api_v1_test2_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/test2/${payload.id}/`)
}
function api_v1_test2_update(payload) {
  return kpidashboarddmsdAPI.put(`/api/v1/test2/${payload.id}/`, payload.data)
}
function api_v1_test2_partial_update(payload) {
  return kpidashboarddmsdAPI.patch(`/api/v1/test2/${payload.id}/`, payload.data)
}
function api_v1_test2_destroy(payload) {
  return kpidashboarddmsdAPI.delete(`/api/v1/test2/${payload.id}/`)
}
function api_v1_article_retrieve(payload) {
  return kpidashboarddmsdAPI.get(`/api/v1/article/${payload.id}/`)
}
function api_v1_article_update(payload) {
  return kpidashboarddmsdAPI.put(`/api/v1/article/${payload.id}/`, payload.data)
}
function api_v1_article_partial_update(payload) {
  return kpidashboarddmsdAPI.patch(
    `/api/v1/article/${payload.id}/`,
    payload.data
  )
}
function api_v1_article_destroy(payload) {
  return kpidashboarddmsdAPI.delete(`/api/v1/article/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return kpidashboarddmsdAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return kpidashboarddmsdAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return kpidashboarddmsdAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return kpidashboarddmsdAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return kpidashboarddmsdAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_art_list,
  api_v1_art_create,
  api_v1_home_list,
  api_v1_home_create,
  api_v1_login_create,
  api_v1_test2_list,
  api_v1_test2_create,
  api_v1_signup_create,
  api_v1_article_list,
  api_v1_article_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  api_v1_art_retrieve,
  api_v1_art_update,
  api_v1_art_partial_update,
  api_v1_art_destroy,
  rest_auth_login_create,
  api_v1_home_retrieve,
  api_v1_home_update,
  api_v1_home_partial_update,
  api_v1_home_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_test2_retrieve,
  api_v1_test2_update,
  api_v1_test2_partial_update,
  api_v1_test2_destroy,
  api_v1_article_retrieve,
  api_v1_article_update,
  api_v1_article_partial_update,
  api_v1_article_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}

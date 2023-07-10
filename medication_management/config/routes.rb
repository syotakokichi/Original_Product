Rails.application.routes.draw do
  resources :patients
  resources :nursing_stations
  resources :nurses
  resources :medicines
  resources :patient_medicines
  resources :medicine_taken_records
  resources :nurse_patients, only: [:create, :destroy]
end

# ルート作成
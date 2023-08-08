Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
        resources :patients
        resources :nursing_stations
        resources :nurses
        resources :medicines
        resources :patient_medicines
        resources :medicine_taken_records
        resources :nurse_patients, only: [:create, :destroy]
      end
    end
  # root to: 'patients#index'
get'*path', to: 'patients#root'

end


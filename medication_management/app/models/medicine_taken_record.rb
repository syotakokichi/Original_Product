class MedicineTakenRecord < ApplicationRecord
  belongs_to :patient_medicine
end

# アソシエーション作成
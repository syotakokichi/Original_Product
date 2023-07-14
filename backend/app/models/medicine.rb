class Medicine < ApplicationRecord
  has_many :patient_medicines
  has_many :patients, through: :patient_medicines
end

# アソシエーション作成
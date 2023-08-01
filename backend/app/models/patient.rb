class Patient < ApplicationRecord
  has_many :nurse_patients
  has_many :nurses, through: :nurse_patients
  has_many :patient_medicines
  has_many :medicines, through: :patient_medicines
end


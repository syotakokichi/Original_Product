# patient_medicine.rb
class PatientMedicine < ApplicationRecord
  belongs_to :patient
  belongs_to :medicine
end
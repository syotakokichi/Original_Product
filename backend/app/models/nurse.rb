# nurse_patient.rb
class Nurse < ApplicationRecord
  belongs_to :nursing_station
  has_many :nurse_patients
  has_many :patients, through: :nurse_patients
end
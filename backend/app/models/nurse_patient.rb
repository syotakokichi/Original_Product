# nurse_patient.rb
class NursePatient < ApplicationRecord
  belongs_to :nurse
  belongs_to :patient
end
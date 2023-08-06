# medicine_taken_record.rb
class MedicineTakenRecord < ApplicationRecord
  belongs_to :patient_medicine
end
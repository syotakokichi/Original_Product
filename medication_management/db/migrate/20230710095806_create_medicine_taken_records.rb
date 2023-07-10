class CreateMedicineTakenRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :medicine_taken_records do |t|
      t.integer :patient_medicine_id
      t.date :date_taken
      t.time :time_taken
      t.boolean :taken

      t.timestamps
    end
  end
end


class CreateNursePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :nurse_patients do |t|
      t.integer :nurse_id
      t.integer :patient_id

      t.timestamps
    end
  end
end

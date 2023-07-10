class CreatePatientMedicines < ActiveRecord::Migration[7.0]
  def change
    create_table :patient_medicines do |t|
      t.integer :patient_id
      t.integer :medicine_id

      t.timestamps
    end
  end
end

# モデル作成
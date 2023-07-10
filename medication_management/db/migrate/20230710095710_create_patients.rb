class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :sex
      t.date :dob
      t.string :address
      t.string :phone
      t.string :emergency_contact

      t.timestamps
    end
  end
end

# モデル作成
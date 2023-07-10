class CreateMedicines < ActiveRecord::Migration[7.0]
  def change
    create_table :medicines do |t|
      t.string :name
      t.string :unit
      t.integer :frequency

      t.timestamps
    end
  end
end

# モデル作成

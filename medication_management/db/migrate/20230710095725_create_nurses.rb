class CreateNurses < ActiveRecord::Migration[7.0]
  def change
    create_table :nurses do |t|
      t.integer :employee_id
      t.integer :station_id
      t.string :password

      t.timestamps
    end
  end
end

# モデル作成

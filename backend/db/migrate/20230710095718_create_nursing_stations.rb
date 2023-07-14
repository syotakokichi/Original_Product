class CreateNursingStations < ActiveRecord::Migration[7.0]
  def change
    create_table :nursing_stations do |t|
      t.string :name
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end

# モデル作成

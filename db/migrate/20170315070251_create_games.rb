class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.date :date
      t.int :totalPlayers

      t.timestamps null: false
    end
  end
end

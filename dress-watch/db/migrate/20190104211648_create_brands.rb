class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.string :name
      t.string :website
      t.string :logo
      t.text :about
      t.string :head_quarters
      t.string :founder
      t.string :founded

      t.timestamps
    end
  end
end

class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.references :users, index: true
      t.string :description

      t.timestamps
    end
  end
end

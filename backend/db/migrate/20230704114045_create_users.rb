class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name, :null => false, unique: true
      t.integer :number, :null => false, unique: true
      t.string :password_digest, :null => false, unique: true

      t.timestamps
    end
  end
end

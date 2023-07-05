class AddStoreIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :store, null: false, foreign_key: true
  end
end

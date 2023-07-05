class User < ApplicationRecord
  belongs_to :store
  has_secure_password
end

class User < ApplicationRecord
  has_secure_password
  # validates the presence of a email and user_name
  validates :email, :user_name, presence: true
  # the format of the payload
  def to_token_payload
    {
      sub: id,
      email: email,
      user_name: user_name
    }
  end
end

class User < ApplicationRecord
  # association
  has_many :articles, dependent: :nullify
  has_many :comments, dependent: :nullify
  has_many :replies, dependent: :nullify

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

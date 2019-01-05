# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create([
  {
    "email": "A@a.co",
    "user_name": "userA",
    "real_first_name": "aaaa",
    "real_last_name": "abcd",
    "password": "aaaa",
    "password_confirmation": "aaaa"
  },
  {
    "email": "B@b.co",
    "user_name": "userB",
    "real_first_name": "bbbb",
    "real_last_name": "bcde",
    "password": "bbbb",
    "password_confirmation": "bbbb"
  },
  {
    "email": "C@c.co",
    "user_name": "userC",
    "real_first_name": "cccc",
    "real_last_name": "cdef",
    "password": "cccc",
    "password_confirmation": "cccc"
  },
  {
    "email": "D@d.co",
    "user_name": "userD",
    "real_first_name": "dddd",
    "real_last_name": "defg",
    "password": "dddd",
    "password_confirmation": "dddd"
  }
  ])

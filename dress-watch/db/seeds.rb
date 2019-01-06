# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroy_all data in database
User.destroy_all
Article.destroy_all
Comment.destroy_all
Reply.destroy_all
Brand.destroy_all
Product.destroy_all

# start seeding of Users
users = User.create([
  {
    "email": "A@a.co",
    "user_name": "userA",
    "real_first_name": Faker::Name.first_name ,
    "real_last_name": Faker::Name.last_name,
    "password": "aaaa",
    "password_confirmation": "aaaa",
    "role": "member"

  },
  {
    "email": "B@b.co",
    "user_name": "userB",
    "real_first_name": Faker::Name.first_name ,
    "real_last_name": Faker::Name.last_name,
    "password": "bbbb",
    "password_confirmation": "bbbb",
    "role": "member"
  },
  {
    "email": "C@c.co",
    "user_name": "userC",
    "real_first_name": Faker::Name.first_name ,
    "real_last_name": Faker::Name.last_name,
    "password": "cccc",
    "password_confirmation": "cccc",
    "role": "member"
  },
  {
    "email": "D@d.co",
    "user_name": "userD",
    "real_first_name": Faker::Name.first_name ,
    "real_last_name": Faker::Name.last_name,
    "password": "dddd",
    "password_confirmation": "dddd",
    "role": "admin"
  }
  ])

# start seeding of Brands
brands = Brand.create([
  {
    "name": Faker::Company.name,
    "website": Faker::Internet.url,
    "logo": Faker::Company.logo,
    "about": Faker::Company.bs,
    "head_quarters": Faker::Address.full_address,
    "founder": Faker::Name.name_with_middle,
    "founded": Faker::Date.between_except(20.year.ago, 10.year.ago, Date.today)
  },
  {
    "name": Faker::Company.name,
    "website": Faker::Internet.url,
    "logo": Faker::Company.logo,
    "about": Faker::Company.bs,
    "head_quarters": Faker::Address.full_address,
    "founder": Faker::Name.name_with_middle,
    "founded": Faker::Date.between_except(20.year.ago, 10.year.ago, Date.today)
  },
  {
    "name": Faker::Company.name,
    "website": Faker::Internet.url,
    "logo": Faker::Company.logo,
    "about": Faker::Company.bs,
    "head_quarters": Faker::Address.full_address,
    "founder": Faker::Name.name_with_middle,
    "founded": Faker::Date.between_except(20.year.ago, 10.year.ago, Date.today)
  }
  ])

  # create products for bands 3 each
  brands.each do | brand |
    3.times do
      brand.products.create(
        name: Faker::Commerce.product_name,
        details: Faker::Lorem.sentences(1),
        price: Faker::Commerce.price
      )

    end
  end

  # get all products
  products = Product.all

  # user can now post articles two each
  users.each do | user |
    2.times do
      user.articles.create(
        title: Faker::Company.buzzword,
        sub_title: Faker::Company.bs,
        body: Faker::Lorem.paragraphs(2),
        published_at: Faker::Date.backward(30),
        product: products[SecureRandom.random_number(products.count)]
      )
      end
    end

  # get all articles
  articles = Article.all

  # users can now post comment on an article
  articles.each do | article |
    users.each do | user |
      user.comments.create(
        title: Faker::Lorem.word,
        body: Faker::Lorem.sentences(1),
        article_id: article.id,
        published_at: Faker::Date.between_except(article.published_at, Date.today, Date.today),
      )
    end
  end

  # get all comments
  comments = Comment.all

  # users can now reply to an comment
  comments.each do | comment |
    2.times do
      users[SecureRandom.random_number(users.count)].replies.create(
        title: Faker::Lorem.word,
        body: Faker::Lorem.sentences(1),
        comment_id: comment.id,
        published_at: Faker::Date.between_except(comment.published_at, Date.today, Date.today),

      )
    end
  end

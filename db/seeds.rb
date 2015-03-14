# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


3.times do |i|
  site = Site.create(name: "foo + #{i}")

  3.times do |image_i|
    site.images.create(
      captured_at: Time.now,
      url: "http://google.com?q=#{image_i}-#{i}",
    )
  end
end

# BASE_URL = 'https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD'
# ENV["KEY"]



# ******** almost works 
require 'uri'
require 'net/http'
require 'openssl'
require 'pry'
require 'json'


url = URI("https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Host"] = 'hotels4.p.rapidapi.com'
# ENV["KEY"]
request["X-RapidAPI-Key"] = '7062bef93fmshb9d6aeae3417e3fp1f3a1djsn83a764765e1c'
# request["X-RapidAPI-Key"] = ENV["KEY"]

response = http.request(request)
# binding.pry
h = JSON.parse(response.body)
# binding.pry
# binding.pry
# puts h.map {|x| x.values[0]}

bridgets_hotel_data =  JSON.parse(response.read_body)
# p bridgets_hotel_data['data']['body']['searchResults']['results']

# bridgets_hotel_data['data']['body']['searchResults']['results']

bridgets_hotel_data['data']['body']['searchResults']['results'].each do |hotel|
    Hotel.create(name: hotel['name'])
end
# puts response.read_body

# ******** almost works ^^





# require 'uri'
# require 'net/http'
# require 'openssl'
# require 'pry'


# url = URI("https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json?query=San%20Francisco&locale=en_US")


# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)
# request["X-RapidAPI-Host"] = 'hotels-com-free.p.rapidapi.com'
# request["X-RapidAPI-Key"] = '7062bef93fmshb9d6aeae3417e3fp1f3a1djsn83a764765e1c'

# response = http.request(request)
# binding.pry

# puts response.read_body


# puts "Deleting old data..."

# Hotel.destroy_all
# Account.destroy_all
# Profile.destroy_all


# puts "🌱 Creating accounts..."

# Account.create(account_name: "bridget", email:"bridget@gmail.com", password: "bridget")


# puts "🌱 Creating profiles..."

# Profile.create(name: "profile1", image: "https://st4.depositphotos.com/1012074/25277/v/600/depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg", account_id: 1 )
# Profile.create(name: "profile2", image: "https://st2.depositphotos.com/1007566/11574/v/950/depositphotos_115748664-stock-illustration-young-executive-woman-profile-icon.jpg", account_id: 1 )


# puts "🌱 Creating hotels..."

# Hotel.create(name: "Park Lane New York", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/336418375.webp?k=e4e646d0f778ec6649e65b7b2529d228839373538f0dd4a885afad808152e6e9&o=&s=1")
# Hotel.create(name: "The Knickerbocker", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/64854645.webp?k=fd60e2495dc274df151cc8d10c138cf47bae9b62b7c7a62dc6a1c197cffa0835&o=&s=1")
# Hotel.create(name: "Ameritania at Times Square", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/58065044.webp?k=05aa9562d0d713d07820e7e41c34d194add1cbe76dd742b9a7fe0fecf712113f&o=&s=1")
# Hotel.create(name: "Ace Hotel New York", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/82107763.webp?k=c5610a4e3fd93f1cdb08a1ff26d475dd284575bc5025fd460994991368edb744&o=&s=1")
# Hotel.create(name: "Moxy NYC Downtown", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/192329638.webp?k=c2b327007dce4c74eb2267a87e24acdcf7e9a86a3b8050f692dd643ba2f3da56&o=&s=1")
# Hotel.create(name: "Sharaton Tribeca New York Hotel", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/264765896.webp?k=121da9a6e00caf87b675b4cafe70b965af02836a53f053d881878817f9c5016b&o=&s=1")
# Hotel.create(name: "Gansevoort Meatpacking", city_state: "Manhattan, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/249049935.webp?k=b157d3bc5e0559fc8ae14852e1dfc6f87bb5c76f0843b489e0818555be2c4878&o=&s=1")
# Hotel.create(name: "The Box House Hotel", city_state: "Brooklyn, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/21855457.webp?k=c5a0f1aa93e17fe766e28f6f01df24ff6c04981ec65806245bdbec72ffde9271&o=&s=1")
# Hotel.create(name: "Hotel RL Brooklyn", city_state: "Brooklyn, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/173349693.webp?k=580dfb359773bc55886e8e0b2bfb2b3eafed74e312480fae27e1c6cc9df7f25a&o=&s=1")
# Hotel.create(name: "The Williamsburg Hotel", city_state: "Brooklyn, New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/115124826.webp?k=25613733eb8545ea90a626013612f65dd082e3da4f7eb6cfd5766b39b763a072&o=&s=1")
# Hotel.create(name: "Thompson Hollywood", city_state: "Los Angeles, California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/327967213.webp?k=5c7bf9efef0d807459e8ad9a79b7e3745241729aa48b971adee2c72cb271b9f6&o=&s=1")
# Hotel.create(name: "Huntley Santa Monica Beach", city_state: "Los Angeles, California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/134355727.webp?k=d8056d3e05f199f02578474b441ed80d756e43b440bcb1c4d2f935188bba241b&o=&s=1")
# Hotel.create(name: "Freehand Los Angeles", city_state: "Los Angeles, California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/112819619.webp?k=9cc4bd155ce9003c2b274ca2bdd52be07d1d16ed50f80f74dc07312dceb54f33&o=&s=1")
# Hotel.create(name: "Hollywood Inn Suites Hotel", city_state: "Los Angeles, California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/171959516.webp?k=8403dc7b64f23f90debd0aecd117edbaac341da3014a06c1ba3eb0199d04cbd8&o=&s=1")
# Hotel.create(name: "Horton Grand Hotel", city_state: "San Diego, California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/233081307.webp?k=245ff67b763d9faffa7db25e448cbcebe01b2c6a011e5ddc9e75ab03e8f3a88a&o=&s=1")
# Hotel.create(name: "San Diego Marriott Del Mar", city_state: "San Diego, California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/215647589.webp?k=990def055760b81125bbc83f6c29d7b9a21cc43b4913456ebcfaa2a6864aac8c&o=&s=1")
# Hotel.create(name: "Bally's Las Vegas Hotel & Casino", city_state: "Las Vegas, Nevada", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/130456384.webp?k=b8cf7d16bdf688ba5549c22ebe1a4b59484f2f9aa59fc88d1d42952c696133e2&o=&s=1")
# Hotel.create(name: "SAHARA Las Vegas", city_state: "Las Vegas, Nevada", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/217008073.webp?k=2a97e849adb1d0a93a8ba23fe975dc8bc21598a1562587f1206e07b55102a5d4&o=&s=1")
# Hotel.create(name: "Mandarin Oriental Miami", city_state: "Miami, Florida", tag: "https://t-cf.bstatic.com/xdata/images/hotel/square600/249509609.webp?k=aac942ccd5f6ee7dfe7b0857e1f8cd3868ec6faf3010e82a46fce5e4b390ac7d&o=&s=1")
# Hotel.create(name: "Hayes Street Hotel Nashville", city_state: "Nashville, Teneessee", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/99411314.webp?k=59b9fe3bc941eb2f22ccb72449401a8796a436b2b2614b024a139fcd45e35dcd&o=&s=1")
# Hotel.create(name: "Hutton Hotel", city_state: "Nashville, Teneessee", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/318874840.webp?k=f60954891e7e868b7bb15c60c0c34ebae1bbcd3084dc072d4eb251bacc71cc1c&o=&s=1")

# puts "🌱 Creating trips..."
# Trip.create(name: "Girls Trip", location: "NYC", date_start: "05/15/2022", date_end: "06/15/2022", points: 100, profile_id: 1, hotel_id: 1, booked: false )

# puts "Done seeding!" 
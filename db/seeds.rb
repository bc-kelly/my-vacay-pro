# BASE_URL = 'https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD'
# ENV["KEY"]

# This part is what should be commented back in if you want to use the api starting line 5
# Hotel.destroy_all
# Account.destroy_all
# Profile.destroy_all

# puts "🌱 Creating hotels..."
# # ******** almost works 
# require 'uri'
# require 'net/http'
# require 'openssl'
# require 'pry'
# require 'json'


# url = URI('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD')

# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)
# request["X-RapidAPI-Host"] = 'hotels4.p.rapidapi.com'
# # ENV["KEY"]
# request["X-RapidAPI-Key"] = '7062bef93fmshb9d6aeae3417e3fp1f3a1djsn83a764765e1c'
# # request["X-RapidAPI-Key"] = ENV["KEY"]

# response = http.request(request)
# h = JSON.parse(response.body)

# bridgets_hotel_data =  JSON.parse(response.read_body)
# # bridgets_hotel_data['data']['body']['searchResults']['results']
# bridgets_hotel_data['data']['body']['searchResults']['results'].each do |hotel|
#     # binding.pry
#     Hotel.create(name: hotel['name'], city: hotel['address']['locality'], state: hotel['address']['region'])
# end

# This part is what should be commented back in if you want to use the api ending line 38 ^^^

# puts response.read_body




# puts "🌱 Creating hotels two..."
# # ******** almost works 
# require 'uri'
# require 'net/http'
# require 'openssl'
# require 'pry'
# require 'json'


# urltwo = URI('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=7&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD')

# http = Net::HTTP.new(urltwo.host, urltwo.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)
# request["X-RapidAPI-Host"] = 'hotels4.p.rapidapi.com'
# # ENV["KEY"]
# request["X-RapidAPI-Key"] = '7062bef93fmshb9d6aeae3417e3fp1f3a1djsn83a764765e1c'
# # request["X-RapidAPI-Key"] = ENV["KEY"]

# responseTwo = http.request(request)
# hTwo = JSON.parse(responseTwo.body)

# hotel_data_two =  JSON.parse(responseTwo.read_body)
# hotel_data_two['data']['body']['searchResults']['results'].each do |hotelTwo|
#     Hotel.create(name: hotelTwo['name'], city: hotelTwo['address']['locality'], state: hotelTwo['address']['region'])
# end




# require 'uri'
# require 'net/http'
# require 'openssl'

# url = URI("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040")

# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)
# request["X-RapidAPI-Host"] = 'hotels4.p.rapidapi.com'
# request["X-RapidAPI-Key"] = '7062bef93fmshb9d6aeae3417e3fp1f3a1djsn83a764765e1c'

# responsePic = http.request(request)
# j = JSON.parse(responsePic.body)
# hotel_pics =  JSON.parse(responsePic.read_body)
# puts response.read_body




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


puts "Deleting old data..."

Hotel.destroy_all
Account.destroy_all
Profile.destroy_all


puts "🌱 Creating accounts..."

Account.create(account_name: "bridget", email:"bridget@gmail.com", password: "bridget")


puts "🌱 Creating profiles..."

Profile.create(name: "Bridget", image: "https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg", account_id: 1 )
Profile.create(name: "Billy", image: "https://i.pinimg.com/originals/99/a8/3e/99a83e22b4c160d36e1697b4139c803f.jpg", account_id: 1 )
Profile.create(name: "Colin", image: "https://i.pinimg.com/originals/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg", account_id: 1 )


puts "🌱 Creating hotels..."

Hotel.create(name: "Park Lane New York", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/336418375.webp?k=e4e646d0f778ec6649e65b7b2529d228839373538f0dd4a885afad808152e6e9&o=&s=1")
Hotel.create(name: "The Knickerbocker", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/64854645.webp?k=fd60e2495dc274df151cc8d10c138cf47bae9b62b7c7a62dc6a1c197cffa0835&o=&s=1")
Hotel.create(name: "Ameritania at Times Square", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/58065044.webp?k=05aa9562d0d713d07820e7e41c34d194add1cbe76dd742b9a7fe0fecf712113f&o=&s=1")
Hotel.create(name: "Ace Hotel New York", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/82107763.webp?k=c5610a4e3fd93f1cdb08a1ff26d475dd284575bc5025fd460994991368edb744&o=&s=1")
Hotel.create(name: "Moxy NYC Downtown", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/192329638.webp?k=c2b327007dce4c74eb2267a87e24acdcf7e9a86a3b8050f692dd643ba2f3da56&o=&s=1")
Hotel.create(name: "Sharaton Tribeca New York Hotel", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/264765896.webp?k=121da9a6e00caf87b675b4cafe70b965af02836a53f053d881878817f9c5016b&o=&s=1")
Hotel.create(name: "Gansevoort Meatpacking", city: "Manhattan", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/249049935.webp?k=b157d3bc5e0559fc8ae14852e1dfc6f87bb5c76f0843b489e0818555be2c4878&o=&s=1")
Hotel.create(name: "The Box House Hotel", city: "Brooklyn", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/21855457.webp?k=c5a0f1aa93e17fe766e28f6f01df24ff6c04981ec65806245bdbec72ffde9271&o=&s=1")
Hotel.create(name: "Hotel RL Brooklyn", city: "Brooklyn", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/173349693.webp?k=580dfb359773bc55886e8e0b2bfb2b3eafed74e312480fae27e1c6cc9df7f25a&o=&s=1")
Hotel.create(name: "The Williamsburg Hotel", city: "Brooklyn", state: "New York", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/115124826.webp?k=25613733eb8545ea90a626013612f65dd082e3da4f7eb6cfd5766b39b763a072&o=&s=1")
Hotel.create(name: "Thompson Hollywood", city: "Los Angeles", state: "California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/327967213.webp?k=5c7bf9efef0d807459e8ad9a79b7e3745241729aa48b971adee2c72cb271b9f6&o=&s=1")
Hotel.create(name: "Huntley Santa Monica Beach", city: "Los Angeles", state: "California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/134355727.webp?k=d8056d3e05f199f02578474b441ed80d756e43b440bcb1c4d2f935188bba241b&o=&s=1")
Hotel.create(name: "Freehand Los Angeles", city: "Los Angeles", state: "California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/112819619.webp?k=9cc4bd155ce9003c2b274ca2bdd52be07d1d16ed50f80f74dc07312dceb54f33&o=&s=1")
Hotel.create(name: "Hollywood Inn Suites Hotel", city: "Los Angeles", state: "California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/171959516.webp?k=8403dc7b64f23f90debd0aecd117edbaac341da3014a06c1ba3eb0199d04cbd8&o=&s=1")
Hotel.create(name: "Horton Grand Hotel", city: "San Diego", state: "California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/233081307.webp?k=245ff67b763d9faffa7db25e448cbcebe01b2c6a011e5ddc9e75ab03e8f3a88a&o=&s=1")
Hotel.create(name: "San Diego Marriott Del Mar", city: "San Diego", state: "California", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/215647589.webp?k=990def055760b81125bbc83f6c29d7b9a21cc43b4913456ebcfaa2a6864aac8c&o=&s=1")
Hotel.create(name: "Bally's Las Vegas Hotel & Casino", city: "Las Vegas", state: "Nevada", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/130456384.webp?k=b8cf7d16bdf688ba5549c22ebe1a4b59484f2f9aa59fc88d1d42952c696133e2&o=&s=1")
Hotel.create(name: "SAHARA Las Vegas", city: "Las Vegas", state: "Nevada", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/217008073.webp?k=2a97e849adb1d0a93a8ba23fe975dc8bc21598a1562587f1206e07b55102a5d4&o=&s=1")
Hotel.create(name: "Fortune House Hotel Suites", city: "Miami", state: "Florida", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/46388234.webp?k=2b6da34b49586f64559d8152efca2efa740c37e8f7c3004b6b09e8aab0f8e080&o=&s=1", link: "https://www.booking.com/hotel/us/fortune-house.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dist=0;group_adults=2;group_children=0;hapos=24;hpos=24;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652300082;srpvid=93168e18dcc502f2;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "citizenM Miami Brickell", city: "Miami", state: "Florida", tag: "", image:"https://t-cf.bstatic.com/xdata/images/hotel/square600/347986682.webp?k=cfe81d4bfc16f5a45e58035c1a32f2ab2667041462bba927c4aecb830cfc1719&o=&s=1", link: "https://www.booking.com/hotel/us/citizenm-miami-brickell.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dist=0;group_adults=2;group_children=0;hapos=66;hpos=16;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652299954;srpvid=93168e18dcc502f2;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "Opal Key Resort & Marina", city: "Key West", state: "Florida", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/102404409.webp?k=8a25c410ba5fc68581b55f5ab62c8f9f634d50948e30c9461d087a3b6d62945f&o=&s=1", link: "https://www.booking.com/hotel/us/westin-key-west-resort-marina.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dest_id=20022831;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652299396;srpvid=20628d01f6040297;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "Oceans Edge Key West", city: "Key West", state: "Florida", tag: "", image:"https://t-cf.bstatic.com/xdata/images/hotel/square600/89926963.webp?k=75958c6ab961128d2f38da4d783d789198e61ab2499693ff37536856b48f75e4&o=&s=1", link: "https://www.booking.com/hotel/us/oceans-edge-key-west.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dest_id=20022831;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=11;hpos=11;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652281347;srpvid=17c869c145cd00f6;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "Hayes Street Hotel Nashville", city: "Nashville", state: "Tennessee", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/99411314.webp?k=59b9fe3bc941eb2f22ccb72449401a8796a436b2b2614b024a139fcd45e35dcd&o=&s=1")
Hotel.create(name: "Hutton Hotel", city: "Nashville", state: "Tennessee", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/318874840.webp?k=f60954891e7e868b7bb15c60c0c34ebae1bbcd3084dc072d4eb251bacc71cc1c&o=&s=1")
Hotel.create(name: "Sky Ranch Lodge", city: "Sedona", state: "Arizona", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/205396464.webp?k=0d877a5d247238f3230bf5e148f5d0d1c88d76b23c08155e7ae3bb19ec3e1d6d&o=&s=1")
Hotel.create(name: "Amara Resort & Spa", city: "Sedona", state: "Arizona", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/19282903.webp?k=2a7ad36233f813562b2ff681100c7d4cc337e9c8c87ef85b8f9b03041eaecaf6&o=&s=1")
Hotel.create(name: "Crowne Plaza Seattle", city: "Seattle", state: "Washington", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/235019355.webp?k=dfc608a7823b3544f81e25ce432f0d2d41837cbeb08936c127a7d2cacfd3dc72&o=&s=1")
Hotel.create(name: "MarQueen Hotel", city: "Seattle", state: "Washington", tag: "historic", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/26193118.webp?k=976c0354518aa5b20ebe75905535c61e1e0a66bb1eabfbb7f70d49f6dc626a30&o=&s=1")
Hotel.create(name: "The Heathman Hotel", city: "Portland", state: "Oregon", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/155528417.webp?k=a092ca2be609b22f4b74744d098d5af5a5777f81eeae467b22e89eee0937f2bd&o=&s=1")
Hotel.create(name: "Embassy Suites Portland", city: "Portland", state: "Oregon", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/40712134.webp?k=432a8f7f2ecbc6bac235531587fdf2b87deb176b2f99ca3482441ee37b63e15e&o=&s=1")
Hotel.create(name: "Four Seaasons St. Louis", city: "St. Louis", state: "Missouri", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/255993925.webp?k=b8e9cc8095709a2448af1d456d4a577680c19e7531d8a887460ae995f67c2555&o=&s=1")
Hotel.create(name: "East Austin Hotel", city: "Austin", state: "Texas", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/333974632.webp?k=130f1e24e94c0f35d64e53dcadba33e341433aa9d6a6108fa114be1f37c26685&o=&s=1", link: "https://www.booking.com/hotel/us/east-austin.html?label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&aid=309654&ucfs=1&arphpl=1&dest_id=20126394&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=9&hapos=9&sr_order=popularity&srpvid=48cf92682bb70984&srepoch=1652302161&from_sustainable_property_sr=1&from=searchresults#hotelTmpl")
Hotel.create(name: "Riverwalk Plaza Hotel", city: "San Antonio", state: "Texas", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/194747941.webp?k=f578d2069190619bbd4df63825026c6a8478ce39250f0ae61f200bb5a8d4a018&o=&s=1", link: "https://www.booking.com/hotel/us/riverwalk-plaza-san-antonio-texas.html?label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&aid=309654&ucfs=1&arphpl=1&dest_id=20131185&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=21&hapos=46&sr_order=popularity&srpvid=450491bafefc0217&srepoch=1652301813&from=searchresults#hotelTmpl")
Hotel.create(name: "Sonesta Resort", city: "Hilton Head Island", state: "South Carolina", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/252679078.webp?k=91b142dc7e78a044c8dac75f0a93c18b62614d02e4a28fbd058a2aca233939b8&o=&s=1", link: "https://www.booking.com/hotel/us/sonesta-resort-hilton-head-island.html?label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&aid=309654&ucfs=1&arphpl=1&dest_id=20116958&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=16&hapos=16&sr_order=popularity&srpvid=8fa58ec6ac4d001a&srepoch=1652300301&from_beach_sr=1&from=searchresults#hotelTmpl")
Hotel.create(name: "Millennium Minneapolis", city: "Minneapolis", state: "Minnesota", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/17880463.webp?k=dd3479ab3c08d05690346b426fda7be406083dbbad18344a4866fffe7088995d&o=&s=1", link: "https://www.booking.com/hotel/us/millennium-minneapolis.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dest_id=20067845;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652300241;srpvid=8f828ea80aa2000c;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "The Westin Minneapolis", city: "Minneapolis", state: "Minnesota", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/28911967.webp?k=eccd5b6d201607cf230ff4ad93ff8232a0f5020317b06baff6faa0b482bc1aef&o=&s=1", link: "https://www.booking.com/hotel/us/the-westin-minneapolis.html?label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&aid=309654&ucfs=1&arphpl=1&dest_id=20067845&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=21&hapos=21&sr_order=popularity&srpvid=8f828ea80aa2000c&srepoch=1652300241&from_sustainable_property_sr=1&from=searchresults#hotelTmpl")
Hotel.create(name: "The Newport Harbor Hotel & Marina", city: "Newport", state: "Rhode Island", tag: "", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/22905134.webp?k=bc8798849489d4446f009cba65513cd4bdf8fa76ed50f5cbcb5a3ba6fba5f4a0&o=&s=1", link: "https://www.booking.com/hotel/us/newport-49-americas-cup-avenue.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dest_id=20028374;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=3;hpos=3;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652300174;srpvid=6b068e86926c0142;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "Hotel Viking", city: "Newport", state: "Rhode Island", tag: "historic", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/76760095.webp?k=46558af030428b05366aa01762ec2dca8bae774b13ee8457edf876704a6adcd8&o=&s=1", link: "https://www.booking.com/hotel/us/viking.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dest_id=20028374;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=5;hpos=5;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652300174;srpvid=6b068e86926c0142;type=total;ucfs=1&#hotelTmpl")
Hotel.create(name: "Grand Hyatt Vail", city: "Vail", state: "Colorado", tag: "adventure", image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/293193649.webp?k=ba0d62b1ad124190b6ad069338d35db2ea6d668d81ab8bd41d8af854ddff33ea&o=&s=1", link: "https://www.booking.com/hotel/us/vail-cascade-resort-and-spa.html?label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&aid=309654&ucfs=1&arphpl=1&dest_id=20018427&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=7&hapos=7&sr_order=popularity&srpvid=fac18e6f62fc03e6&srepoch=1652300129&from=searchresults#hotelTmpl")




puts "🌱 Creating trips..."
Trip.create(name: "Girls Trip", location: "NYC", date_start: "05/15/2022", date_end: "05/25/2022", profile_id: 1, hotel_id: 12, booked: false, account_id: 1)
Trip.create(name: "Bach Party", location: "Nashville", date_start: "07/10/2022", date_end: "07/15/2022", profile_id: 2, hotel_id: 23, booked: false, account_id: 1)
Trip.create(name: "Ski Vacay", location: "Colorado", date_start: "12/17/2022", date_end: "12/24/2022", profile_id: 3, hotel_id: 39, booked: false, account_id: 1)

puts "Done seeding!" 
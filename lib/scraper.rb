# require 'HTTParty'
require 'nokogiri'
require 'open-uri'


# require_relative './hotel.rb'

class Scraper

  # attr_accessor :parse_page

  def initialize
    Nokogiri::HTML(URI.open("http://store.nike.com/us/en_us/pw/mens-nikeid-lifestyle-shoes/1k9Z7puZoneZoi3"))
    # @parse_page ||= Nokogiri::HTML(doc)
  end

  def get_names
    item_container.css(".product-card__title").children.map { |name| name.text }.compact
  end

  def get_prices
    item_container.css(".product-card__price").children.map { |price| price.text }.compact
  end

  private 

  def item_container
    parse.page.css(".product-card css-1v1uza4 css-z5nr6i css-11ziap1 css-14d76vy css-dpr2cn product-grid__card")
  end

  scraper = Scraper.new
  names = scraper.get_names
  prices = scraper.get_prices

  (0...prices.size).each do |index|
    puts "- - index: #{index + 1} - -"
    puts "Name: #{names[index]} | Price: #{prices[index]}"
  end

end
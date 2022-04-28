class HotelsController < ApplicationController

    def index
        hotels = Hotel.all
        render json: hotels, status: :ok
    end

    def show
        hotel = Hotel.find(params[:id])
        render json: hotel, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Hotel not found"}, status: :not_found
    end

end

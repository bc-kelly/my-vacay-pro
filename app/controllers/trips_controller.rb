class TripsController < ApplicationController

    # def create
    #     trip = Trip.create!(trip_params, account_id: session[:account_id])
    #     session[:trip_id] = trip.id
    #     render json: trip, status: :created
    #   end

    def create
      trip = Trip.new(trip_params)
      trip.account_id = session[:account_id]
      trip.save
    end

      def show
        # render json: @current_profile
        trip = Trip.find_by(account_id: session[:account_id])
        if trip
          render json: trip
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def index
        trips = Trip.where(account_id: session[:account_id])
        render json: trips, status: :ok
        # tripOne= Account.find_by(profile_id)
        # render json:tripOne, status: :ok
      end

      private 
      
      def trip_params
        params.permit(:name, :location, :date_start, :date_end, :profile_id, :hotel_id, :booked)
      end


end

# Bar.joins(:foo).where(foo: { qux: 'hi' })

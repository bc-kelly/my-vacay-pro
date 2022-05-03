class TripsController < ApplicationController

    def create
        trip = Trip.create!(trip_params)
        session[:trip_id] = trip.id
        render json: trip, status: :created
      end

      def show
        # render json: @current_profile
        trip = Trip.find_by(id: session[:account_id])
        if trip
          render json: trip
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def index
        trips = Trip.where(account_id: session[:account_id])
        render json: trips, status: :ok
      end

      private 
      
      def trip_params
        params.permit(:name, :location, :date_start, :date_end, :profile_id, :hotel_id, :booked)
      end


end

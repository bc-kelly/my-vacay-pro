class AccountsController < ApplicationController

    def create
        account = Account.create!(account_params)
        session[:account_id] = account.id
        render json: account, status: :created
      end
    
      def show
        render json: @current_account
      end
    
      private
    
      def account_params
        params.permit(:email, :password, :password_confirmation)
      end

end

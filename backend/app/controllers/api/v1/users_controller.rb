class Api::V1::UsersController < ApplicationController
  include Authentication
  before_action :authenticate_user, only: [:show]

  def show
    # userが取得できた場合はユーザー情報を返す
    user = User.find(@current_user_id)
    render json: {status: "success", data: user}
  end

  def create
    user = User.new(user_params)
    if user.save
      token = JwtService.encode(user.id)
      cookies[:token] = token
      render json: {status: "create", data: user}
    else
        render json: {status: "error"}
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :number, :password, :store_id)
  end
end

class Api::V1::StoresController < ApplicationController
  def create
    @store = Store.new(store_params)
    if @store.save
      render json: {status: "create", data: @store}
    else
      render json: {status: "error"}
    end
  end

  private
  def store_params
    params.require(:store).permit(:name, :number)
  end
end

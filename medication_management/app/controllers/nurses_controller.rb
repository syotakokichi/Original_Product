# app/controllers/nurses_controller.rb
class NursesController < ApplicationController
  def index
    @nurses = Nurse.all
    render json: @nurses
  end

  def show
    @nurse = Nurse.find(params[:id])
    render json: @nurse
  end

  def create
    @nurse = Nurse.new(nurse_params)
    if @nurse.save
      render json: @nurse, status: :created
    else
      render json: @nurse.errors, status: :unprocessable_entity
    end
  end

  def update
    @nurse = Nurse.find(params[:id])
    if @nurse.update(nurse_params)
      render json: @nurse
    else
      render json: @nurse.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @nurse = Nurse.find(params[:id])
    @nurse.destroy
  end

  private

  def nurse_params
    params.require(:nurse).permit(:employee_id, :station_id, :password)
  end
end

# コントローラー作成
class NursingStationsController < ApplicationController
  def index
    @nursing_stations = NursingStation.all
    render json: @nursing_stations
  end

  def show
    @nursing_station = NursingStation.find(params[:id])
    render json: @nursing_station
  end

  def create
    @nursing_station = NursingStation.new(nursing_station_params)
    if @nursing_station.save
      render json: @nursing_station, status: :created
    else
      render json: @nursing_station.errors, status: :unprocessable_entity
    end
  end

  def update
    @nursing_station = NursingStation.find(params[:id])
    if @nursing_station.update(nursing_station_params)
      render json: @nursing_station
    else
      render json: @nursing_station.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @nursing_station = NursingStation.find(params[:id])
    @nursing_station.destroy
  end

  private

  def nursing_station_params
    params.require(:nursing_station).permit(:name, :phone, :email)
  end
end

# コントローラー作成
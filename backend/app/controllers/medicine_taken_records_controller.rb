# medicine_taken_records_controller.rb
class MedicineTakenRecordsController < ApplicationController
  before_action :set_medicine_taken_record, only: [:show, :update, :destroy]

  def index
    @medicine_taken_records = MedicineTakenRecord.all
    render json: @medicine_taken_records
  end

  def show
    render json: @medicine_taken_record
  end

  def create
    @medicine_taken_record = MedicineTakenRecord.new(medicine_taken_record_params)

    if @medicine_taken_record.save
      render json: @medicine_taken_record, status: :created, location: @medicine_taken_record
    else
      render json: @medicine_taken_record.errors, status: :unprocessable_entity
    end
  end

  def update
    if @medicine_taken_record.update(medicine_taken_record_params)
      render json: @medicine_taken_record
    else
      render json: @medicine_taken_record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @medicine_taken_record.destroy
  end

  private
    def set_medicine_taken_record
      @medicine_taken_record = MedicineTakenRecord.find(params[:id])
    end

    def medicine_taken_record_params
      params.require(:medicine_taken_record).permit(:patient_medicine_id, :date_taken, :time_taken, :taken)
    end
end

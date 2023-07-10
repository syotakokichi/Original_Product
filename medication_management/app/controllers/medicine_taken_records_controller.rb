class MedicineTakenRecordsController < ApplicationController
  before_action :set_medicine_taken_record, only: [:show, :update, :destroy]

  # GET /medicine_taken_records
  def index
    @medicine_taken_records = MedicineTakenRecord.all
    render json: @medicine_taken_records
  end

  # GET /medicine_taken_records/:id
  def show
    render json: @medicine_taken_record
  end

  # POST /medicine_taken_records
  def create
    @medicine_taken_record = MedicineTakenRecord.new(medicine_taken_record_params)

    if @medicine_taken_record.save
      render json: @medicine_taken_record, status: :created, location: @medicine_taken_record
    else
      render json: @medicine_taken_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /medicine_taken_records/:id
  def update
    if @medicine_taken_record.update(medicine_taken_record_params)
      render json: @medicine_taken_record
    else
      render json: @medicine_taken_record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /medicine_taken_records/:id
  def destroy
    @medicine_taken_record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medicine_taken_record
      @medicine_taken_record = MedicineTakenRecord.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def medicine_taken_record_params
      params.require(:medicine_taken_record).permit(:patient_medicine_id, :date_taken, :time_taken, :taken)
    end
end

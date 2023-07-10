class PatientMedicinesController < ApplicationController
  before_action :set_patient_medicine, only: [:show, :update, :destroy]

  # GET /patient_medicines
  def index
    @patient_medicines = PatientMedicine.all
    render json: @patient_medicines
  end

  # GET /patient_medicines/:id
  def show
    render json: @patient_medicine
  end

  # POST /patient_medicines
  def create
    @patient_medicine = PatientMedicine.new(patient_medicine_params)

    if @patient_medicine.save
      render json: @patient_medicine, status: :created, location: @patient_medicine
    else
      render json: @patient_medicine.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /patient_medicines/:id
  def update
    if @patient_medicine.update(patient_medicine_params)
      render json: @patient_medicine
    else
      render json: @patient_medicine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /patient_medicines/:id
  def destroy
    @patient_medicine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient_medicine
      @patient_medicine = PatientMedicine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def patient_medicine_params
      params.require(:patient_medicine).permit(:patient_id, :medicine_id)
    end
end

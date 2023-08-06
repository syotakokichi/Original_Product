# patient_medicines_controller.rb
class PatientMedicinesController < ApplicationController
  before_action :set_patient_medicine, only: [:show, :update, :destroy]

  def index
    @patient_medicines = PatientMedicine.all
    render json: @patient_medicines
  end

  def show
    render json: @patient_medicine
  end

  def create
    @patient_medicine = PatientMedicine.new(patient_medicine_params)

    if @patient_medicine.save
      render json: @patient_medicine, status: :created, location: @patient_medicine
    else
      render json: @patient_medicine.errors, status: :unprocessable_entity
    end
  end

  def update
    if @patient_medicine.update(patient_medicine_params)
      render json: @patient_medicine
    else
      render json: @patient_medicine.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @patient_medicine.destroy
  end

  private
    def set_patient_medicine
      @patient_medicine = PatientMedicine.find(params[:id])
    end

    def patient_medicine_params
      params.require(:patient_medicine).permit(:patient_id, :medicine_id)
    end
end
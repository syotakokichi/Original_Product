class MedicinesController < ApplicationController
  before_action :set_medicine, only: [:show, :update, :destroy]

  # GET /medicines
  def index
    @medicines = Medicine.all
    render json: @medicines
  end

  # GET /medicines/:id
  def show
    render json: @medicine
  end

  # POST /medicines
  def create
    @medicine = Medicine.new(medicine_params)

    if @medicine.save
      render json: @medicine, status: :created, location: @medicine
    else
      render json: @medicine.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /medicines/:id
  def update
    if @medicine.update(medicine_params)
      render json: @medicine
    else
      render json: @medicine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /medicines/:id
  def destroy
    @medicine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medicine
      @medicine = Medicine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def medicine_params
      params.require(:medicine).permit(:name, :unit, :frequency)
    end
end

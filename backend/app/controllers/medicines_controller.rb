# medicines_controller.rb
class MedicinesController < ApplicationController
  before_action :set_medicine, only: [:show, :update, :destroy]

  def index
    @medicines = Medicine.all
    render json: @medicines
  end

  def show
    render json: @medicine
  end

  def create
    @medicine = Medicine.new(medicine_params)

    if @medicine.save
      render json: @medicine, status: :created, location: @medicine
    else
      render json: @medicine.errors, status: :unprocessable_entity
    end
  end

  def update
    if @medicine.update(medicine_params)
      render json: @medicine
    else
      render json: @medicine.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @medicine.destroy
  end

  private
    def set_medicine
      @medicine = Medicine.find(params[:id])
    end

    def medicine_params
      params.require(:medicine).permit(:name, :unit, :frequency)
    end
end
